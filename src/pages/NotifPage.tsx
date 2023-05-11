import { Box, Button, Center, HStack, Heading, Image, ScrollView, Stack, Text, VStack } from 'native-base'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import setUp from '../setup'

function NotifPage() {
    const listChats = [
        {
            img: 'https://source.unsplash.com/200x200/?person',
            name: 'ipsum lorem',
            message: 'amet consectetur adipisicing elit.',
            isNew: true,
            unread: 3,
            time: '20.15'
        },
        {
            img: 'https://source.unsplash.com/201x201/?person',
            name: 'doolor amet',
            message: 'Repellat dolore non accusamus',
            isNew: true,
            unread: 2,
            time: '10.32'
        },
        {
            img: 'https://source.unsplash.com/202x202/?person',
            name: 'tempore dolorum',
            message: 'voluptate excepturi veritatis iste rerum molestias!',
            unread: 0,
            isNew: false,
            time: '07.10'
        },
    ]

    return (
        <ScrollView bg={setUp.softWhite}>
            <Stack safeArea p={setUp.paddingScreen}>
                <HStack justifyContent='space-between' alignItems='center' mb={2}>
                    <Heading color={setUp.HeavyGray} fontSize={20}>Notifikasi</Heading>
                    <Button _pressed={{ bg: setUp.bgScreen }} h={12} w={12} variant='ghost' borderRadius='full'>
                        <Icon name='options-outline' size={24} color={setUp.HeavyGray} />
                    </Button>
                </HStack>
                {/* <Center py={10} mt='100px'>
                    <Image source={require('../../assets/icons/empty-notif.png')} alt='history' width='180px' h='150px' resizeMode='contain' />
                    <Heading fontSize={16} color={setUp.LigtGray} letterSpacing={1}>Wah Kosong !</Heading>
                    <Text fontSize={13} mb={6} color={setUp.LigtGray}>Kamu belum dapat pesan dari siapa apapun nih</Text>
                </Center> */}
                <VStack space={3}>
                    {listChats.map((item, index) =>
                        <Box key={index} borderRadius={setUp.radius} bg={setUp.bgScreen} p={4}>
                            <HStack space={3} w='full'>
                                <Box position='relative'>
                                    <Image source={{ uri: item.img }} alt={item.name} rounded='full' size={10} />
                                    {item.isNew ?
                                        <Box w={3} h={3} rounded='full' bg={setUp.bgPrimary} position='absolute' right={0} borderWidth={2} borderColor='white'></Box>
                                        : null}
                                </Box>
                                <Box flex={2}>
                                    <Heading fontSize={14} color={setUp.HeavyGray} isTruncated>{item.name}</Heading>
                                    <Text fontSize={10} color={setUp.MidGray} isTruncated>{item.message}</Text>
                                </Box>
                                <Box alignItems='flex-end'>
                                    <Text fontSize={11} mb={1} color={setUp.bgPrimary}>{item.time}</Text>
                                    {item.isNew ?
                                        <Box w={5} h={5} rounded='full' bg={setUp.bgCard} justifyContent='center' alignItems='center'>
                                            <Text fontSize={9} bold color={setUp.bgPrimary}>{item.unread}</Text>
                                        </Box>
                                        : null}
                                </Box>
                            </HStack>
                        </Box>
                    )}
                </VStack>
            </Stack>
        </ScrollView>
    )
}

export default NotifPage