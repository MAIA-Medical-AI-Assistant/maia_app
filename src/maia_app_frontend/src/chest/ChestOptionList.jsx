import React, { useState } from 'react';
import { Button, List, Modal} from 'antd';
import { RightSquareOutlined, PictureOutlined } from '@ant-design/icons';
import ChestCTDiagnose from './ChestCTDiagnose';
import ChestDiseaseDiagnose from './ChestDiseaseDiagnose';
const data = [
  {
    title: 'Ant Design Title 1',
  },
];

const OptionList = () => {
  const [openChestDisease, setOpenChestDisease] = useState(false);
  const [openChestCT, setOpenChestCT] = useState(false);

  const [image, setImage] = useState();

  const openChestDiseaseModal = () => {
    setOpenChestDisease(true);
  };

  const closeChestDiseaseModal = () => {
    setOpenChestDisease(false);
  };

  const openChestCTModal = () => {
    setOpenChestCT(true);
  };

  const closeChestCTModal = () => {
    setOpenChestCT(false);
  };

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <>
            <List.Item
              actions={[
                <a onClick={openChestDiseaseModal} key="list-loadmore-edit">
                  <RightSquareOutlined style={{ fontSize: '22px', color: '#000' }} />
                </a>,
              ]}
            >
              <List.Item.Meta
                avatar={<PictureOutlined />}
                title={"Chest X-Ray Diagnose"}
                description="Upload your Chest X-Ray and receive diagnose."
              />
            </List.Item>
            <List.Item
              actions={[
                <a onClick={openChestCTModal} key="list-loadmore-edit">
                  <RightSquareOutlined style={{ fontSize: '22px', color: '#000' }} />
                </a>,
              ]}
            >
              <List.Item.Meta
                avatar={<PictureOutlined />}
                title={"Chest CT Diagnose"}
                description="Upload your Chest CT and receive diagnose."
              />
            </List.Item>
          </>
        )}
      />

      <Modal
        title="Chest X-Ray Diagnose"
        open={openChestDisease}
        onCancel={closeChestDiseaseModal}
        style={{ left: "500px", top: "145px" }}
        footer={[
          <Button key="back" onClick={closeChestDiseaseModal}>
            Close
          </Button>,
        ]}
      >
        <ChestDiseaseDiagnose />
      </Modal>

      <Modal
        title="Chest CT Diagnose"
        open={openChestCT}
        onCancel={closeChestCTModal}
        style={{ left: "500px", top: "165px" }}
        footer={[
          <Button key="back" onClick={closeChestCTModal}>
            Close
          </Button>,
        ]}
      >
        <ChestCTDiagnose />
      </Modal>
    </>
  );
};

export default OptionList;
