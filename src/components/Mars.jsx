/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 .\public\models\mars.glb -T --shadows 
Files: .\public\models\mars.glb [23.83MB] > C:\Users\Mahendra\Desktop\portfolio\tic-tac-toe\mars-transformed.glb [560.33KB] (98%)
Author: ARCTIC  WOLVES™ (https://sketchfab.com/arctic.wolves)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mars-156a95dfec244e07a3ae423f579ffb05
Title: Mars
*/

import React, { useRef } from 'react'
import { Sparkles, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export function MarsModel(props) {
  const rotationRef = useRef(null)

  useGSAP(()=>{
    const tl = gsap.timeline()
    tl.from(rotationRef.current.scale, {
      duration: 2,
      x: 0.5,
      y: 0.5,
    })

    tl.from(rotationRef.current.rotation, {
      duration: 4,
      y: -1,
      ease: "power1.out"
    }, "<")
  }, [rotationRef.current])

  useFrame((state, delta)=> {
    if (rotationRef.current) {
      rotationRef.current.rotation.y += delta / 20
    }
  })

  const { nodes, materials } = useGLTF('./models/mars-transformed.glb')
  return (
    <>
    <Sparkles count={300} scale={[25, 15, 0]} size={1.5} speed={0.1} />
    <group {...props} dispose={null} position={[0, -1, 1.3]} ref={rotationRef}>
      <mesh castShadow receiveShadow geometry={nodes.Mars_LOD0_MarsLOD1_0.geometry} material={materials.MarsLOD1} position={[0, 2.5, 0]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
    </>
  )
}

useGLTF.preload('./models/mars-transformed.glb')
