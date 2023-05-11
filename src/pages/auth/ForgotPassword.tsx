import { Box, Button, Center, Heading, Image, Input, KeyboardAvoidingView, Text, VStack } from 'native-base'
import React, { useState } from 'react'
import setUp from '../../setup'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import ForgotPasswordCover from '../../../components/ForgotPasswordCover'


function ForgotPassword() {
    const navigation: any = useNavigation()

    return (
        <KeyboardAvoidingView behavior='height' enabled={true} style={{ flex: 1 }}>
            <Box safeArea bg={setUp.bgScreen} p={setUp.paddingScreen} h='full'>
                <ForgotPasswordCover title='Forgot Password' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nam laboriosam suscipit' />

                <VStack space={4}>
                    <Input type='text' _focus={{ bg: setUp.softWhite, borderColor: setUp.bgPrimary }} variant='outline' borderColor={setUp.LigtGray} borderRadius={setUp.radius} bg={setUp.softWhite} placeholder='08xxxxxxx' px={4} />
                    <LinearGradient colors={[setUp.bgPrimary, setUp.bgSecondary]} start={{ x: 0, y: 1 }} style={{ borderRadius: setUp.radius, elevation: 5 }}>
                        <Button onPress={() => navigation.navigate('OTP')} bg='transparent' py={3} borderRadius={setUp.radius} _pressed={{ bg: '#ffffff17' }}>
                            Kirim
                        </Button>
                    </LinearGradient>
                </VStack>
            </Box>
        </KeyboardAvoidingView>

    )
}

export default ForgotPassword