import { Box, Center, Heading, Image, Text } from 'native-base'
import React from 'react'
import setUp from '../src/setup'

const ForgotPasswordCover = ({ title, desc }: any) => {
    return (
        <Box>
            <Center py={10} mt='50px'>
                <Image source={require('../assets/password.png')} alt='image-alt' width={260} height={130} resizeMode='contain' />
            </Center>
            <Heading fontSize={18} mb={2}>{title}</Heading>
            <Text color={setUp.MidGray} fontSize={12} lineHeight={18} mb={2}>{desc}</Text>
        </Box>
    )
}

export default ForgotPasswordCover