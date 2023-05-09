import { Box, Button, Flex, Image, VStack } from 'native-base'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import setUp from '../setup'

function FrontPage() {
    const navigation: any = useNavigation()
    return (
        <Box flex={1} safeArea>
            <Image source={require('../../assets/bg.png')} alt='broken' w='full' height='full' resizeMode='cover' />
            <Box position='absolute' top={0} left={0} w='full' h='full' p={setUp.paddingScreen}>
                <Flex flex={1} justifyContent='center' alignItems='center'>
                    <Image source={require('../../assets/logo.png')} alt='logo' width={200} resizeMode='contain'></Image>
                </Flex>
                <Flex flex={1} justifyContent='flex-end' mb={4}>
                    <VStack space={3}>
                        <Button _pressed={{ bg: '#D9D9D937' }} bg={setUp.whiteOpacity} py={3} rounded='xl' w='full' _text={{ color: '#C6C6C6', textTransform: 'uppercase', letterSpacing: 1, fontSize: 12 }} onPress={() => navigation.navigate('LoginPage')}>Login</Button>
                        <Button _pressed={{ bg: '#D9D9D937' }} bg={setUp.whiteOpacity} py={3} rounded='xl' w='full' _text={{ color: '#C6C6C6', textTransform: 'uppercase', letterSpacing: 1, fontSize: 12 }} onPress={() => navigation.navigate('RegisterPage')}>Register</Button>
                    </VStack>
                </Flex>
            </Box>
        </Box>
    )
}

export default FrontPage