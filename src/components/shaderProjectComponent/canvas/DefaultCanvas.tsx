import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Box } from "@chakra-ui/react";
import { useRef, useState } from "react";
import Debug from "./Debug";

const OrbitControlsDynamic = dynamic(() =>
  import("@react-three/drei").then((mod) => mod.OrbitControls)
);

interface Props {
  children: React.ReactNode;
  background?: string;
  cameraProps?: {
    fov: number;
    near: number;
    far: number;
    position: THREE.Vector3;
  };
  useOrbitControls?: boolean;
  useDebug?: boolean;
}

const defaultCameraProps = {
  fov: 75,
  near: 0.1,
  far: 200,
  position: new THREE.Vector3(10, 10, 10),
};

export default function DefaultCanvas({
  children,
  background = "#000",
  cameraProps = defaultCameraProps,
  useOrbitControls = false,
  useDebug = false,
}: Props) {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (canvasRef.current?.requestFullscreen) {
        canvasRef.current.requestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  return (
    <Box
      ref={canvasRef}
      position="relative"
      width="100%"
      h="100svh"
      border={"none"}
      background={background}
    >
      {useDebug && <Debug />}
      <Canvas
        style={{
          width: "100%",
          height: "100%",
        }}
        camera={cameraProps}
      >
        {useOrbitControls && <OrbitControlsDynamic makeDefault />}
        {children}
      </Canvas>
    </Box>
  );
}
