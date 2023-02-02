import React from "react";
import dfa from "../../../assets/svgs/dfa.svg";
import { Box, Text, VStack, Center } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Index = ({ title, link, key }) => {
  return (
    <Link href={link}>
      <Box
        cursor="pointer"
        key={key}
        w={240}
        h={180}
        shadow="base"
        backgroundColor="#1B196E"
        colorScheme="primary"
        borderRadius={10}
      >
        <Center>
          <VStack spacing={3} pt="7">
            <Image src={dfa} height={100} width={100} />
            <Text size="16" color="white" textTransform="uppercase">
              {title}
            </Text>
          </VStack>
        </Center>
      </Box>
    </Link>
  );
};

export default Index;
