import { Box, Button, Center, HStack, Heading, Image, ScrollView, Text, VStack } from 'native-base'
import React from 'react'
import setUp from '../setup'
import { LinearGradient } from 'expo-linear-gradient'

function PromoPage() {
    return (
        <ScrollView bg={setUp.softWhite} showsVerticalScrollIndicator={false}>
            <Box safeArea padding={setUp.paddingScreen}>
                <Heading color={setUp.HeavyGray} mb={4}>Promo</Heading>
                {/* <Center py={10} mt='100px'>
                    <Image source={require('../../assets/icons/empty-promo.png')} alt='history' width='180px' h='150px' resizeMode='contain' />
                    <Heading fontSize={16} color={setUp.LigtGray} letterSpacing={1}>Wah Kosong !</Heading>
                    <Text fontSize={13} mb={6} color={setUp.LigtGray}>Belum ada promo apapun nih</Text>
                </Center> */}
                <VStack space={3}>
                    <Box bg={setUp.bgScreen} borderRadius={setUp.radius}>
                        <Image source={require('../../assets/promo1.png')} alt='promo1' rounded='2xl' />
                        <HStack justifyContent='space-between' p={3}>
                            <VStack>
                                <Text fontSize={10} color={setUp.MidGray} mb={-1}>Berlaku :</Text>
                                <Heading fontSize={16} color={setUp.bgPrimary}>s/d 17 Maret</Heading>
                            </VStack>
                            <LinearGradient colors={[setUp.bgPrimary, setUp.bgSecondary]} start={{ x: 0, y: -1 }} style={{ borderRadius: 8, elevation: 5 }} >
                                <Button variant='unstyled' size='sm' _text={{ color: setUp.softWhite }}>Gunakan</Button>
                            </LinearGradient>
                        </HStack>
                    </Box>
                    <Box bg={setUp.bgScreen} borderRadius={setUp.radius}>
                        <Image source={require('../../assets/promo2.png')} alt='promo1' rounded='2xl' />
                        <HStack justifyContent='space-between' p={3}>
                            <VStack>
                                <Text fontSize={10} color={setUp.MidGray} mb={-1}>Berlaku :</Text>
                                <Heading fontSize={16} color={setUp.bgPrimary}>s/d 30 Mei</Heading>
                            </VStack>
                            <LinearGradient colors={[setUp.bgPrimary, setUp.bgSecondary]} start={{ x: 0, y: -1 }} style={{ borderRadius: 8, elevation: 5 }} >
                                <Button variant='unstyled' size='sm' _text={{ color: setUp.softWhite }}>Gunakan</Button>
                            </LinearGradient>
                        </HStack>
                    </Box>
                </VStack>
            </Box>
        </ScrollView>
    )
}

export default PromoPage