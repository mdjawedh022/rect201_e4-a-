import Head from 'next/head'

import {  Box, Center, Heading} from "@chakra-ui/react";
import styles from '@/styles/Home.module.css'



export default function Home() {
  return (
    <>
<Box  w={{ base: "100%", md: "100%", lg: "100%" }} textAlign="center" mt="30px">
  <Heading>Welcome to the C4</Heading>
  <br />
   <Heading>evaluation for</Heading>
   <br />
   <Heading color={"blue.200"}>RCT-201</Heading>
   </Box>
    </>
  )
}
