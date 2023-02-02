import React from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  Box,
  Center,
  Flex,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";

const headers = [
  { id: 1, title: "No" },
  { id: 2, title: "Id" },
  { id: 3, title: "Symbol" },
  { id: 4, title: "State" },
  { id: 5, title: "Start-state" },
  { id: 6, title: "Final-state" },
  { id: 7, title: "transition" },
];

const History = ({ posts }) => {
  console.log(posts);
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
        FA History Records
      </Text>
      <TableContainer pt="5">
        <Table variant="simple" size="md">
          <Thead>
            <Tr w={2}>
              {headers.map((h) => {
                return (
                  <>
                    <Box w={5} />
                    <Th
                      w={50}
                      color="white"
                      textAlign="center"
                      backgroundColor="#1B196F"
                      key={h.id}
                    >
                      {h.title}
                    </Th>
                  </>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {posts.payload.map((p, index) => {
              return (
                <Tr w={2} key={p.id}>
                  <Box w={5} />
                  <Td w={50}>{index + 1}</Td>
                  <Box w={5} />
                  <Td w={50}>{p.id}</Td>
                  <Box w={5} />
                  <Td w={50}>{p.symbols}</Td>
                  <Box w={5} />
                  <Td w={50}>{p.states}</Td>
                  <Box w={5} />
                  <Td w={50}>{p.start_state}</Td>
                  <Box w={5} />
                  <Td w={50}>{p.final_state}</Td>
                  <Box w={5} />
                  <Td>
                    {p.transitions.map((t) => {
                      return (
                        <VStack key={t.id}>
                          <Flex key={t.id}>
                            <HStack alignItems="flex-end">
                              <Text>{t.from.name}</Text>
                              <Box>
                                <Text fontSize={13} mb={-1}>
                                  {t.input}
                                </Text>
                                <FiArrowRight />
                              </Box>
                              {t.to.map((m) => {
                                return (
                                  <HStack>
                                    <Text>{m.name}</Text>
                                  </HStack>
                                );
                              })}
                            </HStack>
                          </Flex>
                          <Box h={1} />
                        </VStack>
                      );
                    })}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Box h={100} />
    </VStack>
  );
};

export default History;

export async function getStaticProps() {
  const res = await fetch(
    "https://emotion-damage-automation.herokuapp.com/api/v1/fa/getAll"
  );
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
