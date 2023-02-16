import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import vdo1 from '../Videos/pexels-artem-podrez-7774464.mp4'
import vdo2 from '../Videos/pexels-daniel-cavarra-6290931.mp4'
import vdo3 from '../Videos/pexels-rodnae-productions-7914835.mp4'
import vdo4 from '../Videos/pexels-ron-lach-7849228.mp4'
import vdo5 from '../Videos/pexels-tima-miroshnichenko-6498238.mp4'
import vdo6 from '../Videos/production ID_4247319.mp4'
import vdo7 from '../Videos/pexels-rodnae-productions-7914842.mp4'
const Videos = () => {
  const videosArr = [vdo1,vdo2,vdo3,vdo4,vdo5,vdo6,vdo7];
  const description=["Gaming In Virtual Reality","The Insane Gaming Setup!","An Amazing Gaming Desks","Gamers In The House","Virtual Reality Gaming","Console Gaming","Multiscreen Gaming Setup"]

  const[initialDescription,setDescription]=useState(description[0])
  const [videoSrc, setVideoSrc] = useState(videosArr[0]);
  const [initialHeading, setHeading] = useState("Video 1");

  // function doTask(item)
  // {
    
  // }

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video controls src={videoSrc} style={{width: '100%'}}></video>

        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>
          {initialHeading}
          </Heading>
          <Text>
            {initialDescription}
          </Text>
        </VStack>
      </VStack>
      <VStack w={['full', 'xl']} alignItems={'stretch'} p="8" spacing={'8'} overflowY={'auto'}>
        {videosArr.map((item, index) => (
          <Button variant={'ghost'} colorScheme={'purple'} onClick={() => {setVideoSrc(item);setHeading("Video" +(index+1));setDescription(description[index])}}>
              Video {index + 1}
              
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};
export default Videos