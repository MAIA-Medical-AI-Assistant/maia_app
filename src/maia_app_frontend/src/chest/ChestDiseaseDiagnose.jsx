import React, { useState, useRef, useEffect } from 'react';
import { maia_app_backend } from 'declarations/maia_app_backend';
import { Card, Button, Upload, List, Modal, Avatar, message as antdMessage } from 'antd';
import { SearchOutlined, QuestionCircleOutlined,  LoadingOutlined } from '@ant-design/icons';
import GeminiApi from '../gemini/GeminiApi';

const { Dragger } = Upload;


const ChestDiseaseDiagnose = () => {
  const [loading, setLoading] = useState(false);
  const [classificationResults, setClassificationResults] = useState([]);
  const imgRef = useRef(null);
  const [image, setImage] = useState(null);
  const [openChestQAModal, setOpenChestQAModal] = useState(false);
  const [label, setLabel] = useState('');
  useEffect(() => {
    if (image) {
      const url = URL.createObjectURL(image);
      imgRef.current.src = url;
      imgRef.current.style.display = 'block';
    }
  }, [image]);

  const classify = async () => {
    setLoading(true);
    antdMessage.info('Working on it...');

    try {
      const blob = await resize(imgRef.current);
      const result = await maia_app_backend.lung_disease_diagnose(new Uint8Array(blob));
      if (result.Ok) {
        setClassificationResults(result.Ok);
        antdMessage.success('Diagnose successful');
      } else {
        throw result.Err;
      }
    } catch (err) {
      antdMessage.error(`Failed to diagnose: ${JSON.stringify(err)}`);
    }
    setLoading(false);
  };

  const openQAModal = () => {
    setOpenChestQAModal(true);
  }

  const closeQAModal = () => {
    setOpenChestQAModal(false);
  }

  const resize = async (img) => {
    const canvas = document.createElement("canvas");
    canvas.width = 150;
    canvas.height = 150;
    let scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
    let width = img.naturalWidth * scale;
    let height = img.naturalHeight * scale;
    let x = canvas.width / 2 - width / 2;
    let y = canvas.height / 2 - height / 2;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(img, x, y, width, height);
    }
    let bytes = await serialize(canvas);
    return bytes;
  };

  const serialize = (canvas) => {
    return new Promise((resolve) => canvas.toBlob((blob) => blob.arrayBuffer().then(resolve), "image/png", 0.9));
  };

  return (
    <>
      <Card style={{ width: '100%' }}>
        <img id="image" ref={imgRef} style={{ display: 'none', height: '224px' }} alt="Preview" />
        {image && (
            <Button
    onClick={classify}
    icon={loading ? <LoadingOutlined spin /> : <SearchOutlined />}
    disabled={loading}
    style={{ marginTop: 10 }}
  >
    {loading ? 'Diagnosing...' : 'Diagnose'}
  </Button>
        )}
        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
          {!loading && classificationResults.length > 0 && (
            <List
              header={<div>Diagnose Results</div>}
              bordered
              dataSource={classificationResults}
              renderItem={(item) => (
                <List.Item>
                  <b>{item.label}</b>
                  {setLabel(item.label)}
                  {item.label != "Normal" ? <Button onClick={openQAModal} icon={<QuestionCircleOutlined />}>Learn more.</Button> : <div></div>}
                </List.Item>
              )}
            />
          )}
        </div>
        { image ? <div></div> :  <>
        <Dragger beforeUpload={() => false}
        onChange={(info) => {
          if (info.fileList.length > 0) {
            const file = info.fileList[0].originFileObj;
            setImage(file);
          }
        }}>
          <Avatar size="large" shape="square" src="lungs.png"></Avatar>
        <p className="ant-upload-text">Click or drag your Chest X-Ray image to upload</p>
        <p className="ant-upload-hint">
          You can receive diagnosis for 4 different types of diseases based on your Chest X-Ray image.
        </p>
      </Dragger>
      </>
} 

      </Card>

      <Modal
        title={label}
        open={openChestQAModal}
        onCancel={closeQAModal}
        style={{ left: "500px", top: "165px" }}
        footer={[
          <Button key="back" onClick={closeQAModal}>
            Close
          </Button>,
        ]}
      >
        <GeminiApi label={label} />
      </Modal>
    </>
  );
};

export default ChestDiseaseDiagnose;
