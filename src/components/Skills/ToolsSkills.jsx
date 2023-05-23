import { Flex, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import { BiGitRepoForked } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import {GrDocker} from "react-icons/gr";
import {FaAws} from "react-icons/fa";
import { VscJson } from "react-icons/vsc";

export default function ToolsSkills() {
  return (
    <SimpleGrid
      columns={{ base: "2", lg: "5", md: "3" }}
      gap={{ base: "2rem", lg: "4rem", md: "3rem" }}
    >
      <Flex
        alignItems="center"
        flexDir="column"
        backgroundColor={useColorModeValue("black", "white")}
        padding="1rem 1.5rem"
        borderRadius="10px"
      >
        <BiGitRepoForked size="3rem" fill="orange" />
        <Text
          fontSize="2rem"
          color={useColorModeValue("white", "black")}
          fontWeight="medium"
        >
          Git
        </Text>
      </Flex>

      {/* 2nd */}
      <Flex
        alignItems="center"
        flexDir="column"
        backgroundColor={useColorModeValue("black", "white")}
        padding="1rem 1.5rem"
        borderRadius="10px"
      >
        <BsGithub size="3rem" fill={useColorModeValue("white", "black")} />
        <Text
          fontSize="2rem"
          color={useColorModeValue("white", "black")}
          fontWeight="medium"
        >
          Github
        </Text>
      </Flex>

      {/* 3rd */}
      <Flex
        alignItems="center"
        flexDir="column"
        backgroundColor={useColorModeValue("black", "white")}
        padding="1rem 1.5rem"
        borderRadius="10px"
      >
        <GrDocker size="3rem" fill={"blue"} />
        <Text
          fontSize="2rem"
          color={useColorModeValue("white", "black")}
          fontWeight="medium"
        >
          Docker
        </Text>
      </Flex>

      {/* 4th */}
      <Flex
        alignItems="center"
        flexDir="column"
        backgroundColor={useColorModeValue("black", "white")}
        padding="1rem 1.5rem"
        borderRadius="10px"
      >
        <FaAws size="3rem" fill={"orangered"} />
        <Text
          fontSize="2rem"
          color={useColorModeValue("white", "black")}
          fontWeight="medium"
        >
          AWS
        </Text>
      </Flex>


      {/* 7th */}
      <Flex
        alignItems="center"
        flexDir="column"
        backgroundColor={useColorModeValue("black", "white")}
        padding="1rem 1.5rem"
        borderRadius="10px"
      >
        <VscJson size="3rem" fill={"orange"} />

        <Text
          fontSize="2rem"
          color={useColorModeValue("white", "black")}
          fontWeight="medium"
        >
          JSON
        </Text>
      </Flex>
    </SimpleGrid>
  );
}
