//import logo from './logo.svg';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import './App.css';

function App() {
  return (
    <div className='Canvas-container'>
      <Canvas>
        <Suspense fallback={null}>

        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
