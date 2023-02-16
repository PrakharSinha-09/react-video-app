import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Assets/1.jpg';
import img2 from '../Assets/2.jpg';
import img4 from '../Assets/4.jpg';
import img6 from '../Assets/6.jpg';
import img7 from '../Assets/vr.jpg';
import img8 from '../Assets/8.jpg';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>

        <Stack h="full" p={'4'} alignItems={'center'} direction={['column', 'row']}>              
        {/* Chakra is amazing man, you can directly work with the responsivenenss too!..like here the array is passed mean if the screen is reduced to small resolution, it will take up the first value of array i.e., column otherwise, it will be row...so, now you know when we are passing the arrays for the attribute how it gets executed!*/}
        
          <Image src={img8} h={['40', '400']}  borderRadius={'20px'}/>

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
            tempora deleniti quod, est eos veniam autem asperiores rem, nam
            laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
            at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
            sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
            Libero, reprehenderit recusandae labore eaque, aspernatur aliquid
            modi soluta ullam voluptatum unde repellat in molestias quod?
            Doloribus ratione illum quisquam earum consequuntur nam voluptatem,
            velit culpa maiores. Inventore esse illum excepturi dolores est
            natus aliquid maiores sunt omnis deserunt accusantium amet enim eos
            adipisci minima hic, nam provident quo aperiam quasi vel?
            Dignissimos accusantium aliquid aut vel explicabo voluptatum
            molestias fugit harum reprehenderit incidunt. Quis cumque explicabo
            omnis officiis autem dolorum!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Gaming is The Future!
         
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        PC Gaming!
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img6} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Consoles
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night Mode OP!
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img7} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Virtual Reality!
      </Heading>
    </Box>
  </Carousel>
);

export default Home;