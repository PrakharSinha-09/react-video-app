import { Button,Box,Heading,Stack,VStack,HStack ,Input,Text} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from "react-icons/ai"
import {FaTwitter,FaGithub,FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <Box bgColor={'darkblue'} minH={'40'} p="16" color={'white'}>

        <Stack direction={['column','row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size="md">
                    Wanna Join ?
                </Heading>

                <HStack borderBottom={"2px solid white"} py="2">
                    <Input placeholder='Enter Email Here' border="none" borderRadius="none" outline={'none'} focusBorderColor={"none"}></Input>
                    <Button p={0} colorScheme={'purple'} variant={'ghost'} borderRadius={"0 20px 20px 0"}>
                        <AiOutlineSend size={20}/>
                    </Button>
                </HStack>
            </VStack>

            <VStack w={'full'} borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']}>
                <Heading textTransform={'uppercase'} textAlign={'center'}>
                    TWITCH TV
                </Heading>
                <Text>Content For Gamers!</Text>
                
            </VStack>

            <VStack w={'full'}>
            <Heading size={'md'} textTransform={'uppercase'}>
                Connect On Socials!
            </Heading>
            
            <Button colorScheme={'instagram'} leftIcon={<FaInstagram />}>
                <a target={'blank'} href="https://instagram.com/">
                Instagram
                </a>
            </Button>

            <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
                <a target={'blank'} href="https://twitter.com/i_M_Prakhar09">
                    Twitter
                </a>
            </Button>

            <Button colorScheme='github' leftIcon={<FaGithub />}>
                <a target={'blank'} href="https://github.com/PrakharSinha-09">
                Github
                </a>
            </Button>
            </VStack>

        </Stack>
    </Box>
  )
}

export default Footer