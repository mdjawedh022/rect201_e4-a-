import React from "react";
import { AiOutlineHome } from "react-icons/ai";
// import Image from 'next/image'
import { Box,useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import Theme from "../utils/theme";
const Navbar = () => {
  return (
    <Box
      w={{ base: "100%", md: "100%", lg: "100%" }}
      display={"flex"}
      justifyContent={"space-between"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      borderWidth={'1px'}
      p={"15px"}
      bg={useColorModeValue('blue.100', 'gray.900')}    
    >
      <Box display={'flex'} alignItems="center"
      gap='30px'>
        <Link href="./">
          {" "}
          <AiOutlineHome fontSize={"30px"} />
        </Link>
        <Link href="/people">People</Link>
      </Box>
      <Box><Theme/></Box>
    </Box>
  );
};

export default Navbar;
