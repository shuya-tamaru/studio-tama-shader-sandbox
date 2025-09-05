import { useMemo } from "react";
import * as THREE from "three";

import WaveModel from "./WaveModel";
import DefaultCanvas from "../../components/shaderProjectComponent/canvas/DefaultCanvas";
import { useControls } from "leva";
import { Uniforms } from "../../types/Uniforms";

export default function Wave() {
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
      value: 0.5,
      min: 0.0,
      max: 10.0,
    },
    wireframe: {
      value: true,
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
        <WaveModel uniforms={uniforms} wireframe={wireframe} />
      </DefaultCanvas>
    </>
  );
}
