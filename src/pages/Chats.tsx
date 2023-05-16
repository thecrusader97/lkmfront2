import { Box, Button, HStack, Heading, Image, Input, ScrollView, Stack, Text, VStack } from 'native-base'
import React from 'react'
import setUp from '../setup'
import Icon from 'react-native-vector-icons/Ionicons'
import { useState } from 'react'

function Chats({ navigation }: any) {
    const [online, setOnline] = useState(true)
    return (
        <Stack safeArea flex={1}>
            <Box bg='white' p={setUp.paddingScreen}>
                <HStack space={2} alignItems='center'>
                    <Button variant='ghost' rounded='full' p={1} bg={setUp.bgScreen} _pressed={{ bg: setUp.softWhite }} onPress={() => navigation.navigate('NotifPage')}>
                        <Icon name='chevron-back-outline' size={14} />
                    </Button>
                    <Image source={{ uri: 'https://source.unsplash.com/200x200/?person' }} alt='user' w={8} h={8} rounded='full' />
                    <VStack alignSelf='center' flex={2}>
                        <Heading fontSize={14} isTruncated>lorem ipsum</Heading>
                        {online ?
                            <HStack alignItems='center'>
                                <Box w='8px' h='8px' bg='green.400' rounded='full' />
                                <Text fontSize={10} color='blueGray.500'>  Online</Text>
                            </HStack>
                            : <Text fontSize={10} color='blueGray.500'>1 jam yang lalu</Text>
                        }
                    </VStack>
                    <Button variant='ghost' rounded='full' p={1} bg={setUp.bgScreen} _pressed={{ bg: setUp.softWhite }}>
                        <Icon name='ellipsis-vertical' size={20} />
                    </Button>
                </HStack>
            </Box>
            <ScrollView flex={1} bg={setUp.softWhite}>
                <Box px={setUp.paddingScreen} py={2} alignItems='center'>
                    <VStack alignSelf='flex-end'>
                        <Box maxWidth='3/4' bg={setUp.bgPrimary} py={2} px={4} rounded='xl'>
                            <Text fontSize={12} textAlign='right' color='gray.100'>hello there !</Text>
                        </Box>
                        <HStack justifyContent='flex-end' alignItems='center' space={1}>
                            <Text fontSize={10} color={setUp.MidGray}>14.50</Text>
                            <Icon name='checkmark-done-outline' size={12} color='#0B40FF' />
                        </HStack>
                    </VStack>
                    <VStack alignSelf='flex-start'>
                        <Box maxWidth='3/4' bg='#FFECEC' py={2} px={4} rounded='xl'>
                            <Text fontSize={12} textAlign='left' color='gray.700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis iure mollitia omnis dolorem enim. Accusamus eum, harum asperiores saepe eligendi possimus ipsum quibusdam commodi et assumenda atque. Hic, quos cupiditate. !</Text>
                        </Box>
                        <HStack justifyContent='flex-start' alignItems='center' space={1}>
                            <Icon name='checkmark-done-outline' size={12} color='#0B40FF' />
                            <Text fontSize={10} color={setUp.MidGray}>15.10</Text>
                        </HStack>
                    </VStack>
                </Box>
            </ScrollView>
            <Box bg='white' px={setUp.paddingScreen} py={3}>
                <HStack space={2}>
                    <Input px={1} h='43px' variant='outline' borderColor='#BFBFBF' flex={2} borderRadius={setUp.radius} _focus={{ borderColor: '#BFBFBF', bg: 'white' }} leftElement={
                        <Button rounded='full' variant='unstyled' _pressed={{ bg: '#E4E4E4' }}>
                            <Icon name='happy-outline' size={18} color={setUp.MidGray} />
                        </Button>
                    } rightElement={
                        <Button rounded='full' variant='unstyled' _pressed={{ bg: '#E4E4E4' }}>
                            <Icon name='attach-outline' size={18} color={setUp.MidGray} />
                        </Button>
                    } />
                    <Button bg={setUp.bgPrimary} rounded='full' _pressed={{ bg: '#FB6064' }}>
                        <Icon name='send' size={18} color='white' />
                    </Button>
                </HStack>
            </Box>
        </Stack>
    )
}

export default Chats