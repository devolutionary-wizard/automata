import { Box, Center, Flex, Grid, Text, VStack, Wrap } from "@chakra-ui/react";
import Card from "../components/common/card";
import Application from "../components/applications";
export default function Home() {
  return (
    <VStack>
      <Text
        // backgroundColor="#1B196E"
        color="#1B196E"
        fontSize={30}
        w="100vw"
        fontWeight="700"
        pt="1"
        pb="1"
        textAlign="center"
      >
        List Of Features
      </Text>
      <VStack>
        <Flex pt="5">
          <Card title="Design FA" link="designfa" />
          <Box w="10vw" />
          <Card title="Check FA" link="checkfa" />
          <Box w="10vw" />
          <Card title="Accept String" link="acceptstring" />
        </Flex>
        <Flex pt="5">
          <Card title="convert nfa to dfa" link="convertnfa" />
          <Box w="10vw" />
          <Card title="minimize dfa" link="minimizedfa" />
        </Flex>
      </VStack>
      {/* <Application /> */}
    </VStack>
  );
}
