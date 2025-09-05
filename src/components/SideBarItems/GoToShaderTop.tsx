import {
  Box,
  Flex,
  Icon,
  Text,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { TbVectorTriangle } from "react-icons/tb";
import { subFontColor, themeColor } from "../../styles/cssPallet";
import { useRouter } from "next/navigation";

interface Props {
  boxSize?: number;
  onClose?: () => void;
}

export default function GoToShaderTop({ boxSize = 6, onClose }: Props) {
  const fontColor = useColorModeValue(subFontColor.light, subFontColor.dark);
  const hoverColor = useColorModeValue(themeColor.light, themeColor.dark);
  const router = useRouter();

  const handleHome = () => {
    if (onClose) {
      onClose();
    }
    router.push("/shader");
  };
  return (
    <Flex w="100%" h="24px" mt="12px" flex={1} pl="1px">
      <Center w={"10%"}>
        <Icon
          as={TbVectorTriangle}
          color={hoverColor}
          boxSize={boxSize}
          ml="6px"
        />
      </Center>
      <Box width={`90%`} onClick={handleHome}>
        <Text
          as={"span"}
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
        >
          {"Shader Top"}
        </Text>
      </Box>
    </Flex>
  );
}
