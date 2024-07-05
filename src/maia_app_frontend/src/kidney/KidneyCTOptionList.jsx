import React, { useState } from 'react';
import { Button, List, Modal} from 'antd';
import { RightSquareOutlined, PictureOutlined } from '@ant-design/icons';
import KidneyCTDiagnose from './KidneyCTDiagnose';

const data = [
  {
    title: 'Ant Design Title 1',
  },
];

const KidneyCTOptionList = () => {
  const [openKidneyCT, setOpenKidneyCT] = useState(false);

  const [image, setImage] = useState();

  const openKidneyCTModal = () => {
    setOpenKidneyCT(true);
  };

  const closeKidneyCTModal = () => {
    setOpenKidneyCT(false);
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
                <a onClick={openKidneyCTModal} key="list-loadmore-edit">
                  <RightSquareOutlined style={{ fontSize: '22px', color: '#000' }} />
                </a>,
              ]}
            >
              <List.Item.Meta
                avatar={<PictureOutlined />}
                title={"Kidney CT Diagnose"}
                description="Upload Kidney CT and receive diagnose."
              />
            </List.Item>
          </>
        )}
      />

      <Modal
        title="Kidney CT Diagnose"
        open={openKidneyCT}
        onCancel={closeKidneyCTModal}
        style={{ left: "510px", top: "280px" }}
        footer={[
          <Button key="back" onClick={closeKidneyCTModal}>
            Close
          </Button>,
        ]}
      >
        <KidneyCTDiagnose />
      </Modal>
    </>
  );
};

export default KidneyCTOptionList;
