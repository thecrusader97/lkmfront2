import { Avatar, Box, Button, Center, FlatList, HStack, Heading, Image, Input, Pressable, ScrollView, Stack, Text } from 'native-base'
import React from 'react'
import setUp from '../setup'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import CardCarousel from '../../components/CardCarousel'


function JajananPage() {
    const navigation: any = useNavigation()
    const bannersList = [require('../../assets/food-off.png'), require('../../assets/food-off-2.png')]

    const categories = [
        {
            img: 'https://source.unsplash.com/100x100/?food',
            name: 'Salad'
        },
        {
            img: 'https://source.unsplash.com/101x101/?food',
            name: 'Sandwich'
        },
        {
            img: 'https://source.unsplash.com/102x102/?food',
            name: 'Bread'
        },
        {
            img: 'https://source.unsplash.com/103x103/?food',
            name: 'Steak'
        },
    ]

    const jajananList = [
        {
            img: 'https://source.unsplash.com/200x200/?food',
            name: 'provident ipsum',
            distance: 3.4,
            location: 'Bayongbong',
            ratings: 4.1,
        },
        {
            img: 'https://source.unsplash.com/201x201/?food',
            name: 'dolor molestiae',
            distance: 2.1,
            location: 'Garut Kota',
            ratings: 4.3,
        },
        {
            img: 'https://source.unsplash.com/202x202/?food',
            name: 'amet consecture',
            distance: 8.4,
            location: 'Limbangan',
            ratings: 4.2,
        },
        {
            img: 'https://source.unsplash.com/203x203/?food',
            name: 'adisipicing corporis',
            distance: 1.1,
            location: 'Banyuresmi',
            ratings: 4.5,
        },
        {
            img: 'https://source.unsplash.com/204x204/?food',
            name: 'Delectus dolor',
            distance: 22,
            location: 'Cibatu',
            ratings: 4.3,
        },
        {
            img: 'https://source.unsplash.com/205x205/?food',
            name: 'praesentium nihil!',
            distance: 10,
            location: 'Wanaraja',
            ratings: 4.2,
        },
        {
            img: 'https://source.unsplash.com/206x206/?food',
            name: 'beatae laboriosam',
            distance: 2.4,
            location: 'Jayaraga',
            ratings: 4.4,
        },
        {
            img: 'https://source.unsplash.com/207x207/?food',
            name: 'Reiciendis modi laboriosam',
            distance: 13,
            location: 'Samarang',
            ratings: 4.1,
        },
    ]

    return (
        <Stack safeArea bg={setUp.softWhite} flex={1}>
            <Box w='full' position='relative'>
                <Image position='absolute' top={0} left={0} w='full' right={0} zIndex={-1} source={require('../../assets/banner-bg.png')} alt='banner-bg' width='full' h='full' resizeMode='cover' />
                <Box p={setUp.paddingScreen}>
                    <HStack mb={2} alignItems='center'>
                        <Button p={1} rounded='full' h={8} w={8} variant='ghost' _pressed={{ bg: '#D9D9D922' }} onPress={() => navigation.navigate('BottomTabs')}>
                            <Icon name='chevron-back-outline' size={18} color='white' />
                        </Button>
                        <Box flex={2}>
                            <Text fontSize={8} mb={-.8} color='white' letterSpacing={.8}>JAJAP KE</Text>
                            <Heading fontSize={14} color='white'>Banyuresmi</Heading>
                        </Box>
                        <HStack space={1}>
                            <Button h={8} w={8} _pressed={{ bg: '#ffffff11' }} p={0} rounded='full' variant='unstyled' bg='#ffffff33'><Icon name='heart-outline' size={14} color={setUp.softWhite} /></Button>
                            <Button h={8} w={8} _pressed={{ bg: '#ffffff11' }} p={0} rounded='full' variant='unstyled' bg='#ffffff33'><Icon name='reader-outline' size={14} color={setUp.softWhite} /></Button>
                        </HStack>
                    </HStack>
                    <Input InputLeftElement={<Icon name='search-outline' style={{ marginLeft: 10 }} size={16} color={setUp.MidGray} />} _focus={{ bg: 'white' }} color={setUp.MidGray} placeholder='Cari jajanan yang kamu suka disini' variant='outline' bg='white' py='5px' pl={2} w='full' borderRadius={setUp.radius} />
                </Box>
            </Box>
            <ScrollView px={setUp.paddingScreen} pt={setUp.paddingScreen} flex={1} showsVerticalScrollIndicator={false}>
                <CardCarousel data={bannersList} typeLayout='stack' invert={true} />
                <Box mb={4} mt={4} borderBottomWidth={1} borderBottomColor='#00000009' pb={4}>
                    <HStack justifyContent='space-between' mb={2}>
                        <Heading fontSize={14}>Kategori populer</Heading>
                        <HStack alignItems='center' space={1}><Text fontSize={12} color={setUp.bgPrimary}>More</Text><Icon color={setUp.bgPrimary} name='arrow-forward-outline' size={12} /></HStack>
                    </HStack>
                    <HStack space={4}>
                        {categories.map((item, index) =>
                            <Center key={index} flex={1}>
                                <Image source={{ uri: item.img }} alt={item.name} w={12} h={12} rounded='full' />
                                <Text bold fontSize={10}>{item.name}</Text>
                            </Center>
                        )}
                    </HStack>
                </Box>

                {jajananList.map((item, index) =>
                    <Pressable key={index}>
                        <HStack flexWrap='wrap' space={3} mb={4} pb={4} borderBottomWidth={1} borderBottomColor='#00000009'>
                            <Image source={{ uri: item.img }} rounded='xl' alt={item.name} size='sm' />
                            <Box flex={2} alignSelf='center'>
                                <Heading fontSize={14} textTransform='capitalize' color='blueGray.600'>{item.name}</Heading>
                                <Text fontSize={10} mb={1} mt={-.8} color={setUp.MidGray}><Icon name='navigate-outline' size={10} /> {item.distance} Km</Text>
                                <Text fontSize={12} color={setUp.MidGray}>{item.location}</Text>
                            </Box>
                            <Text fontSize={12} color={setUp.MidGray}><Icon name='star-half-outline' color='#F7D060' /> {item.ratings}</Text>
                        </HStack>
                    </Pressable>
                )}
            </ScrollView>
        </Stack >
    )
}

export default JajananPage