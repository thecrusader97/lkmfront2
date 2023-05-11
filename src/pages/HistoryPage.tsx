import { Box, Button, Center, Divider, HStack, Heading, Image, ScrollView, Stack, Text, VStack, Menu, Pressable } from 'native-base'
import React, { useState } from 'react'
import setUp from '../setup'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'


function HistoryPage() {
    const navigation: any = useNavigation()
    const listHistory = [
        {
            invoice: '#UHI8212',
            type: 'Bonceng',
            price: 8500,
            status: 'success',
            date: '02-03-2023'
        },
        {
            invoice: '#JUU892L',
            type: 'Bonceng',
            price: 6500,
            status: 'success',
            date: '18-04-2023'
        },
        {
            invoice: '#OL39H12',
            type: 'Titip',
            price: 12500,
            status: 'cancel',
            date: '22-01-2023'
        },
        {
            invoice: '#KK83L922',
            type: 'Titip',
            price: 25500,
            status: 'cancel',
            date: '12-02-2023'
        },
    ]
    const [dropdown, setDropdown] = useState(false)

    return (
        <ScrollView bg={setUp.softWhite} showsVerticalScrollIndicator={false}>
            <Box safeArea p={setUp.paddingScreen}>
                <HStack justifyContent='space-between' alignItems='center' mb={2}>
                    <Heading color={setUp.HeavyGray} fontSize={20}>Riwayat</Heading>
                    <Button _pressed={{ bg: setUp.bgScreen }} h={12} w={12} variant='ghost' borderRadius='full'>
                        <Icon name='options-outline' size={24} color={setUp.HeavyGray} />
                    </Button>
                </HStack>
                {/* <Center py={10} mt='100px'>
                    <Image source={require('../../assets/icons/empty-history.png')} alt='history' width='180px' h='150px' resizeMode='contain' />
                    <Heading fontSize={16} color={setUp.LigtGray} letterSpacing={1}>Wah Kosong !</Heading>
                    <Text fontSize={13} mb={6} color={setUp.LigtGray}>Kamu belum melakukan transaksi apapun nih</Text>
                    <Button variant='outline' py={3} px={5} borderRadius={10}>
                        <Text color={setUp.LigtGray}>Pesan Bonceng</Text>
                    </Button>
                </Center> */}

                <VStack space={3}>
                    {listHistory.map((item, index) =>
                        <Pressable key={index} onPress={() => navigation.navigate('RateDriver')}>
                            <Box borderRadius={setUp.radius} bg={setUp.bgScreen} position='relative' p={4}>
                                <HStack space={3}>
                                    <LinearGradient colors={[setUp.bgPrimary, setUp.bgSecondary]} start={{ x: 0, y: -1 }} style={{ borderRadius: setUp.radius, elevation: 5 }} >
                                        <Box w='50px' h='50px' overflow='hidden'>
                                            <Image source={require('../../assets/masking.png')} alt='masking' w='full' h='full' />
                                        </Box>
                                    </LinearGradient>
                                    <VStack flex={2}>
                                        <HStack space={1.5} alignItems='center'>
                                            <Text fontSize={10} color={setUp.MidGray}>{item.invoice}</Text>
                                            <Box w='3.5px' h='3.5px' bg={setUp.LigtGray} rounded='full'></Box>
                                            <Text fontSize={10} color={setUp.MidGray}>{item.type}</Text>
                                        </HStack>
                                        <Heading fontSize={20} color={setUp.HeavyRed}>Rp. {item.price}</Heading>
                                        <Text fontSize={10} color={setUp.bgSecondary}>{item.date}</Text>
                                    </VStack>
                                    <Text fontSize={10} bold color={item.status == 'success' ? '#40c94a' : 'amber.700'}>{item.status}</Text>
                                </HStack>
                            </Box>
                        </Pressable>
                    )}
                </VStack>
            </Box >
        </ScrollView >
    )
}

export default HistoryPage