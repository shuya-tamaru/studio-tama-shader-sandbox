import { Box, Center, Flex, Icon, Text } from "@chakra-ui/react";
import { GoHome } from "react-icons/go";

import { useRouter } from "next/navigation";
import { textGradientCss } from "../../styles/cssPaletShader";

interface Props {
  boxSize?: number;
  onClose?: () => void;
}

export default function ShaderGoToHomeLink({ boxSize = 6, onClose }: Props) {
  const router = useRouter();

  const handleHome = () => {
    if (onClose) {
      onClose();
    }
    router.push("/");
  };
  return (
    <Flex w="100%" h="24px" flex={1}>
      <Center w={"10%"}>
        <Icon as={GoHome} color={"#fff"} boxSize={boxSize} ml="6px" />
      </Center>
      <Box width={"90%"} onClick={handleHome}>
        <Text
          as={"span"}
          fontSize={"16px"}
          ml="12px"
          color={"#fff"}
          lineHeight={"24px"}
          fontWeight={"semibold"}
          cursor={"pointer"}
          overflow={"hidden"}
          textOverflow={"ellipsis"}
          whiteSpace={"nowrap"}
          _hover={{ ...textGradientCss }}
        >
          {"Home"}
        </Text>
      </Box>
    </Flex>
  );
}
