import {
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Text,
  useColorModeValue,
  Button,
  Wrap,
  WrapItem,
  Skeleton,
} from "@chakra-ui/react";
import Image from "next/image";

import { IconType } from "react-icons";
import Link from "next/link";
import { themeColor } from "../../styles/cssPallet";
import { splitString } from "../../utils/function/splitString";
import { TagsType } from "../../utils/tags/tags";
import MiniTag from "../MiniTag";
import { useState } from "react";
import { getSrcSetFromPath } from "../../utils/function/getSrcSetFromPath";

interface Props {
  text: string;
  thumbnail: string;
  slug: string;
  tags: TagsType[] | null;
  boxSize?: number;
  icon: IconType;
}

export default function RecommendedLinkText({
  text,
  thumbnail,
  slug,
  tags,
  boxSize = 6,
  icon,
}: Props) {
  const { md } = getSrcSetFromPath(thumbnail);
  const [isLoaded, setIsLoaded] = useState(false);
  const [part1, part2] = splitString(text);

  const hoverColor = useColorModeValue(themeColor.light, themeColor.dark);

  return (
    <Popover size={"xl"}>
      <PopoverTrigger>
        <Button
          bg="none"
          w="100%"
          h="50px"
          textAlign={"left"}
          px="0"
          _hover={{ bg: "none", color: hoverColor }}
          leftIcon={
            <Icon as={icon} color={hoverColor} boxSize={boxSize} ml="6px" />
          }
          textOverflow={"break-word"}
          whiteSpace={"normal"}
        >
          <Text w="90%" fontSize={"12px"} display="block">
            {part1}
            <Text as={"span"} display="block">
              {part2}
            </Text>
          </Text>
        </Button>
      </PopoverTrigger>
      <PopoverContent p="10px" w="400px">
        <PopoverArrow />
        <PopoverHeader
          px="0"
          mt="10px"
          fontWeight={"semibold"}
          fontSize={"14px"}
        >
          {part1 + part2}
        </PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody px={0}>
          <Skeleton isLoaded={isLoaded} w="100%" aspectRatio={16 / 9}>
            <Link href={slug} aria-label="go to post page">
              <Image
                src={"/" + thumbnail}
                alt="thumbnail"
                width={640}
                height={360}
                onLoad={() => {
                  setIsLoaded(true);
                }}
              />
            </Link>
          </Skeleton>
        </PopoverBody>
        <PopoverFooter px="0">
          {tags && tags.length > 0 && (
            <Wrap my={"5px"}>
              {tags.map((tag) => (
                <WrapItem key={tag}>
                  <Skeleton isLoaded={isLoaded}>
                    <MiniTag title={tag} normalStyle filterDisable />
                  </Skeleton>
                </WrapItem>
              ))}
            </Wrap>
          )}
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
