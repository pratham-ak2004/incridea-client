/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/character.glb -o src/components/Character.jsx -r public
*/

import { useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from 'three';
import React, { useEffect, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export function Character({ animation, ...props }) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF("/explore/assets/models/character.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions[animation]?.reset().fadeIn(0.24).play();
    return () => {
      actions?.[animation]?.fadeOut(0.24);
    };
  }, [animation]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="fall_guys">
          {nodes._rootJoint && <primitive object={nodes._rootJoint} />}
          <skinnedMesh
            name="body"
            geometry={(nodes.body as THREE.Mesh).geometry}
            material={materials.Material}
            skeleton={(nodes.body as THREE.SkinnedMesh).skeleton}
            castShadow
            receiveShadow
          />
          {nodes.eye && (
            <skinnedMesh
              name="eye"
              geometry={(nodes.eye as THREE.SkinnedMesh).geometry}
              material={materials.Material}
              skeleton={(nodes.eye as THREE.SkinnedMesh).skeleton}
              castShadow
              receiveShadow
            />
          )}
          <skinnedMesh
            name="hand-"
            geometry={(nodes["hand-"] as THREE.SkinnedMesh)?.geometry}
            material={materials.Material}
            skeleton={(nodes["hand-"] as THREE.SkinnedMesh)?.skeleton}
            castShadow
            receiveShadow
          />
          {nodes.leg && (
            <skinnedMesh
              name="leg"
              geometry={(nodes.leg as THREE.SkinnedMesh).geometry}
              material={materials.Material}
              skeleton={(nodes.leg as THREE.SkinnedMesh).skeleton}
              castShadow
              receiveShadow
            />
          )}
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/explore/assets/models/character.glb");
