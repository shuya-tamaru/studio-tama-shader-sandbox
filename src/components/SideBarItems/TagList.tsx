import {
  Box,
  Center,
  Icon,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaHashtag } from "react-icons/fa";
import { headerBorder } from "../../styles/cssPallet";
import { TAGS_LIST } from "../../utils/tags/tags";
import Tag from "../Tag";
import FilterClearButton from "../FilterClearButton";

export default function TagList({ needFilterClear = false }) {
  const borderTop = useColorModeValue(headerBorder.light, headerBorder.dark);

  return (
    <Box borderTop={borderTop} mt="24px">
      <Center my="12px" justifyContent={"start"} w="100%">
        <Icon as={FaHashtag} boxSize={4} />
        <Text fontWeight={"semibold"} w="100%" ml="5px">
          {"Tags"}
        </Text>
        {needFilterClear && (
          <Box>
            <FilterClearButton size={"md"} />
          </Box>
        )}
      </Center>
      <SimpleGrid spacing={1} minChildWidth={"80px"}>
        {TAGS_LIST.map((tag) => (
          <Tag key={tag} title={tag} usePointer />
        ))}
      </SimpleGrid>
    </Box>
  );
}
