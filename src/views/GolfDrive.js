/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/golf_drive.glb')
  const { actions } = useAnimations(animations, group)
  
  useEffect(() => {
    console.log("Actions:")
    console.log(actions)
    actions['Armature|mixamo.com|Layer0'].play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes.MocapGuy_Body_1.geometry}
          material={nodes.MocapGuy_Body_1.material}
          skeleton={nodes.MocapGuy_Body_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.MocapGuy_Body_2.geometry}
          material={nodes.MocapGuy_Body_2.material}
          skeleton={nodes.MocapGuy_Body_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.MocapGuy_BrowsLashes.geometry}
          material={materials.Brows_MAT}
          skeleton={nodes.MocapGuy_BrowsLashes.skeleton}
        />
        <skinnedMesh
          geometry={nodes.MocapGuy_Caruncula.geometry}
          material={nodes.MocapGuy_Caruncula.material}
          skeleton={nodes.MocapGuy_Caruncula.skeleton}
        />
        <skinnedMesh
          geometry={nodes.MocapGuy_Eyes.geometry}
          material={materials.Eye_MAT}
          skeleton={nodes.MocapGuy_Eyes.skeleton}
        />
        <skinnedMesh
          geometry={nodes.MocapGuy_EyesSpec.geometry}
          material={materials.Eye_Spec_MAT}
          skeleton={nodes.MocapGuy_EyesSpec.skeleton}
        />
        <skinnedMesh
          geometry={nodes.MocapGuy_Hat_1.geometry}
          material={nodes.MocapGuy_Hat_1.material}
          skeleton={nodes.MocapGuy_Hat_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.MocapGuy_Hat_2.geometry}
          material={nodes.MocapGuy_Hat_2.material}
          skeleton={nodes.MocapGuy_Hat_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.MocapGuy_Teeth.geometry}
          material={nodes.MocapGuy_Teeth.material}
          skeleton={nodes.MocapGuy_Teeth.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/golf_drive.glb')
