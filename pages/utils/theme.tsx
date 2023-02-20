/* eslint-disable react-hooks/rules-of-hooks */
import {BsMoonStarsFill,BsSun} from "react-icons/bs"
import { Box, Button, useColorMode } from "@chakra-ui/react";

const Theme = (props: any) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
     <Button
        aria-label="Toggle Color Mode"
        onClick={toggleColorMode}
        _focus={{ boxShadow: 'none' }}
        w="fit-content"
        {...props}>
        {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
      </Button>
    </>
  );
};

export default Theme;
