import { Box, Button, HStack, Heading, Image, Text, VStack } from 'native-base'
import React from 'react'
import setUp from '../src/setup'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

function SetLocation(props: any) {
    const navigation: any = useNavigation()

    return (
        <Box>
            <HStack justifyContent='space-between' alignItems='center' mb={2}>
                <Heading fontSize={12} color={setUp.bgPrimary} >Rute Kamu - 2.4 Kilometer</Heading>
                <Button onPress={() => props.cancelLocation()} variant='outline' borderColor={setUp.bgPrimary} rounded='lg' bg={setUp.bgScreen} _pressed={{ bg: setUp.LigtGray }} p={0} h={6} w={10} size='sm' _text={{ fontSize: 10, color: setUp.bgPrimary }}>Batal</Button>
            </HStack>
            <VStack pl={4} space={2} mb={6}>
                <HStack alignItems='center' space={2}>
                    <Image source={require('../assets/icons/pin-marker.png')} alt='pin-marker' resizeMode='contain' size={6} />
                    <VStack>
                        <Text fontSize={12} bold>Lokasi Jemput</Text>
                        <Text fontSize={12} color={setUp.MidGray}>Situ bagendit, Banyuresmi</Text>
                    </VStack>
                </HStack>
                <HStack alignItems='center' space={2}>
                    <Image source={require('../assets/icons/pin-dest.png')} alt='pin-dest' resizeMode='contain' size={6} />
                    <VStack>
                        <Text fontSize={12} bold>Lokasi Tujuan</Text>
                        <Text fontSize={12} color={setUp.MidGray}>Banda Aceh, Aceh</Text>
                    </VStack>
                </HStack>
            </VStack>

            <HStack justifyContent='space-between' alignItems='center'>
                <VStack>
                    <Text fontSize={10} mb={-1} color={setUp.MidGray} letterSpacing={1}>BAYAR</Text>
                    <Heading color={setUp.bgPrimary} fontSize={23}>Rp. 6500</Heading>
                </VStack>
                <LinearGradient colors={[setUp.bgPrimary, setUp.bgSecondary]} start={{ x: 0, y: 1 }} style={{ borderRadius: setUp.radius, elevation: 5 }}>
                    <Button onPress={() => navigation.navigate('SearchDriver')} bg='transparent' py={3} px={5} borderRadius={setUp.radius} _pressed={{ bg: '#ffffff17' }}>
                        Lanjutkan
                    </Button>
                </LinearGradient>
            </HStack>
        </Box>
    )
}

export default SetLocation