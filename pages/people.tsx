/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
import Head from "next/head";
import axios from "axios"
import { Box, Avatar, Heading, Text, Button,} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { contextTods, userDta } from "./utils/types";
import Link  from "next/link"
import Image from "next/image";
import { useRouter } from "next/router";
const people = ({ data }:userDta) => {
    const router=useRouter();
  console.log(data);
 
 
 
  const handleClick=async(id:number)=>{
    await axios.post(`https://jsonplaceholder.typicode.com/${id}todos`,data)
    .then((res)=>{
      alert("success")
      router.push(`/todos${id}`)
      })
    .catch((e)=>alert(e))
  }
 
 
  return (
    <>
      <Box
        w={{ base: "90%", md: "80%", lg: "90%" }}
        m={"auto"}
        display={"grid"}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap="20px"
        textAlign={"center"}
      >
        {data.map(
          (el: {
            [x: string]: ReactNode;
            id: React.Key | null | undefined;
          }) => (
          
            <Box
              key={el.id}
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              m="auto"
              padding={"30px"}
              borderRadius={"10px"}
            >
              <Avatar
                m=" 4 auto"
                size={"xl"}
                src={""}
                alt={"name"}
                // mb={4}
                pos={"relative"}
                _after={{
                  content: '""',
                  w: 4,
                  h: 4,
                  bg: "green.300",
                  border: "2px solid white",
                  rounded: "full",
                  pos: "absolute",
                  bottom: 0,
                  right: 3,
                }}
              />
              <Heading fontSize={{ base: "12px", md: "15px", lg: "20px" }}>
                {el.name}
              </Heading>
              <Text>{el.username}</Text>
              <Text>
                {el.address.street} {el.address.suite}..
              </Text>
              
              <Button  onClick={handleClick} borderRadius={"20px"} bg={"blue.300"} padding={"0 35px"} color={'white'}>
                Get Todos
              </Button>
            
            </Box>
          )
        )}

      </Box>
    </>
  );
};

export async function getStaticProps(context: contextTods) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
}
export default people;
{
  /* <Image
              src="https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg"
              alt="jawed"
              width={100} height={100}
            style={{borderRadius:"50%"}}
            /> */
}
