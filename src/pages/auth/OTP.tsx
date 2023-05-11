import { Box, Button, Center, HStack, Heading, Image, Input, KeyboardAvoidingView, Pressable, Text, VStack } from 'native-base'
import React, { useState } from 'react'
import setUp from '../../setup'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import ForgotPasswordCover from '../../../components/ForgotPasswordCover'


function OTP() {
    const navigation: any = useNavigation()

    return (
        <KeyboardAvoidingView behavior='height' enabled={true} style={{ flex: 1 }}>
            <Box safeArea bg={setUp.bgScreen} p={setUp.paddingScreen} h='full'>
                <ForgotPasswordCover title='Enter 4 Digits Code' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nam laboriosam suscipit' />

                <VStack space={2}>
                    <HStack space={5}>
                        <Input textAlign='center' fontWeight='bold' flex={1} type='text' _focus={{ bg: setUp.softWhite, borderColor: setUp.bgPrimary }} variant='outline' borderColor={setUp.LigtGray} borderRadius={setUp.radius} bg={setUp.softWhite} placeholder='0' fontSize={20} p={4} />
                        <Input textAlign='center' fontWeight='bold' flex={1} type='text' _focus={{ bg: setUp.softWhite, borderColor: setUp.bgPrimary }} variant='outline' borderColor={setUp.LigtGray} borderRadius={setUp.radius} bg={setUp.softWhite} placeholder='0' fontSize={20} p={4} />
                        <Input textAlign='center' fontWeight='bold' flex={1} type='text' _focus={{ bg: setUp.softWhite, borderColor: setUp.bgPrimary }} variant='outline' borderColor={setUp.LigtGray} borderRadius={setUp.radius} bg={setUp.softWhite} placeholder='0' fontSize={20} p={4} />
                        <Input textAlign='center' fontWeight='bold' flex={1} type='text' _focus={{ bg: setUp.softWhite, borderColor: setUp.bgPrimary }} variant='outline' borderColor={setUp.LigtGray} borderRadius={setUp.radius} bg={setUp.softWhite} placeholder='0' fontSize={20} p={4} />
                    </HStack>
                    <Box alignItems='flex-end'>
                        <HStack space={2}>
                            <Text fontSize={12}>01.00</Text>
                            <Pressable>
                                <Text fontSize={12} color={setUp.LigtGray} underline>Kirim ulang</Text>
                            </Pressable>
                        </HStack>
                    </Box>
                    <LinearGradient colors={[setUp.bgPrimary, setUp.bgSecondary]} start={{ x: 0, y: 1 }} style={{ borderRadius: setUp.radius, elevation: 5 }}>
                        <Button onPress={() => navigation.navigate('ResetPassword')} bg='transparent' py={3} borderRadius={setUp.radius} _pressed={{ bg: '#ffffff17' }}>
                            Kirim
                        </Button>
                    </LinearGradient>
                </VStack>
            </Box>
        </KeyboardAvoidingView>

    )
}

export default OTP