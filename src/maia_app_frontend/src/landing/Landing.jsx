import React, { useState, useEffect } from 'react';
import { Layout, Button, Row, Col, Card, Avatar, Tabs, Typography, Space, Menu } from 'antd';
import { motion } from 'framer-motion';
import { ConnectDialog, ConnectButton } from "@connect2ic/react";

import {
  RightOutlined,
  ArrowRightOutlined,
  SyncOutlined,
  XOutlined,
  CheckCircleOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;

const colors = {
  primary: '#0047AB',
  secondary: '#FF4B4B',
  background: '#F6F9FC',
  text: '#333333',
  lightText: '#777777',
};

const FeatureOrbit = ({ features }) => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const orbitRadius = 220;
  const iconSize = 80;
  const centerSize = 160;

  return (

    <div style={{ position: 'relative', width: '600px', height: '600px', margin: '0 auto' }}>
      <motion.div
        style={{
          position: 'absolute',
          top: '45%',
          left: '45%',
          transform: 'translate(-50%, -50%)',
          width: `${centerSize}px`,
          height: `${centerSize}px`,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #ffffff, #f0f5ff)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 0 30px rgba(33, 150, 243, 0.2)',
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <img src="maia_icon.svg" alt="MAIA Logo" style={{ width: '120px', height: '120px' }} />
      </motion.div>

      {features.map((feature, index) => {
        const angle = (index / features.length) * 2 * Math.PI;
        const x = Math.cos(angle) * orbitRadius;
        const y = Math.sin(angle) * orbitRadius;

        return (
          <motion.div
            key={feature.title}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #ffffff, #f0f5ff)',
              boxShadow: '0 6px 12px rgba(33, 150, 243, 0.2)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            initial={{ x, y }}
            animate={{
              x,
              y,
              scale: selectedFeature === feature ? 1.2 : 1,
            }}
            transition={{
              duration: 0.5,
              type: 'spring',
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.2,
              boxShadow: '0 8px 16px rgba(33, 150, 243, 0.3)',
            }}
            onClick={() => setSelectedFeature(feature)}
          >
            {React.cloneElement(feature.icon, { style: { width: '40px', height: '40px', color: '#2196F3' } })}
          </motion.div>
        );
      })}

      {selectedFeature && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
            zIndex: 10,
            width: '250px',
          }}
        >
          <h3 style={{ marginBottom: '15px', color: '#2196F3', fontSize: '20px' }}>{selectedFeature.title}</h3>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.5' }}>{selectedFeature.description}</p>
          <Button
            onClick={() => setSelectedFeature(null)}
            style={{
              marginTop: '20px',
              background: '#2196F3',
              borderColor: '#2196F3',
              borderRadius: '8px',
              height: '40px',
              fontSize: '16px'
            }}
            type="primary"
          >
            Close
          </Button>
        </motion.div>
      )}
    </div>
  );
};

const MAIALandingPage = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const features = [
    {
      icon: <img src={"brain2.svg"} alt="Brain CT Scans" style={{ width: '48px', height: '48px' }} />,
      title: 'Brain CT Scans',
      description: 'Detect glioma, meningioma, and pituitary tumors with high accuracy.',
    },
    {
      icon: <img src={"kidney.svg"} alt="Kidney CT Scans" style={{ width: '48px', height: '48px' }} />,
      title: 'Kidney CT Scans',
      description: 'Identify cysts, stones, or tumors in kidney scans with precision.',
    },
    {
      icon: <img src={"lung.svg"} alt="Lung CT Scans" style={{ width: '48px', height: '48px' }} />,
      title: 'Lung CT Scans',
      description: 'Check for various types of lung cancer and other pulmonary conditions.',
    },
    {
      icon: <img src={"skin.svg"} alt="Skin Lesion" style={{ width: '48px', height: '48px' }} />,
      title: 'Skin Lesion Images',
      description: 'Determine if moles are benign or malignant with high reliability.',
    },
    {
      icon: <img src={"chest.svg"} alt="Chest X-Ray" style={{ width: '48px', height: '48px' }} />,
      title: 'Chest X-Ray',
      description: 'Diagnose various lung conditions from chest X-ray images.',
    },
    {
      icon: <img src={"ai.svg"} alt="AI-Powered Q&A" style={{ width: '48px', height: '48px' }} />,
      title: 'AI-Powered Q&A',
      description: 'Get detailed information about the diagnosis using MAIA.',
    },
  ];

  const roadmap = [
    {
      year: '2024',
      quarters: [
        {
          title: 'Q1: Base Model Deployments',
          description: "Training, deployment of base diagnose models, and expanding capabilities.",
          completed: true,
          items: [
            { text: "Deploy brain CT scan model for tumor detection", completed: true },
            { text: "Implement kidney CT scan analysis for tumors, cysts and stones", completed: true },
            { text: "Launch lung CT scan model for lung cancer detection", completed: true },
            { text: "Enhance skin lesion detection for skin cancer", completed: true },
            { text: "Deploy chest X-ray analysis for various lung conditions", completed: true },
            { text: "Develop AI-powered Q&A for diagnosis information", completed: true },
          ]
        },
        {
          title: 'Q2: Expanding Capabilities',
          description: "Introducing new diagnostic tools and optimizations.",
          completed: false,
          items: [
            { text: "Implement bone health assessment", completed: false },
            { text: "Add blood test analysis", completed: false },
            { text: "Optimize AI models for better accuracy", completed: false },
            { text: "Add ultrasound scan analysis", completed: false },
            { text: "Improve skin lesion detection", completed: false },
            { text: "Start mobile UI enhancements for better accessibility", completed: false },
          ]
        },
        {
          title: 'Q3: Segmentation and Detection',
          description: 'Enhancing models with precise localization of diseases for detailed user insights.',
          completed: false,
          items: [
            { text: "Implement tumor segmentation in brain CT scans", completed: false },
            { text: "Add nodule detection and segmentation for lung CT scans", completed: false },
            { text: "Develop lesion boundary detection for skin images", completed: false },
            { text: "Introduce bone fracture localization in X-rays", completed: false },
            { text: "Integrate segmentation results into user interface for visual feedback", completed: false },
          ]
        },
      ],
    },
  ];


  return (
    <Layout style={{ minHeight: '100vh', background: colors.background }}>
      <Header
        style={{
          padding: '10px',
          width: '100%',
          background: 'transparent',
          position: 'fixed',
          zIndex: 1000,
          transition: 'all 0.3s',
        }}
      >
        <Row justify="space-between" align="middle">
          <Col>
            <img src="maia-bg-removed.png" alt="MAIA Logo" style={{ height: '40px' }} />
          </Col>
          <Col>
            <ConnectDialog />
            <ConnectButton style={{ fontSize: '1rem', padding: '0.5rem 1rem', backgroundColor: 'transparent', color: colors.primary, border: 'none' }}>
              <RightOutlined style={{ marginRight: '10px' }} /> Launch MAIA
            </ConnectButton>
          </Col>
        </Row>
      </Header>

      <Content>
        <section id="home" style={{
          padding: '100px 0',
          background: `linear-gradient(135deg, ${colors.background} 0%, #ffffff 100%)`,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Row gutter={[48, 48]} justify="center" align="middle" style={{ width: '100%' }}>
            <Col xs={24} md={12} style={{ padding: '0 50px' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Title style={{
                  fontSize: '3.5rem',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                  background: `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  <img src="maia-bg-removed.png" alt="MAIA: Medical AI Assistant" style={{ width: '100%', maxWidth: '500px', marginBottom: '20px' }} />
                </Title>
                <Paragraph style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '30px', color: colors.text }}>
                  MAIA leverages AI on the Internet Computer to help medical diagnostics, provide reliable second opinions, and assist doctors in making their diagnostic processes more efficient and accurate.
                </Paragraph>
                <Space size="large">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      type="primary"
                      size="large"
                      style={{
                        borderRadius: '12px',
                        padding: '0 2rem',
                        height: '56px',
                        fontSize: '1.1rem',
                        background: `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`,
                        border: 'none',
                        boxShadow: '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)'
                      }}
                      href="https://forum.dfinity.org/t/introducing-maia-medical-ai-assistant-on-internet-computer/32022"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More <ArrowRightOutlined />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      icon={<VideoCameraOutlined />}
                      size="large"
                      style={{
                        borderRadius: '12px',
                        padding: '0 2rem',
                        height: '56px',
                        fontSize: '1.2rem',
                        borderColor: colors.primary,
                        color: colors.primary
                      }}
                      href="https://www.loom.com/share/cf622c2986ed4665917bd57f644da3f9?sid=1188141d-bd3f-4d4b-8861-de31a09461a5"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch Demo
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      icon={<XOutlined />}
                      size="large"
                      style={{
                        borderRadius: '12px',
                        padding: '0 2rem',
                        height: '56px',
                        fontSize: '1.2rem',
                        borderColor: colors.primary,
                        color: colors.primary
                      }}
                      href="https://x.com/MAIA_ICP"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Follow MAIA
                    </Button>
                  </motion.div>
                </Space>
              </motion.div>
            </Col>
            <Col xs={24} md={12} style={{ padding: '0 50px' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <FeatureOrbit features={features} />
              </motion.div>
            </Col>
          </Row>
        </section>

        <section id="features" style={{ padding: '100px 0', background: '#ffffff' }}>
          <Row justify="center">
            <Col xs={24} md={20}>
              <Title level={2} style={{ textAlign: 'center', marginBottom: '60px', color: colors.primary }}>Our Features</Title>
              <Row gutter={[48, 48]}>
                {features.map((feature, index) => (
                  <Col xs={24} sm={12} md={8} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card
                        hoverable
                        style={{
                          borderRadius: '12px',
                          overflow: 'hidden',
                          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                          border: `1px solid ${colors.primary}33`
                        }}
                      >
                        <Space align="start">
                          <div style={{
                            padding: '12px',
                            background: `${colors.primary}11`,
                            borderRadius: '8px',
                            marginRight: '16px'
                          }}>
                            {feature.icon}
                          </div>
                          <div>
                            <Text strong style={{ fontSize: '16px', display: 'block', marginBottom: '4px', color: colors.primary }}>{feature.title}</Text>
                            <Text style={{ fontSize: '14px', color: colors.lightText }}>{feature.description}</Text>
                          </div>
                        </Space>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </section>

        <section id="roadmap" style={{ padding: '100px 0', background: colors.background }}>
  <Row justify="center">
    <Col xs={24} md={20}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '60px', color: colors.primary }}>Our Roadmap</Title>
      <Row gutter={[24, 24]}>
        {roadmap[0].quarters.map((quarter, quarterIndex) => (
          <Col xs={24} sm={8} key={quarterIndex}>
            <Card
              style={{
                borderRadius: '12px',
                border: `2px solid ${colors.primary}33`,
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              }}
              bodyStyle={{ padding: '20px' }}
            >
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                <Space justify="space-between" style={{ width: '100%' }}>
                  <Title level={4} style={{ color: colors.primary, margin: 0 }}>
                    {quarter.title}
                  </Title>
                  <Space>
                    {quarter.completed ? (
                      <CheckCircleOutlined style={{ color: '#52c41a' }} />
                    ) : (
                      <SyncOutlined style={{ color: colors.primary }} />
                    )}
                  </Space>
                </Space>
                <Paragraph>{quarter.description}</Paragraph>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {quarter.items.map((item, itemIndex) => (
                    <li key={itemIndex} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>{item.text}</span>
                      {item.completed ? (
                        <CheckCircleOutlined style={{ color: '#52c41a' }} />
                      ) : (
                        <SyncOutlined style={{ color: colors.primary }} />
                      )}
                    </li>
                  ))}
                </ul>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  </Row>
</section>
      </Content>

      <Footer style={{ textAlign: 'center', background: colors.primary, padding: '40px 0', color: '#ffffff' }}>
        <Space direction="vertical" size="large">
          <Text style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff' }}>MAIA</Text>
          <Text style={{ color: '#ffffff' }}>© 2024 MAIA - Medical AI Assistant. All rights reserved.</Text>
          <Space size="large">
            <a href="#" style={{ color: '#ffffff' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#ffffff' }}>Terms of Service</a>
            <a href="#" style={{ color: '#ffffff' }}>Contact Us</a>
          </Space>
        </Space>
      </Footer>
    </Layout>
  );
};

export default MAIALandingPage;