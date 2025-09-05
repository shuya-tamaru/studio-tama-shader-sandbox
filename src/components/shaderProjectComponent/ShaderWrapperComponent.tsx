"use client";
import { useEffect } from "react";

import { Box } from "@chakra-ui/react";
import WebGL from "./WebGL";
import { mainBg } from "../../styles/cssPaletShader";
interface Props {
  slug: string;
}

export default function ShaderWrapperComponent({ slug }: Props) {
  useEffect(() => {
    document.body.style.backgroundColor = mainBg;
  }, []);

  return (
    <Box minH={"100vh"} bg={mainBg}>
      <WebGL />
    </Box>
  );
}
