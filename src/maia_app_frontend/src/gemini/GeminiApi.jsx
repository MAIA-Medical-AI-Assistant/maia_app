import React, { useState, useEffect } from 'react';
import { Skeleton, Collapse, Button, Modal, Input } from 'antd';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
const { TextArea } = Input;

const GeminiApi = ({ label }) => {
  const [model, setModel] = useState(null);
  const [qaPairs, setQAPairs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [userQuestion, setUserQuestion] = useState('');
  const [userAnswer, setUserAnswer] = useState('');

  const API_KEY = "Insert your own api key.";

  useEffect(() => {
    const getModel = async () => {
      if (API_KEY) {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        setModel(model);
      } else {
        console.error('API_KEY is not defined');
      }
    };
    getModel();
  }, [API_KEY]);

  useEffect(() => {
    const fetchQA = async () => {
      if (model) {
        const questions = [
          `How is ${label} treated?`,
          `Can ${label} be prevented?`,
          `What are the symptoms of ${label}?`,
          `Is ${label} curable?`,
          `Who is at risk for ${label}?`
        ];

        const qaPairs = [];
        for (let i = 0; i < questions.length; i++) {
          const prompt = `Answer ${questions[i]} shortly in maximum 2 short sentences. Act like a doctor who has expertise in this topic.`;
          try {
            const result = await model.generateContent(prompt);
            const response = await result.response.text();
            qaPairs.push({ question: questions[i], answer: response });
          } catch (error) {
            console.error('Error generating content:', error);
          }
        }
        setQAPairs(qaPairs);
        setLoading(false);
      }
    };

    fetchQA();
  }, [label, model]);

  const handleAskQuestion = async () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleSubmit = async () => {
    try {
      const prompt = `Answer ${userQuestion} like you are a professional doctor which has expertise in the users question topic In maximum 3 short sentences. If the question is not related to health or ${label} kindly reject the question with saying, "I can only assist you with healtcare-wise topic" you can change the reject message.`;
      const result = await model.generateContent(prompt);
      const response = await result.response.text();
      const updatedQAPairs = [...qaPairs, { question: userQuestion, answer: response }];
      setQAPairs(updatedQAPairs);
      setUserQuestion('');
      setVisible(false);
    } catch (error) {
      console.error('Error generating content:', error);
    }
  };

  const handleChange = (e) => {
    setUserQuestion(e.target.value);
  };

  return (
    <div>
        {loading ? (
          <Skeleton active />
        ) : (
          <Collapse accordion>
            {qaPairs.map((pair, index) => (
              <Panel header={pair.question} key={index}>
                <p>{pair.answer}</p>
              </Panel>
            ))}
          </Collapse>
        )}
        <br />
        {!loading && (
          <Button icon={<QuestionCircleOutlined />} onClick={handleAskQuestion} style={{ marginBottom: '1rem' }}>
            Ask Questions
          </Button>
        )}
      <Modal
        style={{ left: "500px", top: "165px" }}
        title="Ask Questions"
        open={visible}
        // onOk={handleSubmit}
        // onCancel={handleCancel}
        footer={
          <Button onClick={handleSubmit}>Ask</Button>
        }
      >
        <TextArea
          value={userQuestion}
          onChange={handleChange}
          placeholder="Enter your question"
          autoSize={{ minRows: 2, maxRows: 6 }}
        />
      </Modal>
    </div>
  );
};

export default GeminiApi;
