"use client"
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { MarsModel } from './Mars'
import { OrbitControls, Sparkles } from '@react-three/drei'

const MarsLoader = () => {

  return (
    <div className='absolute w-full h-full bg-black'>
      <Canvas shadows={true}>
      <directionalLight args={["#fff", 1]} position={[0, 5, 0.5]} />
      <Sparkles count={100} scale={[15, 15, 5]} size={2} speed={0.1} />
        <MarsModel />
      </Canvas>
    </div>
  )
}

export default MarsLoader