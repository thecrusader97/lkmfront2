import { Box, Button, Center, Heading, Image, Input, KeyboardAvoidingView, Pressable, Text, VStack } from 'native-base'
import React, { useState } from 'react'
import setUp from '../../setup'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import ForgotPasswordCover from '../../../components/ForgotPasswordCover'
import Icon from 'react-native-vector-icons/Ionicons'


function ResetPassword() {
    const navigation: any = useNavigation()
    const [showPass, setShowPass] = useState(false)
    const [showPass2, setShowPass2] = useState(false)


    return (
        <KeyboardAvoidingView behavior='height' enabled={true} style={{ flex: 1 }}>
            <Box safeArea bg={setUp.bgScreen} p={setUp.paddingScreen} h='full'>
                <ForgotPasswordCover title='Reset Password' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nam laboriosam suscipit' />

                <VStack space={2}>
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
                    <LinearGradient colors={[setUp.bgPrimary, setUp.bgSecondary]} start={{ x: 0, y: 1 }} style={{ borderRadius: setUp.radius, elevation: 5, marginTop: 10 }}>
                        <Button bg='transparent' py={3} borderRadius={setUp.radius} _pressed={{ bg: '#ffffff17' }}>
                            Reset
                        </Button>
                    </LinearGradient>
                </VStack>
            </Box>
        </KeyboardAvoidingView>

    )
}

export default ResetPassword