import { Box, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const items = [
  { id: 1, title: "Applications", link: "/" },
  { id: 2, title: "History", link: "/history" },
  { id: 3, title: "Our Team", link: "team" },
];

const Navbar = () => {
  return (
    <>
      <Flex
        pl={10}
        pr={10}
        backgroundColor="#1B196F"
        h="10vh"
        w="100vw"
        alignItems="center"
      >
        <Link href="/">
          <Text
            cursor="pointer"
            color="white"
            textTransform="uppercase"
            fontSize={40}
            fontWeight="700"
          >
            cadt
          </Text>
        </Link>

        <Spacer />
        <HStack>
          {items.map((i) => {
            return (
              <Link key={i.id} href={i.link}>
                <Text
                  cursor="pointer"
                  textColor="#1B196E"
                  fontWeight="bold"
                  pt="1"
                  pl="8"
                  pr="8"
                  pb="1"
                  borderRadius="16"
                  fontSize={15}
                  backgroundColor="white"
                >
                  {i.title}
                </Text>
              </Link>
            );
          })}
        </HStack>
      </Flex>
    </>
  );
};

export default Navbar;
