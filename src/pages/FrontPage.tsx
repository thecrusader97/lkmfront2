import { Box, Button, Center, Flex, HStack, Heading, Image, VStack, Divider, Text } from 'native-base'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../../style'

function FrontPage() {
    const navigation: any = useNavigation()
    setTimeout(() => {
        navigation.navigate('LoginPage')
    }, 1000)
    return (
        <Box flex={1} safeArea bg='white' justifyContent='center' alignItems='center'>
            <Center flex={1}>
                <Image source={require('../../assets/logo.png')} alt='logo' width={300} resizeMode='contain' />
                <Heading color={style.primary} fontSize={32}>PT. LKM Garut</Heading>
            </Center>
            <HStack alignItems='center' justifyContent='center' space={2}>
                <Image source={require('../../assets/ojk.png')} alt='logo' width={100} resizeMode='contain' />
                <Divider orientation="vertical" height={8} />
                <VStack>
                    <Heading color={style.primary} fontSize={14}>Powered By</Heading>
                    <Text color={style.secondary} fontSize={12} mt={-1}>Jager Studio</Text>
                </VStack>
            </HStack>
        </Box>
    )
}

export default FrontPage