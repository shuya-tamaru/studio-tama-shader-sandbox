import {
  Center,
  Icon,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { GrStatusGood } from "react-icons/gr";
import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import { RiNumber4 } from "react-icons/ri";
import { RiNumber5 } from "react-icons/ri";
import { headerBorder } from "../../styles/cssPallet";
import RecommendedLinkText from "./RecommendedLinkText";
import { Meta } from "../../types/Meta";

interface Props {
  recommendMetaData: Meta[];
}

export default function Recommended({ recommendMetaData }: Props) {
  const borderTop = useColorModeValue(headerBorder.light, headerBorder.dark);
  return (
    <VStack borderTop={borderTop} mt="12px" spacing={1}>
      <Center mt="12px" justifyContent={"start"} w="100%">
        <Icon as={GrStatusGood} boxSize={4} />
        <Text fontWeight={"semibold"} w="100%" ml="5px">
          {" Recommended"}
        </Text>
      </Center>
      {recommendMetaData.map((meta, index) => (
        <RecommendedLinkText
          key={meta.slug + "recommended"}
          text={meta.title}
          thumbnail={meta.coverImage}
          tags={meta.tags}
          slug={meta.slug}
          boxSize={5}
          icon={
            index === 0
              ? RiNumber1
              : index === 1
              ? RiNumber2
              : index === 2
              ? RiNumber3
              : index === 3
              ? RiNumber4
              : RiNumber5
          }
        />
      ))}
    </VStack>
  );
}
