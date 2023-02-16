import { Container,VStack,Button,Input,Heading ,Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'}>

        <form>
            <VStack alignItems={'stretch'} spacing='8' w={['full','96']} m='auto' my='36'>
                <Heading>Welcome To The TWITCH TV!</Heading>

                <Input placeholder='Email' type={'email'} required focusBorderColor='purple.500'></Input>
                <Input placeholder='Password' type={'password'} required focusBorderColor='purple.500'></Input>

                <Button variant={'link'} alignSelf='flex-end'>
                    <Link to={'/#'}>Forget Password ?</Link>
                </Button>

                <Button type='submit' colorScheme={'red'}>
                    Login
                </Button>

                {/* <Text>New User ?</Text> */}
                <Link to={'/signup'}><Text textAlign={'right'}>New User ?</Text></Link>
                

            </VStack>
        </form>
    </Container>
  )
}

export default Login