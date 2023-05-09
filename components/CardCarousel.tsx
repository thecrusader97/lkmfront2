import React, { useRef, useEffect, useState } from 'react'
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from 'react-native'
import { Box, Center, HStack, Image, Pressable, Text } from 'native-base';
import setUp from '../src/setup';

function CardCarousel({ data }: any) {
  const SLIDER_WIDTH = Dimensions.get('window').width - (setUp.paddingScreen * 4 * 2);
  const isCarousel = useRef<any>(null)
  const [activeTab, setActiveTab] = useState<any>(0)

  const carouselCardItem = ({ item, index }: any) => {
    return (
      <Box overflow='hidden' key={index}>
        <Image source={item} w='full' h='80px' alt='banner' resizeMode='cover' borderRadius={setUp.radius} />
      </Box>
    )
  }

  return (
    <Box overflow='hidden'>
      <Center>
        <Carousel
          layout='default'
          layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={carouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={SLIDER_WIDTH}
          slideStyle={{ width: SLIDER_WIDTH }}
          inactiveSlideShift={9}
          useScrollView={true}
          onSnapToItem={(index) => setActiveTab(index)}
        />
        <HStack space={1} mt={2}>
          {data.map((item: any, index: number) =>
            <Pressable key={index}>
              <Box h={1} w={index == activeTab ? 4 : 2} rounded='full' bg={index == activeTab ? 'white' : setUp.whiteOpacity} />
            </Pressable>
          )}
        </HStack>
      </Center>
    </Box>
  )
}

export default CardCarousel