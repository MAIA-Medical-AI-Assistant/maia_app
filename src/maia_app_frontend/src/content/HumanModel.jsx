import React, {useState } from 'react';
import { useGLTF, Html } from '@react-three/drei';
import { Card } from 'antd';
import ChestOptionList from '../chest/ChestOptionList';
import BrainOptionList from '../brain/BrainOptionList';
import SkinCancerOptionList from '../skin/SkinCancerOptionList';
import KidneyCTOptionList from '../kidney/KidneyCTOptionList';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useSpring, animated } from '@react-spring/three';

const IconMarker = ({ position, onClick, hovered, setHovered, iconTexture, children }) => {
  const [iconHovered, setIconHovered] = useState(false);

  const { scale, color } = useSpring({
    scale: iconHovered ? 2.5 : 1,
    color: iconHovered ? 'red' : 'black',
    config: { tension: 300, friction: 20 }
  });

  return (
    <animated.mesh
      position={position}
      onPointerOver={() => setIconHovered(true)}
      onPointerOut={() => setIconHovered(false)}
      onClick={() => setHovered(true)}
      scale={scale}
    >
      <planeGeometry args={[0.05, 0.05]} />
      <animated.meshBasicMaterial map={iconTexture} color={color} transparent />
      {hovered && (
        <Html position={[0, 0, 0]} center>
          <Card
            style={{ width: '420px' }}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
          >
            {children}
          </Card>
        </Html>
      )}
    </animated.mesh>
  );
};

const HumanModel = () => {
  const { scene } = useGLTF('/human.glb');
  const chestIcon = useLoader(TextureLoader, 'lungs.png');
  const brainIcon = useLoader(TextureLoader, 'brain.svg');
  const skinIcon = useLoader(TextureLoader, 'skin.png'); 
  const kidneyRightIcon = useLoader(TextureLoader, 'kidney-right.png');
  const kidneyLeftIcon = useLoader(TextureLoader, 'kidney-left.png');
  const [chestHovered, setChestHovered] = useState(false);
  const [brainHovered, setBrainHovered] = useState(false);
  const [skinHovered, setSkinHovered] = useState(false);
  const [kidneyHovered, setKidneyHovered] = useState(false);

  return (
    <>
      <primitive object={scene} scale={0.5} />

      <IconMarker
        position={[0.005, 0.69, 0.085]}
        hovered={chestHovered}
        setHovered={setChestHovered}
        iconTexture={chestIcon}
      >
        <ChestOptionList />
      </IconMarker>

      <IconMarker
        position={[0.001, 0.890, 0.067]}
        hovered={brainHovered}
        setHovered={setBrainHovered}
        iconTexture={brainIcon}
      >
        <BrainOptionList />
      </IconMarker>

      <IconMarker
        position={[0.140, 0.660, 0.075]}
        hovered={skinHovered}
        setHovered={setSkinHovered}
        iconTexture={skinIcon}
      >
        <SkinCancerOptionList />
      </IconMarker>

      <IconMarker
        position={[0.086, 0.55, 0.085]}
        hovered={kidneyHovered}
        setHovered={setKidneyHovered}
        iconTexture={kidneyRightIcon}
      >
        <KidneyCTOptionList />
      </IconMarker>

      <IconMarker
        position={[-0.086, 0.55, 0.085]}
        // hovered={kidneyHovered}
        setHovered={setKidneyHovered}
        iconTexture={kidneyLeftIcon}
      >
        <KidneyCTOptionList />
      </IconMarker>
    </>
  );
};

export default HumanModel;
