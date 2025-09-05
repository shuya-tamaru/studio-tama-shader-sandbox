import { Box } from "@chakra-ui/react";
import * as THREE from "three";

import DefaultCanvas from "../../components/shaderProjectComponent/canvas/DefaultCanvas";
import GpgpuModel from "./GpgpuModel";
import { Controllers, Hands, VRButton, XR, useXR } from "@react-three/xr";
import { useEffect } from "react";

export default function Gpgpu() {
  return (
    <>
      <Box position={"relative"} w="100%" h="100%">
        {/* <VRButton /> */}
        <DefaultCanvas
          useOrbitControls={true}
          background="#000"
          cameraProps={{
            position: new THREE.Vector3(3, 3, 5),
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <XR>
            <CameraSetup position={new THREE.Vector3(3, 3, 5)} />
            <Controllers />
            <Hands />
            {/* <AxisHelper /> */}
            <GpgpuModel />
          </XR>
        </DefaultCanvas>
      </Box>
    </>
  );
}

const CameraSetup = ({ position }: { position: THREE.Vector3 }) => {
  const { isPresenting, player } = useXR();

  useEffect(() => {
    if (isPresenting && player) {
      player.position.set(position.x, position.y, position.z);
    }
  }, [isPresenting, player]);

  return null;
};
