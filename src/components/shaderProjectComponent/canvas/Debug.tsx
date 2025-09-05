import { Box, Flex, VStack, Center } from "@chakra-ui/layout";
import { Leva } from "leva";
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";

import React, { useState } from "react";
import { Icon } from "@chakra-ui/icon";

export default function Debug() {
  const [hidden, setHidden] = useState(true);

  return (
    <Box
      maxW={"400px"}
      width={["300px", "300px", "300px", "400px"]}
      position={"absolute"}
      zIndex={100}
      right={0}
    >
      <VStack w="100%" bg="none" justify={"end"} p="10px">
        <Flex w="100%" justify={"end"}>
          <Center bg="rgba(10,10,10,0.2)" borderRadius={2}>
            <Icon
              fontSize={"24px"}
              cursor={"pointer"}
              _hover={{ opacity: 0.7 }}
              as={hidden ? MdKeyboardDoubleArrowDown : MdKeyboardDoubleArrowUp}
              onClick={() => setHidden(!hidden)}
            />
          </Center>
        </Flex>
        <Leva fill hidden={hidden} />
      </VStack>
    </Box>
  );
}
