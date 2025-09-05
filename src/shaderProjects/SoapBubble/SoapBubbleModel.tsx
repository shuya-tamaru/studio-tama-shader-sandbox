import React, { useEffect, useMemo } from "react";
import CustomShaderMaterial from "three-custom-shader-material/vanilla";
import { mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

import soapVertex from "./shaders/vertex.glsl";
import soapFragment from "./shaders/fragment.glsl";
import { Uniforms } from "../../types/Uniforms";
import { useControls, folder, button } from "leva";
import { useTexture } from "@react-three/drei";

function SoapBubbleModel() {
  const { camera } = useThree();

  const texture = useTexture("/shader/noise/noiseTexture.png");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;

  const initialUniforms = {
    uOctaves: 4,
    uTimeFrequency: 0.0016,
    uAmplitude: 1,
    uFrequency: 0.005,
    uMinWavelength: 380.0,
    uMaxWavelength: 780.0,
    uNoiseStrength: 1.0,
    uOpacity: 0.3,
    wireframe: false,
    subdivisions: 10,
  };

  const [
    {
      uOctaves,
      uTimeFrequency,
      uAmplitude,
      uFrequency,
      uMinWavelength,
      uMaxWavelength,
      uNoiseStrength,
      uOpacity,
      wireframe,
      subdivisions,
    },
    reset,
  ] = useControls("Soap Bubble", () => ({
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
      uMinWavelength: {
        value: initialUniforms.uMinWavelength,
        min: 380.0,
        max: 780.0,
        step: 1,
      },
      uMaxWavelength: {
        value: initialUniforms.uMaxWavelength,
        min: 380.0,
        max: 780.0,
        step: 1,
      },
      uNoiseStrength: {
        value: initialUniforms.uNoiseStrength,
        min: 0,
        max: 10,
        step: 1.0,
      },
      uOpacity: {
        value: initialUniforms.uOpacity,
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

  useEffect(() => {
    reset(initialUniforms);
  }, []);

  const uniforms: Uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uOctaves: { value: uOctaves },
      uTimeFrequency: { value: uTimeFrequency },
      uAmplitude: { value: uAmplitude },
      uFrequency: { value: uFrequency },
      uMinWavelength: { value: uMinWavelength },
      uMaxWavelength: { value: uMaxWavelength },
      uNoiseTexture: { value: texture },
      uNoiseStrength: { value: uNoiseStrength },
      uOpacity: { value: uOpacity },
      uCameraPosition: { value: camera.position },
    }),
    [
      uOctaves,
      uTimeFrequency,
      uAmplitude,
      uFrequency,
      camera.position,
      uMaxWavelength,
      uMaxWavelength,
      uNoiseStrength,
      uOpacity,
      texture,
    ]
  );

  useFrame((state) => {
    uniforms.uTime.value = state.clock.getElapsedTime();
    uniforms.uCameraPosition.value = state.camera.position;
  });

  const customShaderMaterial = new CustomShaderMaterial({
    baseMaterial: THREE.MeshPhysicalMaterial,
    uniforms,
    vertexShader: soapVertex,
    fragmentShader: soapFragment,
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
    <>
      <mesh
        rotation={[0, 0, 0]}
        material={customShaderMaterial}
        geometry={sphereGeometry}
      />
    </>
  );
}

export default React.memo(SoapBubbleModel);
