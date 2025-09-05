import {
  Center,
  Flex,
  Icon,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { headerBorder, subFontColor, themeColor } from "../../styles/cssPallet";
import { RiNumber1 } from "react-icons/ri";
import Link from "next/link";
import { FaCode } from "react-icons/fa";

export default function Tutorials() {
  const borderTop = useColorModeValue(headerBorder.light, headerBorder.dark);
  const fontColor = useColorModeValue(subFontColor.light, subFontColor.dark);
  const hoverColor = useColorModeValue(themeColor.light, themeColor.dark);

  return (
    <VStack borderTop={borderTop} mt="12px" spacing={1} mb="30px">
      <Center mt="12px" justifyContent={"start"} w="100%">
        <Icon as={FaCode} boxSize={4} />
        <Text fontWeight={"semibold"} w="100%" ml="5px">
          {" Tutorial"}
        </Text>
      </Center>
      <VStack mt="12px" spacing={3} w="100%">
        <Flex w="100%" h="12px" justify={"start"}>
          <Center>
            <Icon as={RiNumber1} color={hoverColor} boxSize={4} ml="6px" />
          </Center>
          <Link href="https://ghpython.styublog.com/" target="_blank">
            <Text
              ml="12px"
              fontSize={"14px"}
              color={fontColor}
              fontWeight={"semibold"}
              cursor={"pointer"}
              _hover={{ color: hoverColor }}
              textOverflow={"break-word"}
              whiteSpace={"normal"}
            >
              {"GhPython Tutorials"}
            </Text>
          </Link>
        </Flex>
      </VStack>
    </VStack>
  );
}
