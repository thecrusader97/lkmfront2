import { Box, Button, FlatList, HStack, Heading, Image, Pressable, Text, VStack } from 'native-base'
import React, { useState } from 'react'
import setUp from '../src/setup'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

function SetByMaps(props: any) {
    const navigation: any = useNavigation()
    const [origin, setOrigin] = useState(false)
    const [destination, setDestination] = useState(false)

    return (
        <Box>
            <Box bg={setUp.bgCard} rounded='xl' p={3} mb={2} _text={{ fontSize: 12, color: setUp.MidGray }} justifyContent='flex-start'>Pencarian lokasi berdasarkan peta</Box>
            <HStack justifyContent='space-between' alignItems='center' mb={2}>
                <Heading fontSize={12} color={setUp.bgPrimary} >Rute Kamu - {origin && destination ? '56' : '0'} Kilometer</Heading>
                <Button onPress={() => props.cancelLocation()} variant='outline' borderColor={setUp.bgPrimary} rounded='lg' bg={setUp.bgScreen} _pressed={{ bg: setUp.LigtGray }} p={0} h={6} w={10} size='sm' _text={{ fontSize: 10, color: setUp.bgPrimary }}>Batal</Button>
            </HStack>
            <VStack space={2} pl={4} mb={10}>
                <HStack alignItems='center' space={2}>
                    <Image source={require('../assets/icons/pin-marker.png')} alt='pin-marker' resizeMode='contain' size={6} />
                    <VStack flex={2}>
                        <Text fontSize={12} bold>Lokasi Jemput</Text>
                        <Text fontSize={12} color={setUp.MidGray}>{origin ? 'Situ bagendit, Banyuresmi' : '-'}</Text>
                    </VStack>
                    {!origin ?
                        <LinearGradient colors={[setUp.bgPrimary, setUp.bgSecondary]} start={{ x: -1, y: 0 }} style={{ borderRadius: setUp.radius, elevation: 5 }}>
                            <Button bg='transparent' onPress={() => setOrigin(true)} py={1} size='sm' borderRadius={setUp.radius} _pressed={{ bg: '#ffffff17' }}>
                                <Icon name='checkmark-outline' size={12} color='white' />
                            </Button>
                        </LinearGradient>
                        :
                        <Icon name='arrow-forward-outline' size={18} color={setUp.bgPrimary} />
                    }

                </HStack>
                {origin ?
                    <HStack alignItems='center' space={2}>
                        <Image source={require('../assets/icons/pin-dest.png')} alt='pin-dest' resizeMode='contain' size={6} />
                        <VStack flex={2}>
                            <Text fontSize={12} bold>Lokasi Tujuan</Text>
                            <Text fontSize={12} color={setUp.MidGray}>{destination ? 'Banda Aceh, Aceh' : '-'}</Text>
                        </VStack>
                        {!destination ?
                            <LinearGradient colors={[setUp.bgPrimary, setUp.bgSecondary]} start={{ x: -1, y: 0 }} style={{ borderRadius: setUp.radius, elevation: 5 }}>
                                <Button bg='transparent' onPress={() => setDestination(true)} py={1} size='sm' borderRadius={setUp.radius} _pressed={{ bg: '#ffffff17' }}>
                                    <Icon name='checkmark-outline' size={12} color='white' />
                                </Button>
                            </LinearGradient>
                            :
                            <Icon name='arrow-forward-outline' size={18} color={setUp.bgPrimary} />
                        }

                    </HStack>
                    : null}
            </VStack>

            {origin && destination ?
                <HStack justifyContent='space-between' alignItems='center'>
                    <VStack>
                        <Text fontSize={10} mb={-1} color={setUp.MidGray} letterSpacing={1}>BAYAR</Text>
                        <Heading color={setUp.bgPrimary} fontSize={23}>Rp. 6500</Heading>
                    </VStack>
                    <LinearGradient colors={[setUp.bgPrimary, setUp.bgSecondary]} start={{ x: 0, y: 1 }} style={{ borderRadius: setUp.radius, elevation: 5 }}>
                        <Button onPress={() => navigation.navigate('PaymentProcess', { otherPage: props.withParams })} bg='transparent' py={3} px={5} borderRadius={setUp.radius} _pressed={{ bg: '#ffffff17' }}>
                            Lanjutkan
                        </Button>
                    </LinearGradient>
                </HStack>
                : null}
        </Box>
    )
}

export default SetByMaps