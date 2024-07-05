import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import HumanModel from './HumanModel';
import React, { Suspense } from 'react';
import { ConnectButton } from "@connect2ic/react"
import { LeftOutlined } from '@ant-design/icons';

const Content = ({ showExtras }) => { 
    return (
    <>
        <Canvas style={{ width: '100%', height: '600px', marginTop: '90px' }}>
            <Suspense fallback={null}>
                <Stage>
                    <HumanModel />
                </Stage>
            </Suspense>
            <OrbitControls />
        </Canvas>
        <div 
            style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                marginTop: '20px',
                opacity: showExtras ? 1 : 0,
                transition: 'opacity 500ms ease-in-out' 
            }}
        >
            <img src="maia-bg-removed.png" alt="Maia Logo" style={{ width: '150px', height: 'auto', marginBottom: '20px' }} />
            <ConnectButton style={{ fontSize: '18px', padding: '10px 20px', backgroundColor: '#fff', color: '#1890ff', border: 'none', marginBottom: '20px' }}>
                <LeftOutlined style={{ marginRight: '10px' }} /> Disconnect
            </ConnectButton>
        </div>
    </>  
    )
}

export default Content;
