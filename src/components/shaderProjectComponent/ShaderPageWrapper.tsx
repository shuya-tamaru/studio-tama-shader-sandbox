"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Image,
  VStack,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { ShaderSlugMapper } from "../../shaderProjects/shaderSlugMapper";
import {
  mainBg,
  mainFontColor,
  textGradientCss,
} from "../../styles/cssPaletShader";
import Link from "next/link";

interface Props {
  posts: ShaderSlugMapper[];
}

export default function ShaderPageWrapper({ posts }: Props) {
  return (
    <Box w="100%" minH="100svh" bg={mainBg} color={mainFontColor}>
      <Container maxW="1200px" py={12}>
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl" fontWeight="bold" sx={textGradientCss}>
              STUDIO TAMA
            </Heading>
            <Text fontSize="lg" color="gray.400" fontWeight="medium">
              Shader Sandbox Collection
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="100%">
            {posts.map((post) => (
              <Link key={post.slug} href={`/${post.slug}`} passHref>
                <Box
                  bg="gray.900"
                  borderRadius="xl"
                  overflow="hidden"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                    bg: "gray.800",
                  }}
                  border="1px solid"
                  borderColor="gray.700"
                  cursor="pointer"
                >
                  {/* Thumbnail */}
                  <Box position="relative" overflow="hidden">
                    <Image
                      src={post.imagePaths}
                      alt={post.title}
                      w="100%"
                      h="200px"
                      objectFit="cover"
                      transition="transform 0.3s ease"
                      _hover={{ transform: "scale(1.05)" }}
                    />
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      bg="linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)"
                    />
                  </Box>

                  {/* Content */}
                  <VStack p={6} align="start" spacing={3}>
                    <Heading size="md" color="white" fontWeight="bold">
                      {post.title}
                    </Heading>
                    <Text
                      color="gray.300"
                      fontSize="sm"
                      lineHeight="1.6"
                      noOfLines={2}
                    >
                      {post.description}
                    </Text>
                    <HStack justify="space-between" w="100%" pt={2}>
                      <Text fontSize="xs" color="gray.500">
                        {new Date(post.createdAt).toLocaleDateString("ja-JP")}
                      </Text>
                      <Box
                        as="span"
                        fontSize="xs"
                        color="blue.400"
                        fontWeight="medium"
                        _hover={{ color: "blue.300" }}
                      >
                        View Project →
                      </Box>
                    </HStack>
                  </VStack>
                </Box>
              </Link>
            ))}
          </SimpleGrid>

          {/* Footer */}
          <Box pt={8}>
            <Text fontSize="sm" color="gray.600" textAlign="center">
              © 2024 STUDIO TAMA - Shader Experiments & WebGL Demos
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
