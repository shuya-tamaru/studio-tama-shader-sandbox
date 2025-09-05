import { Flex } from "@chakra-ui/react";
import React from "react";

import SnsLinks from "./SnsLinks";

interface Props {
  children: React.ReactNode;
  disableSns?: boolean;
}

export default function GoToHomeWithSns({ children, disableSns }: Props) {
  return (
    <Flex>
      {children}
      <Flex flex={1} justify={"end"}>
        {!disableSns && <SnsLinks />}
      </Flex>
    </Flex>
  );
}
