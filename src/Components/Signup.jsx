import { Container,Stack,VStack,Button,Input,Heading ,Text,Avatar,Radio, RadioGroup} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'}>

        <form>
            <VStack alignItems={'stretch'} spacing='8' w={['full','96']} m='auto' my='16'>
                <Heading textAlign={'center'}>TWITCH TV!</Heading>
                <Avatar alignSelf={'center'} boxSize='32'></Avatar>

                <Input placeholder='First Name' type={'text'} required focusBorderColor='purple.500'></Input>
                <Input placeholder='Last Name' type={'text'} required focusBorderColor='purple.500'></Input>

                <RadioGroup defaultChecked>
                <Stack direction='row'>
                    <Text>Gender :</Text>
                    <Radio value='1'>Male</Radio>
                    <Radio value='2'>Female</Radio>
                </Stack>
                </RadioGroup>

                <Input placeholder='Email' type={'email'} required focusBorderColor='purple.500'></Input>
                <Input placeholder='Password' type={'password'} required focusBorderColor='purple.500'></Input>
                <Input placeholder='Confirm Password' type={'password'} required focusBorderColor='purple.500'></Input>

                <Button variant={'link'} alignSelf='flex-end'>
                    <Link to={'/forgetpassword'}>Already A User ?</Link>
                </Button>

                <Button type='submit' colorScheme={'red'}>
                    Sign Up
                </Button>

                {/* <Text>New User ?</Text> */}
                <Link to={'/signup'}><Text textAlign={'right'}>New User ?</Text></Link>
                

            </VStack>
        </form>
    </Container>
  )
}

export default Signup