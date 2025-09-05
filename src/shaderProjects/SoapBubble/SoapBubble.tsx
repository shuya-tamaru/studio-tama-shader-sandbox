import React from "react";
import * as THREE from "three";
import { Environment } from "@react-three/drei";
import { useControls, folder, button } from "leva";

import DefaultCanvas from "../../components/shaderProjectComponent/canvas/DefaultCanvas";
import SoapBubbleModel from "./SoapBubbleModel";

export default function SoapBubble() {
  const initialUniforms = {
    useBackGround: true,
    backGroundColor: "#333",
  };

  const [{ useBackGround, backGroundColor }, reset] = useControls(
    "Soap Bubble",
    () => ({
      environment: folder({
        useBackGround: {
          value: initialUniforms.useBackGround,
        },
        backGroundColor: {
          value: initialUniforms.backGroundColor,
        },
      }),
      resetBackGround: button(() => reset(initialUniforms)),
    })
  );

  return (
    <>
      <DefaultCanvas
        useOrbitControls
        cameraProps={{
          position: new THREE.Vector3(0, 0, 10),
          fov: 45,
          near: 0.1,
          far: 100,
        }}
        background={backGroundColor}
        useDebug
      >
        <SoapBubbleModel />
        <fog attach="fog" args={["#fff", 0.1, 1000]} />
        <ambientLight intensity={0.5} />
        <directionalLight intensity={3} position={[0.25, 2, -2.25]} />
        <Environment
          files="/shader/environment/hdr.hdr"
          background={useBackGround}
        />
      </DefaultCanvas>
    </>
  );
}
