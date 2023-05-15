import { Avatar, Box, HStack, Heading, Image, Input, Pressable, ScrollView, Stack, Text, VStack } from 'native-base'
import React, { useRef } from 'react'
import setUp from '../setup'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import CardCarousel from '../../components/CardCarousel'

function HomePage() {
    const navigation: any = useNavigation()
    const listFeatures = [
        {
            name: 'Jajanan',
            url: 'JajananPage',
            active: true,
            img: require('../../assets/icons/FoodBaricon.png')
        },
        {
            name: 'Bonceng',
            url: 'BoncengPage',
            active: true,
            img: require('../../assets/icons/Scootericon.png')
        },
        {
            name: 'Titip',
            url: 'TitipPage',
            active: true,
            img: require('../../assets/icons/Shippedicon.png')
        },
        {
            name: 'Soon',
            url: '#',
            active: false,
            img: require('../../assets/icons/Futureicon.png')
        },
    ]

    const articles = [
        {
            title: 'lorem ipsum',
            img: 'https://source.unsplash.com/1200x600/?landscape',
            description: 'odit quisquam quis hic laudantium tenetur doloribus temporibus voluptatem. Quos ipsa minus eius in nulla distinctio rerum ea.'
        },
        {
            title: 'Conectecture',
            img: 'https://source.unsplash.com/1201x601/?landscape',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut,.'
        },
        {
            title: 'Dolor sit amet',
            img: 'https://source.unsplash.com/1202x602/?landscape',
            description: 'Saepe aut, commodi quo, odit quisquam quis hic laudantium tenetur doloribus temporibus voluptatem.'
        },
    ]
    const bannersList = [require('../../assets/banner2.png'), require('../../assets/banner.png')]

    return (
        <ScrollView bg={setUp.softWhite} showsVerticalScrollIndicator={false}>
            <Stack safeArea>
                <Box w='full' position='relative'>
                    <Image position='absolute' top={0} left={0} zIndex={-1} source={require('../../assets/banner-bg.png')} alt='banner-bg' width='full' h='full' resizeMode='cover' />
                    <Box p={setUp.paddingScreen}>
                        <HStack justifyContent='space-between' alignItems='center' mb={4}>
                            <Input InputLeftElement={<Icon name='search-outline' style={{ marginLeft: 10 }} size={16} color={setUp.MidGray} />} _focus={{ bg: 'white' }} color={setUp.MidGray} placeholder='Cari sesuatu disini' variant='outline' bg='white' py='5px' pl={2} w='84%' borderRadius={setUp.radius} />
                            <Pressable onPress={() => navigation.navigate('ProfilePage')}>
                                <Avatar size='40px' bg="green.500" source={{
                                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                }}>AJ
                                </Avatar>
                            </Pressable>
                        </HStack>
                        <CardCarousel data={bannersList} />
                    </Box>
                </Box>

                <Box p={setUp.paddingScreen}>
                    <HStack justifyContent='space-between' mb={5}>
                        {listFeatures.map((item: any, index) =>
                            <Box key={index}>
                                <Pressable onPress={() => item.active ? navigation.navigate(item.url) : null} _pressed={{ bg: setUp.softWhite }} bg={setUp.bgCard} w='60px' h='60px' borderRadius={setUp.radius} flex={1} justifyContent='center' alignItems='center'>
                                    <Image source={item.img} alt={item.name} />
                                </Pressable>
                                <Text textAlign='center' color={setUp.MidGray} fontSize={12}>{item.name}</Text>
                            </Box>
                        )}
                    </HStack>
                    <Pressable _pressed={{ bg: setUp.softWhite }} mb={5}>
                        <Box flex={1} flexDirection='row' borderWidth={1} justifyContent='space-between' alignItems='center' borderColor={setUp.LigtGray} borderRadius={setUp.radius} p={3}>
                            <Text fontSize={12} color={setUp.MidGray}>Ada voucher yang belum kepakai nih!</Text>
                            <Icon name='chevron-forward-outline' size={14} color={setUp.MidGray} />
                        </Box>
                    </Pressable>
                    <HStack mb={2} justifyContent='space-between' alignItems='center'>
                        <HStack space={1} alignItems='center'>
                            <Icon name='bonfire-outline' size={18} color={setUp.bgPrimary} />
                            <Heading fontSize={16} color={setUp.HeavyRed}>Jajap Pedia</Heading>
                        </HStack>
                        <Text fontSize={13} color={setUp.bgPrimary}>More <Icon name='arrow-forward-outline' size={13} /></Text>
                    </HStack>
                    <VStack flex={1} flexDirection='column' space={2}>
                        {articles.map((item, index) =>
                            <Box key={index} borderRadius={setUp.radius} bg={setUp.bgScreen}>
                                <Image source={{ uri: item.img }} resizeMode='cover' alt='broken article' w='full' h={20} borderRadius={setUp.radius} />
                                <Stack p={2}>
                                    <Heading fontSize={14} color={setUp.HeavyGray}>{item.title}</Heading>
                                    <Text mt={-.5} isTruncated fontSize={12} color={setUp.MidGray}>
                                        {item.description}
                                    </Text>
                                </Stack>
                            </Box>
                        )}
                    </VStack>
                </Box>
            </Stack>
        </ScrollView>
    )
}

export default HomePage