import { Box, Button, Center, Heading, Image, Text } from 'native-base'
import React from 'react'
import setUp from '../setup'
import { Animated, Easing } from 'react-native'

function SearchDriver() {
    let spinValue = new Animated.Value(0);

    Animated.loop(
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 1500,
                easing: Easing.linear,
                useNativeDriver: true
            }
        )
    ).start()

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    return (
        <Box safeArea bg={setUp.bgScreen} w='full' h='full' p={setUp.paddingScreen}>
            <Center py={10} mt='100px'>
                <Box mb={3}>
                    <Animated.Image style={{ transform: [{ rotate: spin }] }} source={require('../../assets/loading.png')} alt='loading' w={6} h={6} resizeMode='contain' />
                </Box>
                <Heading fontSize={20} color={setUp.bgPrimary} mb={1}>Mohon Tunggu</Heading>
                <Text textAlign='center' fontSize={12} color={setUp.MidGray}>Kami sedang mencarikan anda driver terdekat</Text>
                <Image mb={4} source={require('../../assets/maps.png')} alt='maps' w='full' rounded='lg' />
                <Button variant='outline' py={3} px={6} size='lg' _pressed={{ bg: setUp.softWhite }} rounded='lg' borderColor={setUp.bgPrimary} _text={{ color: setUp.bgPrimary, fontSize: 12, letterSpacing: 1 }}>BATALKAN</Button>
            </Center>
        </Box>
    )


}

export default SearchDriver