import { Center, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { subFontColor, themeColor } from "../../styles/cssPallet";
import { TagsType } from "../../utils/tags/tags";
import { useFilter } from "../../stores/useFilter";
import { useRouter } from "next/navigation";

interface Props {
  text: TagsType;
  boxSize?: number;
  icon: IconType;
}

export default function Category({ text, boxSize = 6, icon }: Props) {
  const { filter, setFilter } = useFilter((state) => state);
  const router = useRouter();

  const fontColor = useColorModeValue(subFontColor.light, subFontColor.dark);
  const hoverColor = useColorModeValue(themeColor.light, themeColor.dark);

  const handleFilter = () => {
    if (filter.includes(text)) {
      setFilter(filter.filter((item) => item !== text));
    } else {
      setFilter([...filter, text]);
      router.push("/");
    }
  };

  return (
    <Flex w="100%" h="24px">
      <Center>
        <Icon as={icon} color={hoverColor} boxSize={boxSize} ml="6px" />
      </Center>
      <Text
        fontSize={"16px"}
        ml="12px"
        color={fontColor}
        lineHeight={"24px"}
        fontWeight={"semibold"}
        cursor={"pointer"}
        _hover={{ color: hoverColor }}
        overflow={"hidden"}
        textOverflow={"ellipsis"}
        whiteSpace={"nowrap"}
        onClick={handleFilter}
      >
        {text}
      </Text>
    </Flex>
  );
}
