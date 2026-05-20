// components/ARCanvas.jsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model2.jsx';

export default function ARCanvas({ color }) {
  return (
    <Canvas camera={{ position: [0, 1, 3], fov: 45 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <Model color={color} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

