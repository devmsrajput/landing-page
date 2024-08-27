"use client"
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { MarsModel } from './Mars'

const MarsLoader = () => {

  return (
    <div className='absolute w-full h-full bg-black'>
      <Canvas shadows={true}>
      <directionalLight args={["#fff", 1.5]} position={[0, 5, 0.5]} />
        <MarsModel />
      </Canvas>
    </div>
  )
}

export default MarsLoader