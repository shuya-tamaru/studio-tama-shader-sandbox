import * as THREE from "three";
import { Box } from "@chakra-ui/react";

import clippingVertex from "./shaders/clippingVertex.glsl";
import clippingFragment from "./shaders/clippingFragment.glsl";
import DefaultCanvas from "../../components/shaderProjectComponent/canvas/DefaultCanvas";
import ClippingModel from "./ClippingModel";
import ClippingTypeSelector from "./ClippingTypeSelector";
import React from "react";

function Clipping() {
  return (
    <>
      <Box position={"relative"} w="100%" h="100%">
        <DefaultCanvas
          useOrbitControls
          background="#000"
          cameraProps={{
            position: new THREE.Vector3(48.16, 40.1, -40.36),
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <ClippingModel />
        </DefaultCanvas>
        <ClippingTypeSelector />
      </Box>
    </>
  );
}

export default React.memo(Clipping);
