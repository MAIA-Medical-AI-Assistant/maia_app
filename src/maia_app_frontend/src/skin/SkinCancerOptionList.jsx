import React, { useState } from 'react';
import { Button, List, Modal} from 'antd';
import { RightSquareOutlined, PictureOutlined } from '@ant-design/icons';
import SkinCancerDiagnose from './SkinCancerDiagnose';

const SkinCancerOptionList = () => {
  const [openSkinCancer, setOpenSkinCancer] = useState(false);

  const [image, setImage] = useState();

  const openSkinCancerModal = () => {
    setOpenSkinCancer(true);
  };

  const closeSkinCancerModal = () => {
    setOpenSkinCancer(false);
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
                <a onClick={openSkinCancerModal} key="list-loadmore-edit">
                  <RightSquareOutlined style={{ fontSize: '22px', color: '#000' }} />
                </a>,
              ]}
            >
              <List.Item.Meta
                avatar={<PictureOutlined />}
                title={"Skin Cancer Diagnose"}
                description="Upload image of the moles and receive diagnose."
              />
            </List.Item>
          </>
        )}
      />

      <Modal
        title="Skin Cancer Detection"
        open={openSkinCancer}
        onCancel={closeSkinCancerModal}
        style={{ left: "560px", top: "230px" }}
        footer={[
          <Button key="back" onClick={closeSkinCancerModal}>
            Close
          </Button>,
        ]}
      >
        <SkinCancerDiagnose />
      </Modal>
    </>
  );
};

export default SkinCancerOptionList;
