import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "./navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Center>
        <Box pt="5">{children}</Box>
      </Center>
    </>
  );
};

export default Layout;
