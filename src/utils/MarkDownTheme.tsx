import {
  Box,
  Heading,
  Image,
  Text,
  VStack,
  Link,
  Th,
  Td,
  ColorMode,
  Table,
} from "@chakra-ui/react";
import CodeBlack from "../components/CodeBlack";
import LinkCard from "../components/LinkCard";
import { CardData } from "../types/CardData";

const hStyle = {
  borderBottom: "2px solid #c0c0c0",
  mb: "2px",
  fontWeight: 800,
};
export const markdownTheme = (metas: CardData, colorMode: ColorMode) => {
  return {
    h1: (props: any) => {
      const { children } = props;
      return (
        <Heading
          id={children}
          as="h1"
          fontSize={["xl", "3xl", "3xl"]}
          sx={hStyle}
        >
          {children}
        </Heading>
      );
    },
    h2: (props: any) => {
      const { children } = props;
      return (
        <Heading
          id={children}
          as="h2"
          fontSize={["lg", "2xl", "2xl"]}
          sx={hStyle}
        >
          {children}
        </Heading>
      );
    },
    h3: (props: any) => {
      const { children } = props;
      return (
        <Heading
          id={children}
          as="h3"
          fontSize={["md", "xl", "xl"]}
          sx={hStyle}
        >
          {children}
        </Heading>
      );
    },
    h4: (props: any) => {
      const { children } = props;
      return (
        <Heading
          id={children}
          as="h4"
          fontSize={["sm", "lg", "lg"]}
          sx={hStyle}
        >
          {children}
        </Heading>
      );
    },
    h5: (props: any) => {
      const { children } = props;
      return (
        <Heading
          id={children}
          as="h5"
          fontSize={["sm", "md", "md"]}
          sx={hStyle}
        >
          {children}
        </Heading>
      );
    },
    h6: (props: any) => {
      const { children } = props;

      return (
        <Heading id={children} as="h6" fontSize="sm" sx={hStyle}>
          {children}
        </Heading>
      );
    },
    a: (props: any) => {
      const { children, href } = props;
      const target = metas && metas.find((meta) => meta.url === href);

      return target &&
        target.title &&
        target.image &&
        target.title !== "" &&
        target.image !== "" ? (
        <LinkCard
          image={target.image}
          href={target.url}
          title={target.title}
          description={target.description}
          icon={target.icon}
        />
      ) : (
        <Link
          _hover={{ textDecoration: "none" }}
          style={{ color: "#0096FF ", borderBottom: "1px solid #0096FF " }}
          href={href}
          target="_blank"
        >
          {children}
        </Link>
      );
    },
    table: (props: any) => {
      const { children } = props;
      return (
        <Box overflowX="auto" w="100%" my={4}>
          <Table variant="striped" size="md" colorScheme="gray" maxW="100%">
            {children}
          </Table>
        </Box>
      );
    },
    th: (props: any) => {
      const { children } = props;
      return (
        <Th
          p={"8px"}
          display={{ sm: "table-cell", md: "table-cell" }}
          style={
            colorMode === "light"
              ? {
                  background: "#dcdcdc",
                  border: "1px solid #999",
                  color: "#333",
                }
              : {
                  background: "#999",
                  border: "1px solid #fff",
                  color: "#fff",
                }
          }
        >
          {children}
        </Th>
      );
    },
    td: (props: any) => {
      const { children } = props;
      return (
        <Td
          p={"8px"}
          display={{ sm: "table-cell", md: "table-cell" }}
          style={
            colorMode === "light"
              ? {
                  background: "none",
                  border: "1px solid #999",
                  color: "#333",
                }
              : { background: "none", border: "1px solid #fff", color: "#fff" }
          }
        >
          {children}
        </Td>
      );
    },
    p: (props: any) => {
      const { children } = props;
      const nodes = children.map((ele: any, index: string) => {
        if (ele.props && ele.props.node && ele.props.node.tagName === "img") {
          const { src, alt } = ele.props;
          const text = alt as string;
          const splitText = text.split("w:");
          const title = splitText.length > 0 ? splitText[0] : undefined;
          const width = splitText.length > 1 ? splitText[1] : undefined;
          return (
            <VStack key={index} justify={"center"}>
              <Image
                display={"inline-block"}
                w={width}
                src={src}
                alt="thumbnail"
              />
              {title && (
                <Text
                  w={width}
                  textAlign={"center"}
                  fontSize={"sm"}
                  color={"#777"}
                >
                  {title}
                </Text>
              )}
            </VStack>
          );
        } else if (ele.props && ele.props.href) {
          return (
            <Box key={index} w="100%">
              {ele}
            </Box>
          );
        } else {
          return <Text key={index}>{ele}</Text>;
        }
      });

      return nodes;
    },
    code: CodeBlack,
  };
};
