"use client";

import { Box } from "@chakra-ui/react";
import WebGL from "./WebGL";
import { mainBg } from "../../styles/cssPaletShader";
interface Props {
  slug: string;
}

export default function ShaderWrapperComponent({ slug }: Props) {
  return (
    <Box minH={"100vh"} bg={mainBg}>
      <WebGL />
    </Box>
  );
}
