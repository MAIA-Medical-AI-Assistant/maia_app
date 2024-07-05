import React, { useState } from 'react';
import { Button, List, Modal} from 'antd';
import { RightSquareOutlined, PictureOutlined } from '@ant-design/icons';
import BrainTumorDiagnose from './BrainTumorDiagnose';

const data = [
  {
    title: 'Ant Design Title 1',
  },
];

const BrainOptionList = () => {
  const [openBrainTumor, setOpenBrainTumor] = useState(false);

  const [image, setImage] = useState();

  const openBrainTumorModal = () => {
    setOpenBrainTumor(true);
  };

  const closeBrainTumorModal = () => {
    setOpenBrainTumor(false);
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
                <a onClick={openBrainTumorModal} key="list-loadmore-edit">
                  <RightSquareOutlined style={{ fontSize: '22px', color: '#000' }} />
                </a>,
              ]}
            >
              <List.Item.Meta
                avatar={<PictureOutlined />}
                title={"Brain CT Diagnose"}
                description="Upload your Brain CT and receive diagnose."
              />
            </List.Item>
          </>
        )}
      />

      <Modal
        title="Brain CT Diagnose"
        open={openBrainTumor}
        onCancel={closeBrainTumorModal}
        style={{ left: "500px", top: "90px" }}
        footer={null}
      >
        <BrainTumorDiagnose />
      </Modal>
    </>
  );
};

export default BrainOptionList;
