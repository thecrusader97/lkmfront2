import { Avatar, Box, HStack, Heading, Image, Input, Pressable, ScrollView, Stack, Text, VStack } from 'native-base'
import React, { useRef } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import style from '../../style'

function HomePage() {
    const navigation: any = useNavigation()

    return (
        <ScrollView bg={style.bg} showsVerticalScrollIndicator={false}>
            <Stack safeArea>
                <Box w='full' px={6} py={4} position='relative'>
                    <Box mb={6}>
                        <HStack alignItems='center' space={5} mb={4}>
                            <Avatar size='60px' bg="green.500" source={{
                                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            }}>AJ
                            </Avatar>
                            <VStack>
                                <Heading>Jhon Doe</Heading>
                                <Text bold>Staff</Text>
                            </VStack>
                        </HStack>
                    </Box>
                    <VStack space={4}>
                        <HStack space={6}>
                            <Box flex={1} p={4} bg='white' rounded={6} justifyContent='center' alignItems='center'>
                                <Icon name='calendar-outline' size={24} />
                                <Text>Jadwal</Text>
                            </Box>
                            <Box flex={1} p={4} bg='white' rounded={6} justifyContent='center' alignItems='center'>
                                <Icon name='cash-outline' size={24} />
                                <Text>Titip</Text>
                            </Box>
                        </HStack>
                        <HStack space={6}>
                            <Box flex={1} p={4} bg='white' rounded={6} justifyContent='center' alignItems='center'>
                                <Icon name='book-outline' size={24} />
                                <Text>Laporan</Text>
                            </Box>
                            <Box flex={1} p={4} bg='white' rounded={6} justifyContent='center' alignItems='center'>
                                <Icon name='document-text-outline' size={24} />
                                <Text>History</Text>
                            </Box>
                        </HStack>
                        <HStack space={6}>
                            <Box flex={1} p={4} bg='white' rounded={6} justifyContent='center' alignItems='center'>
                                <Icon name='happy-outline' size={24} />
                                <Text>CS</Text>
                            </Box>
                            <Box flex={1} p={4} bg='white' rounded={6} justifyContent='center' alignItems='center'>
                                <Icon name='log-out-outline' size={24} />
                                <Text>Logout</Text>
                            </Box>
                        </HStack>
                    </VStack>
                </Box>
            </Stack>
        </ScrollView >
    )
}

export default HomePage