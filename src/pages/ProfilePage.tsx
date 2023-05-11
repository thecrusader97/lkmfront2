import { Box, Button, Center, Divider, HStack, Heading, Image, Pressable, ScrollView, Stack, Text, VStack } from 'native-base'
import React from 'react'
import setUp from '../setup'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'

function ProfilePage() {
    const navigation: any = useNavigation()
    const listAccountSettings = [
        {
            icon: require('../../assets/icons/Speech-Bubble.png'),
            name: 'Pesanan',
            rightArrow: true
        },
        {
            icon: require('../../assets/icons/Alarm.png'),
            name: 'Notifikasi',
            rightArrow: true
        },
        {
            icon: require('../../assets/icons/Bookmark.png'),
            name: 'Riwayat Alamat',
            rightArrow: true
        },
        {
            icon: require('../../assets/icons/Logout.png'),
            name: 'Logout',
            rightArrow: false
        },
    ]
    const listAnotherSettings = [
        {
            icon: require('../../assets/icons/Star-Filled.png'),
            name: 'Rating aplikasi',
            rightArrow: false
        },
        {
            icon: require('../../assets/icons/Sun-Glasses.png'),
            name: 'Versi aplikasi',
            rightArrow: false
        },
        {
            icon: require('../../assets/icons/Padlock.png'),
            name: 'Privacy & policy',
            rightArrow: false
        },
        {
            icon: require('../../assets/icons/Information.png'),
            name: 'Tentang kami',
            rightArrow: false
        },
    ]

    return (
        <ScrollView bg={setUp.softWhite} showsVerticalScrollIndicator={false}>
            <Image position='absolute' opacity={.35} left={0} top={0} source={require('../../assets/ellipse.png')} alt='background' h='full' w='full' />
            <Stack safeArea p={setUp.paddingScreen}>
                <HStack alignItems='center' space={2} mb={4}>
                    <Button variant='ghost' rounded='full' h={12} w={12} bg={setUp.bgScreen} _pressed={{ bg: setUp.softWhite }} onPress={() => navigation.navigate('BottomTabs')}>
                        <Icon name='chevron-back-outline' size={24} />
                    </Button>
                    <Heading color={setUp.HeavyGray} fontSize={20}>Profile</Heading>
                </HStack>
                <Center py={4} mb={4}>
                    <Box borderRadius='full' shadow={8} mb={3}>
                        <Image alt='userimg' source={{ uri: 'https://source.unsplash.com/200x200/?person' }} size='md' borderRadius='full' />
                    </Box>
                    <Heading mb={-1} fontSize={16} textTransform='capitalize' color={setUp.bgPrimary}>Lorem adipisicing</Heading>
                    <Text mb={2} fontSize={12} color={setUp.MidGray}>loremispumdolor@adipisicing.com</Text>
                    <HStack space={2} alignItems='center'>
                        <Image source={require('../../assets/icons/pin.png')} size={2.5} resizeMode='contain' alt='pin' />
                        <Text fontSize={13} color={setUp.bgPrimary}>Banyuresmi, Garut</Text>
                    </HStack>
                </Center>
                <Heading fontSize={15} mb={3} color={setUp.HeavyGray}>Akun</Heading>
                <VStack space={2} mb={4}>
                    {listAccountSettings.map((item: any, index: number) =>
                        <Pressable key={index}>
                            <HStack p={2} space={4} bg={setUp.bgScreen} borderRadius={setUp.radius}>
                                <LinearGradient colors={[setUp.bgPrimary, setUp.bgSecondary]} start={{ x: 0, y: -1 }} style={{ borderRadius: 12, elevation: 5 }}>
                                    <Box w={10} h={10} justifyContent='center' alignItems='center'><Image source={item.icon} alt={item.name} size={4} resizeMode='contain' /></Box>
                                </LinearGradient>
                                <Text flex={2} alignSelf='center' color={setUp.HeavyGray} fontSize={12}>{item.name}</Text>
                                {item.rightArrow ? <Icon name='chevron-forward' color={setUp.HeavyGray} style={{ alignSelf: 'center' }} size={12} /> : null}
                            </HStack>

                        </Pressable>
                    )}
                </VStack>
                <Heading fontSize={15} mb={3} color={setUp.HeavyGray}>Info Lainnya</Heading>
                <VStack space={2} mb={4}>
                    {listAnotherSettings.map((item: any, index: number) =>
                        <Pressable key={index}>
                            <HStack p={2} space={4} bg={setUp.bgScreen} borderRadius={setUp.radius}>
                                <LinearGradient colors={[setUp.bgPrimary, setUp.bgSecondary]} start={{ x: 0, y: -1 }} style={{ borderRadius: 12, elevation: 5 }}>
                                    <Box w={10} h={10} justifyContent='center' alignItems='center'><Image source={item.icon} alt={item.name} size={4} resizeMode='contain' /></Box>
                                </LinearGradient>
                                <Text flex={2} alignSelf='center' color={setUp.HeavyGray} fontSize={12}>{item.name}</Text>
                                {item.rightArrow ? <Icon name='chevron-forward' color={setUp.HeavyGray} style={{ alignSelf: 'center' }} size={12} /> : null}
                            </HStack>
                        </Pressable>
                    )}
                </VStack>
            </Stack>
        </ScrollView>
    )
}

export default ProfilePage