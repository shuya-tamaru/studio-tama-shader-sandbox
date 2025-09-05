import React, { useEffect, useMemo } from "react";
import CustomShaderMaterial from "three-custom-shader-material/vanilla";
import { mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

import jellyVertex from "./shaders/vertex.glsl";
import jellyFragment from "./shaders/fragment.glsl";
import { Uniforms } from "../../types/Uniforms";
import { useControls, folder, button } from "leva";

function JellyMorphModel() {
  const initialUniforms = {
    uOctaves: 7,
    uTimeFrequency: 0.001,
    uAmplitude: 1,
    uFrequency: 0.002,
    uOpacity: 1.0,
    uColorA: "#a305e5",
    uColorB: "#000bff",
    uRoughness: 0.0,
    uMetalness: 0,
    wireframe: false,
    subdivisions: 10,
  };

  const [
    {
      uOctaves,
      uTimeFrequency,
      uAmplitude,
      uFrequency,
      uOpacity,
      uColorA,
      uColorB,
      uRoughness,
      uMetalness,
      wireframe,
      subdivisions,
    },
    reset,
  ] = useControls("Jelly Morph", () => ({
    uniforms: folder({
      uOctaves: {
        value: initialUniforms.uOctaves,
        min: 1,
        max: 10,
        step: 1,
      },
      uTimeFrequency: {
        value: initialUniforms.uTimeFrequency,
        min: 0.001,
        max: 0.1,
        step: 0.001,
      },
      uAmplitude: {
        value: initialUniforms.uAmplitude,
        min: 0,
        max: 2,
        step: 0.001,
      },
      uFrequency: {
        value: initialUniforms.uFrequency,
        min: 0.001,
        max: 0.05,
        step: 0.001,
      },
      uOpacity: {
        value: initialUniforms.uOpacity,
        min: 0.0,
        max: 1.0,
        step: 0.1,
      },
      uColorA: {
        value: initialUniforms.uColorA,
      },
      uColorB: {
        value: initialUniforms.uColorB,
      },
      uRoughness: {
        value: initialUniforms.uRoughness,
        min: 0,
        max: 1,
        step: 0.1,
      },
      uMetalness: {
        value: initialUniforms.uMetalness,
        min: 0,
        max: 1,
        step: 0.1,
      },
      wireframe: {
        value: initialUniforms.wireframe,
      },
      subdivisions: {
        value: initialUniforms.subdivisions,
        min: 0,
        max: 50,
        step: 1,
      },
    }),
    resetUniformValues: button(() => {
      reset(initialUniforms);
    }),
  }));

  const uniforms: Uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uOctaves: { value: uOctaves },
      uTimeFrequency: { value: uTimeFrequency },
      uAmplitude: { value: uAmplitude },
      uFrequency: { value: uFrequency },
      uOpacity: { value: uOpacity },
      uColorA: { value: new THREE.Color(uColorA) },
      uColorB: { value: new THREE.Color(uColorB) },
      uRoughness: { value: uRoughness },
      uMetalness: { value: uMetalness },
    }),
    [
      uOctaves,
      uTimeFrequency,
      uAmplitude,
      uFrequency,
      uOpacity,
      uColorA,
      uColorB,
      uRoughness,
      uMetalness,
    ]
  );

  useEffect(() => {
    reset(initialUniforms);
  }, []);

  useFrame((state) => {
    uniforms.uTime.value = state.clock.getElapsedTime();
  });

  const customShaderMaterial = new CustomShaderMaterial({
    baseMaterial: THREE.MeshPhysicalMaterial,
    uniforms,
    vertexShader: jellyVertex,
    fragmentShader: jellyFragment,
    side: THREE.DoubleSide,
    envMapIntensity: 0.3,
    silent: true,
    metalness: 0,
    roughness: 0.5,
    ior: 1.5,
    thickness: 1.5,
    transparent: true,
    wireframe,
  });

  const sphereGeometry = useMemo(() => {
    let geometry = new THREE.IcosahedronGeometry(
      2.5,
      subdivisions
    ) as THREE.BufferGeometry;
    geometry = mergeVertices(geometry);
    geometry.computeTangents();
    return geometry;
  }, [subdivisions]);

  return (
    <mesh
      rotation={[0, 0, 0]}
      material={customShaderMaterial}
      geometry={sphereGeometry}
    />
  );
}

export default React.memo(JellyMorphModel);
