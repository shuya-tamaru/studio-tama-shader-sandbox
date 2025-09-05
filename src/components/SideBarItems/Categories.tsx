import {
  Center,
  Icon,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { BiSolidCategory } from "react-icons/bi";
import { SiRhinoceros } from "react-icons/si";
import { FaLocust } from "react-icons/fa6";
import { SiThreedotjs } from "react-icons/si";
import { SiBlender } from "react-icons/si";

import { headerBorder } from "../../styles/cssPallet";
import { TAGS } from "../../utils/tags/tags";
import Category from "./Category";

export default function Categories() {
  const borderTop = useColorModeValue(headerBorder.light, headerBorder.dark);

  return (
    <VStack borderTop={borderTop} mt="12px" spacing={3}>
      <Center mt="12px" justifyContent={"start"} w="100%">
        <Icon as={BiSolidCategory} boxSize={4} />
        <Text fontWeight={"semibold"} w="100%" ml="5px">
          {"Categories"}
        </Text>
      </Center>
      <Category text={TAGS.RHINO} icon={SiRhinoceros} />
      <Category text={TAGS.GH} icon={FaLocust} />
      <Category text={TAGS.THREE_JS} icon={SiThreedotjs} />
      <Category text={TAGS.BLENDER} icon={SiBlender} />
    </VStack>
  );
}
