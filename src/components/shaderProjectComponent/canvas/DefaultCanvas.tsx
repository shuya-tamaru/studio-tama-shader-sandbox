import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Box, Center } from "@chakra-ui/react";
import { Suspense, useRef, useState } from "react";
import Debug from "./Debug";
import { TailSpin } from "react-loader-spinner";

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
  const [isLoading, setIsLoading] = useState(true);

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

      {/* フルスクリーンスピナー */}
      {isLoading && (
        <Center
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bg={background}
          zIndex={10}
        >
          <TailSpin
            width="60px"
            height="60px"
            color="#fff"
            radius="1"
            visible={true}
          />
        </Center>
      )}

      <Canvas
        style={{
          width: "100%",
          height: "100%",
        }}
        camera={cameraProps}
        onCreated={() => {
          // Canvasが作成されたらスピナーを非表示
          setTimeout(() => setIsLoading(false), 500);
        }}
      >
        <Suspense fallback={null}>
          {useOrbitControls && <OrbitControlsDynamic makeDefault />}
          {children}
        </Suspense>
      </Canvas>
    </Box>
  );
}
