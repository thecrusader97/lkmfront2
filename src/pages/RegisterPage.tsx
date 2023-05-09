import { Box, Button, Center, Checkbox, HStack, Image, Input, Pressable, KeyboardAvoidingView, Text, VStack } from 'native-base'
import React, { useState } from 'react'
import setUp from '../setup'
import Icon from 'react-native-vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

function RegisterPage() {
    const [showPass, setShowPass] = useState(false)
    const [showPass2, setShowPass2] = useState(false)
    const navigation: any = useNavigation()
    return (
        <KeyboardAvoidingView behavior='height' enabled={true} style={{ flex: 1 }}>
            <Box safeArea bg={setUp.bgScreen}>
                <Image source={require('../../assets/ellipse.png')} alt='background' h='full' w='full' resizeMode='cover' />
                <Box position='absolute' left={0} top={0} w='full' h='full' padding={setUp.paddingScreen}>
                    <Center height='40%'>
                        <Image source={require('../../assets/logo.png')} alt='logo' size='1/2' resizeMode='contain' />
                    </Center>
                    <VStack space={3}>
                        <Input type='text' _focus={{ bg: setUp.softWhite, borderColor: setUp.bgPrimary }} variant='outline' borderColor={setUp.LigtGray} borderRadius={setUp.radius} bg={setUp.softWhite} placeholder='Nama' px={4} />
                        <Input type='text' _focus={{ bg: setUp.softWhite, borderColor: setUp.bgPrimary }} variant='outline' borderColor={setUp.LigtGray} borderRadius={setUp.radius} bg={setUp.softWhite} placeholder='No Wa' px={4} />
                        <Input type={showPass ? 'text' : 'password'} _focus={{ bg: setUp.softWhite, borderColor: setUp.bgPrimary }} variant='outline' autoComplete='password' borderColor={setUp.LigtGray} borderRadius={setUp.radius} bg={setUp.softWhite} placeholder='Password' px={4} InputRightElement={
                            <Pressable mr={3} onPress={() => setShowPass(!showPass)}>
                                <Icon name={showPass ? 'eye-off-outline' : 'eye-outline'} size={20} color={setUp.LigtGray} />
                            </Pressable>
                        } />
                        <Input type={showPass2 ? 'text' : 'password'} _focus={{ bg: setUp.softWhite, borderColor: setUp.bgPrimary }} variant='outline' autoComplete='password' borderColor={setUp.LigtGray} borderRadius={setUp.radius} bg={setUp.softWhite} placeholder='Konfirmasi password' px={4} InputRightElement={
                            <Pressable mr={3} onPress={() => setShowPass2(!showPass2)}>
                                <Icon name={showPass2 ? 'eye-off-outline' : 'eye-outline'} size={20} color={setUp.LigtGray} />
                            </Pressable>
                        } />
                        <LinearGradient colors={[setUp.bgPrimary, setUp.bgSecondary]} start={{ x: 0, y: 1 }} style={{ borderRadius: setUp.radius, elevation: 5 }}>
                            <Button bg='transparent' py={3} borderRadius={setUp.radius} _pressed={{ bg: '#ffffff17' }}>
                                Register
                            </Button>
                        </LinearGradient>
                    </VStack>
                    <Box flex={1} flexDirection='row' justifyContent='center' alignItems='flex-end' _text={{ color: setUp.MidGray, fontSize: 13 }}>
                        Already have an account ?
                        <Pressable onPress={() => navigation.navigate('LoginPage')} ml={1}>
                            <Text underline fontSize={13}>Login Now</Text>
                        </Pressable>
                    </Box>
                </Box>
            </Box >
        </KeyboardAvoidingView>
    )
}

export default RegisterPage