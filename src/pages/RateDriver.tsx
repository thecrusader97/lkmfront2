import { Box, Button, Center, HStack, Heading, Image, Pressable, ScrollView, Stack, Text, TextArea, VStack } from 'native-base'
import React, { useState } from 'react'
import setUp from '../setup'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'


function RateDriver() {
    const navigation: any = useNavigation()
    const [other, setOther] = useState(false)
    return (
        <ScrollView bg={setUp.softWhite} showsVerticalScrollIndicator={false}>
            <Image position='absolute' opacity={.35} left={0} top={0} source={require('../../assets/ellipse.png')} alt='background' h='full' w='full' />
            <Stack safeArea p={setUp.paddingScreen}>
                <HStack alignItems='center' space={2} mb={4}>
                    <Button variant='ghost' rounded='full' h={12} w={12} bg={setUp.bgScreen} _pressed={{ bg: setUp.softWhite }} onPress={() => navigation.navigate('BottomTabs')}>
                        <Icon name='chevron-back-outline' size={24} />
                    </Button>
                    <Heading color={setUp.HeavyGray} fontSize={20}>Rate a Driver</Heading>
                </HStack>
                <Center py={4}>
                    <Box borderRadius='full' shadow={8} mb={3}>
                        <Image alt='userimg' source={{ uri: 'https://source.unsplash.com/310x310/?person' }} size='md' borderRadius='full' />
                    </Box>
                    <Heading fontSize={18}>Manshur Driver</Heading>
                    <Text fontSize={12} mb={2} textAlign='center' color={setUp.MidGray}>Masukanmu akan meningkatkan pengalaman menggunakan pelayanan kami</Text>
                    <Box borderWidth={1} flexWrap='wrap-reverse' borderStyle='dashed' borderColor='gray.300' bg='white' p={4} w='full' rounded='xl'>
                        <HStack>
                            <VStack flex={2}>
                                <Text fontSize={10} mb={-2} color={setUp.bgPrimary} bold>#IH966TF</Text>
                                <Text fontSize={20} bold>Bonceng</Text>
                                <Text color={setUp.bgPrimary} fontSize={12}>12-03-2023</Text>
                            </VStack>
                            <Box borderLeftWidth={1} borderStyle='dashed' borderColor='gray.300' pl={4}>
                                <Heading fontSize={16} color={setUp.bgPrimary}>Rp. 12000</Heading>
                            </Box>
                        </HStack>
                    </Box>
                    <HStack space={4} my={8}>
                        <Pressable>
                            <Icon name='star-outline' size={32} color='#F7D060' />
                        </Pressable>
                        <Pressable>
                            <Icon name='star-outline' size={32} color='#F7D060' />
                        </Pressable>
                        <Pressable>
                            <Icon name='star-outline' size={32} color='#F7D060' />
                        </Pressable>
                        <Pressable>
                            <Icon name='star-outline' size={32} color='#F7D060' />
                        </Pressable>
                        <Pressable>
                            <Icon name='star-outline' size={32} color='#F7D060' />
                        </Pressable>
                    </HStack>
                    <Heading fontSize={14} color={setUp.MidGray} mb={4}>Leave a feedback</Heading>
                    <HStack space={2} mb={2}>
                        <Button _pressed={{ bg: 'blueGray.100' }} borderWidth={1} borderColor='white' bg='white' rounded='xl' p={3} flex={1}><Text fontSize={12}>Luar Biasa</Text></Button>
                        <Button _pressed={{ bg: 'blueGray.100' }} borderWidth={1} borderColor='white' bg='white' rounded='xl' p={3} flex={1}><Text fontSize={12}>Bagus</Text></Button>
                    </HStack>
                    <HStack space={2} mb={2}>
                        <Button _pressed={{ bg: 'blueGray.100' }} borderWidth={1} borderColor='white' bg='white' rounded='xl' p={3} flex={1}><Text fontSize={12}>Biasa</Text></Button>
                        <Button _pressed={{ bg: 'blueGray.100' }} borderWidth={1} borderColor={other ? setUp.LigtGray : 'white'} onPress={() => setOther(!other)} bg='white' rounded='xl' p={3} flex={1}><Text fontSize={12}>Lainnya</Text></Button>
                    </HStack>
                    <TextArea isDisabled={!other} mb={4} h='100px' placeholder='Type something' bg={setUp.bgScreen} borderColor={setUp.LigtGray} _focus={{ borderColor: setUp.LigtGray, bg: setUp.bgScreen }} w='full' autoCompleteType='off' borderRadius={setUp.radius} px={4} color={setUp.MidGray} />
                    <LinearGradient colors={[setUp.bgPrimary, setUp.bgSecondary]} start={{ x: 0, y: 1 }} style={{ borderRadius: setUp.radius, elevation: 5, width: '100%' }}>
                        <Button onPress={() => navigation.navigate('BottomTabs')} w='full' bg='transparent' py={3} borderRadius={setUp.radius} _pressed={{ bg: '#ffffff17' }}>
                            Kirim
                        </Button>
                    </LinearGradient>
                </Center>
            </Stack>

        </ScrollView>

    )
}

export default RateDriver