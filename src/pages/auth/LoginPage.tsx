import { Box, Button, Center, Checkbox, HStack, Image, Input, KeyboardAvoidingView, Pressable, ScrollView, Text, VStack } from 'native-base'
import React, { useState } from 'react'
import setUp from '../../setup'
import Icon from 'react-native-vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

function LoginPage() {
    const [showPass, setShowPass] = useState(false)
    const navigation: any = useNavigation()
    return (
        <KeyboardAvoidingView behavior='height' enabled={true} style={{ flex: 1 }}>
            <Box safeArea bg={setUp.bgScreen}>
                <Image position='absolute' left={0} top={0} source={require('../../../assets/ellipse.png')} alt='background' h='full' w='full' />
                <Box h='full' padding={setUp.paddingScreen}>
                    <Center height='45%'>
                        <Image source={require('../../../assets/logo.png')} alt='logo' size='1/2' resizeMode='contain' />
                    </Center>
                    <VStack space={4}>
                        <Input type='text' _focus={{ bg: setUp.softWhite, borderColor: setUp.bgPrimary }} variant='outline' borderColor={setUp.LigtGray} borderRadius={setUp.radius} bg={setUp.softWhite} placeholder='08xxxxxxx' px={4} />
                        <Input type={showPass ? 'text' : 'password'} _focus={{ bg: setUp.softWhite, borderColor: setUp.bgPrimary }} variant='outline' autoComplete='password' borderColor={setUp.LigtGray} borderRadius={setUp.radius} bg={setUp.softWhite} placeholder='*********' px={4} InputRightElement={
                            <Pressable mr={3} onPress={() => setShowPass(!showPass)}>
                                <Icon name={showPass ? 'eye-off-outline' : 'eye-outline'} size={20} color={setUp.LigtGray} />
                            </Pressable>
                        } />
                        <HStack justifyContent='space-between'>
                            <HStack space={2}>
                                <Checkbox _checked={{ bg: setUp.bgPrimary, borderColor: setUp.bgPrimary }} borderColor={setUp.bgPrimary} value='' aria-label='remember me' _focus={{ bg: setUp.bgPrimary }} borderRadius={6} />
                                <Text fontSize={12} color={setUp.LigtGray}>Remember me</Text>
                            </HStack>
                            <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
                                <Text fontSize={12} color={setUp.LigtGray} underline>Forgot Password ?</Text>
                            </Pressable>
                        </HStack>
                        <LinearGradient colors={[setUp.bgPrimary, setUp.bgSecondary]} start={{ x: 0, y: 1 }} style={{ borderRadius: setUp.radius, elevation: 5 }}>
                            <Button onPress={() => navigation.navigate('BottomTabs')} bg='transparent' py={3} borderRadius={setUp.radius} _pressed={{ bg: '#ffffff17' }}>
                                Login
                            </Button>
                        </LinearGradient>
                    </VStack>
                    <Box flex={1} flexDirection='row' justifyContent='center' alignItems='flex-end' _text={{ color: setUp.MidGray, fontSize: 13 }}>
                        Don’t have an account ?
                        <Pressable onPress={() => navigation.navigate('RegisterPage')} ml={1}>
                            <Text underline fontSize={13}>Register Now</Text>
                        </Pressable>
                    </Box>
                </Box>
            </Box >
        </KeyboardAvoidingView>
    )
}

export default LoginPage