import React, { useMemo } from "react";
import { useControls } from "leva";
import * as THREE from "three";

import DefaultCanvas from "../../components/shaderProjectComponent/canvas/DefaultCanvas";
import { Uniforms } from "../../types/Uniforms";
import CsmWaveModel from "./CsmWaveModel";

export default function CsmWave() {
  const {
    uSpeed,
    uAmplitude,
    uWaveCountX,
    uWaveCountY,
    uPeriod,
    uNoiseStrength,
    wireframe,
  } = useControls({
    uSpeed: {
      value: 2.5,
      min: 0.4,
      max: 10,
      step: 0.1,
    },
    uAmplitude: {
      value: 3.0,
      min: 0.1,
      max: 10,
    },
    uWaveCountX: {
      value: 4.0,
      min: 0.0,
      max: 10,
      step: 1,
    },
    uWaveCountY: {
      value: 3.0,
      min: 0.0,
      max: 10,
      step: 1,
    },
    uPeriod: {
      value: 5.0,
      min: 0.0,
      max: 40,
    },
    uNoiseStrength: {
      value: 0.0,
      min: 0.0,
      max: 10.0,
    },
    wireframe: {
      value: false,
    },
  });

  const uniforms: Uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSpeed: { value: uSpeed },
      uAmplitude: { value: uAmplitude },
      uWaveCountX: { value: uWaveCountX },
      uWaveCountY: { value: uWaveCountY },
      uPeriod: { value: uPeriod },
      uNoiseStrength: { value: uNoiseStrength },
    }),
    [uSpeed, uAmplitude, uWaveCountX, uWaveCountY, uNoiseStrength, uPeriod]
  );

  return (
    <>
      <DefaultCanvas
        useOrbitControls
        cameraProps={{
          position: new THREE.Vector3(100, 100, 100),
          fov: 45,
          near: 0.1,
          far: 1000,
        }}
        useDebug
      >
        <CsmWaveModel uniforms={uniforms} wireframe={wireframe} />
      </DefaultCanvas>
    </>
  );
}
