import React from "react";
import * as THREE from "three";

import DefaultCanvas from "../../components/shaderProjectComponent/canvas/DefaultCanvas";
import { Environment } from "@react-three/drei";
import JellyMorphModel from "./JellyMorphModel";
import { useControls, folder, button } from "leva";

export default function JellyMorph() {
  const initialUniforms = {
    useBackGround: false,
    backGroundColor: "#333",
  };

  const [{ useBackGround, backGroundColor }, reset] = useControls(
    "Jelly Morph",
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
          far: 1000,
        }}
        background={backGroundColor}
        useDebug
      >
        <JellyMorphModel />
        <Environment
          files="/shader/environment/hdr.hdr"
          background={useBackGround}
        />
        <ambientLight intensity={0.5} />
        <directionalLight intensity={3} position={[0.25, 2, -2.25]} />
      </DefaultCanvas>
    </>
  );
}
