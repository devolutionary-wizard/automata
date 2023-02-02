import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Card from "../common/card";

const items = [
  { id: 1, title: "Design FA", link: "/designfa" },
  { id: 2, title: "Check FA", link: "/checkfa" },
  { id: 3, title: "Accept String", link: "/acceptstring" },
  { id: 4, title: "Convert nfa to dfa", link: "/convertnfa" },
  { id: 5, title: "minimize dfa", link: "/minimizedfa" },
];

const Index = () => {
  return (
    <>
      {items.map((i) => {
        return (
          <Flex>
            <Card key={i.id} title={i.title} link={i.link} />
            <Box w={2} />
          </Flex>
        );
      })}
    </>
  );
};

export default Index;
