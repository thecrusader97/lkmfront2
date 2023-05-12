import { Box, Button, HStack, Heading, Image, Pressable, ScrollView, Stack, Text, VStack } from 'native-base'
import React from 'react'
import setUp from '../setup'
import Icon from 'react-native-vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient'

function PaymentProcess({ route, navigation }: any) {
    const { otherPage } = route.params;
    console.log(route.params);

    return (
        <ScrollView bg={setUp.softWhite} showsVerticalScrollIndicator={false} contentContainerStyle={{ flex: 1, flexGrow: 1 }}>
            <Stack safeArea p={setUp.paddingScreen} flex={1} h='full'>
                <HStack alignItems='center' space={2} mb={4}>
                    <Button variant='ghost' rounded='full' h={12} w={12} bg={setUp.bgScreen} _pressed={{ bg: setUp.softWhite }} onPress={() => navigation.navigate('BottomTabs')}>
                        <Icon name='chevron-back-outline' size={24} />
                    </Button>
                    <Heading color={setUp.HeavyGray} fontSize={20}>Pembayaran</Heading>
                </HStack>
                <VStack space={4}>
                    <Box bg={setUp.bgScreen} p={4} borderRadius={setUp.radius}>
                        <HStack space={4}>
                            <LinearGradient colors={[setUp.bgPrimary, setUp.bgSecondary]} start={{ x: 1, y: -1 }} style={{ borderRadius: setUp.radius, elevation: 5, padding: 5, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('../../assets/icons/man.png')} alt='pin' w={5} h={5} resizeMode='contain' />
                            </LinearGradient>
                            <VStack>
                                <Heading fontSize={14} mb={2} color={setUp.HeavyGray}>Titik Penjemputan</Heading>
                                <Text fontSize={10}>Info lokasi</Text>
                                <Text fontSize={12} color={setUp.bgSecondary} bold>Gerbang rumah solusi</Text>
                            </VStack>
                        </HStack>
                    </Box>
                    <Box bg={setUp.bgScreen} p={4} borderRadius={setUp.radius}>
                        <HStack space={4}>
                            <LinearGradient colors={[setUp.bgPrimary, setUp.bgSecondary]} start={{ x: 1, y: -1 }} style={{ borderRadius: setUp.radius, elevation: 5, padding: 5, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('../../assets/icons/map-pin.png')} alt='pin' w={5} h={5} resizeMode='contain' />
                            </LinearGradient>
                            <VStack>
                                <Heading fontSize={14} mb={2} color={setUp.HeavyGray}>Tujuan</Heading>
                                <Text fontSize={10}>Info lokasi</Text>
                                <Text fontSize={12} color={setUp.bgSecondary} bold>Rumah cempaka</Text>
                            </VStack>
                        </HStack>
                    </Box>
                    {otherPage ?
                        <Box bg={setUp.bgScreen} p={4} borderRadius={setUp.radius}>
                            <HStack space={4} w='full'>
                                <Icon name='document-outline' size={20} color={setUp.bgPrimary} />
                                <VStack flex={2}>
                                    <Heading fontSize={13} mb={2} color={setUp.bgPrimary}>Titip Talang</Heading>
                                    <Text fontSize={10} color={setUp.MidGray}>Baso aci yang didepan gerbang neraka 1 porsi</Text>
                                </VStack>
                                <Heading fontSize={13} color={setUp.bgPrimary}>Rp. 15000</Heading>
                            </HStack>
                        </Box>
                        : null}
                    <Pressable borderWidth={1} _pressed={{ bg: setUp.softWhite }} borderColor={setUp.LigtGray} p={3} borderRadius={setUp.radius} bg={setUp.bgScreen}>
                        <HStack alignItems='center' space={2}>
                            <Image source={require('../../assets/icons/discount.png')} alt='discount' w={4} h={4} resizeMode='contain' />
                            <Text fontSize={12} flex={1}>Voucher Jajap</Text>
                            <Text fontSize={12} color={setUp.LigtGray}>masukan kode</Text>
                            <Icon name='chevron-forward-outline' size={14} color={setUp.LigtGray} />
                        </HStack>
                    </Pressable>

                    <VStack space={1}>
                        <HStack justifyContent='space-between' borderBottomWidth={1} borderColor='blueGray.100' pb={2}>
                            <Text fontSize={12} color='blueGray.500'>Jarak</Text>
                            <Text fontSize={12} color='blueGray.700' bold>3 Km</Text>
                        </HStack>
                        <HStack justifyContent='space-between' borderBottomWidth={1} borderColor='blueGray.100' pb={2}>
                            <Text fontSize={12} color='blueGray.500'>Ongkos</Text>
                            <Text fontSize={12} color='blueGray.700' bold>Rp. 6000</Text>
                        </HStack>
                        <HStack justifyContent='space-between' borderBottomWidth={1} borderColor='blueGray.100' pb={2}>
                            <Text fontSize={12} color='blueGray.500'>Potongan</Text>
                            <Text fontSize={12} color='blueGray.700' bold>-</Text>
                        </HStack>
                        <HStack justifyContent='space-between' borderBottomWidth={1} borderColor='blueGray.100' pb={2}>
                            <Text fontSize={12} color='blueGray.500'>Pengembangan Aplikasi</Text>
                            <Text fontSize={12} color='blueGray.700' bold>Rp. 500</Text>
                        </HStack>
                        <HStack justifyContent='space-between' borderBottomWidth={1} borderColor='blueGray.100' pb={2}>
                            <Text fontSize={12} color='blueGray.500'>Total</Text>
                            <Text fontSize={12} color='blueGray.700' bold>Rp. 6500</Text>
                        </HStack>
                    </VStack>


                </VStack>
                <HStack bg='white' position='absolute' p={setUp.paddingScreen} left={0} right={0} bottom={0} justifyContent='space-between' alignItems='center'>
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
            </Stack>
        </ScrollView>
    )
}

export default PaymentProcess