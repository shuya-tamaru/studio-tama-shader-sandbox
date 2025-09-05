import {
  Flex,
  Icon,
  Text,
  useColorModeValue,
  Box,
  Skeleton,
} from "@chakra-ui/react";

import { IconType } from "react-icons";
import Link from "next/link";
import { headerBorder, themeColor } from "../../styles/cssPallet";
import { splitString } from "../../utils/function/splitString";
import Image from "next/image";
import { useState } from "react";

interface Props {
  text: string;
  thumbnail: string;
  slug: string;
  boxSize?: number;
  icon: IconType;
}

export default function RecommendedLinkPanel({
  text,
  thumbnail,
  slug,
  boxSize = 6,
  icon,
}: Props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [part1, part2] = splitString(text);
  const hoverColor = useColorModeValue(themeColor.light, themeColor.dark);
  const border = useColorModeValue(headerBorder.light, headerBorder.dark);

  return (
    <Flex w="100%" mt="5px">
      <Box w={"10%"}>
        <Icon as={icon} color={hoverColor} boxSize={boxSize} ml="6px" />
      </Box>
      <Link href={slug} aria-label="go to post page">
        <Box p="5px" w="90%">
          <Box px={0}>
            <Skeleton isLoaded={isLoaded} w="100%" aspectRatio={16 / 9}>
              <Image
                src={"/" + thumbnail}
                alt="thumbnail"
                width={640}
                height={360}
                style={{ borderRadius: "5px 5px 0 0", border }}
                onLoad={() => {
                  setIsLoaded(true);
                }}
                priority
              />
            </Skeleton>
          </Box>
          <Box
            border={border}
            borderTop={"none"}
            p="5px"
            borderRadius={"0 0 5px 5px"}
          >
            <Skeleton isLoaded={isLoaded}>
              <Text
                px="0"
                pt="5px"
                fontSize={{
                  base: "12px",
                  md: "14px",
                  lg: "16px",
                }}
                fontWeight={"semibold"}
                display="block"
              >
                {part1}
                <Text as={"span"} display="block">
                  {part2}
                </Text>
              </Text>
            </Skeleton>
          </Box>
        </Box>
      </Link>
    </Flex>
  );
}
