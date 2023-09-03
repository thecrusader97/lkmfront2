import { Box, Button, Center, Checkbox, HStack, Image, Input, KeyboardAvoidingView, Pressable, ScrollView, Text, VStack, Heading } from 'native-base'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import style from '../../style'

function LoginScreen() {
  const navigation = useNavigation()
  const [showPass, setShowPass] = useState(false)


  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <Box safeArea bg={style.bg}>
        <Box h='full' padding={5}>
          <Center height='45%'>
            {/* tah image tambahan didieu */}
            {/* <Image source={require('../../../assets/logo.png')} alt='logo' size='1/2' resizeMode='contain' /> */}
            <Heading fontSize={32}>PT. LKM Garut</Heading>
          </Center>
          <VStack space={4}>
            <Input type='text' _focus={{ bg: 'white', borderColor: '#E3454D' }} variant='outline' borderColor='#C5C5C5' borderRadius={15} bg={'#F9F9F9'} placeholder='08xxxxxxxxx' px={4} />
            <Input type={showPass ? 'text' : 'password'} _focus={{ bg: '#F9F9F9', borderColor: '#E3454D' }} variant='outline' autoComplete='password' borderColor='#C5C5C5' borderRadius={15} bg={'#F9F9F9'} placeholder='*********' px={4} InputRightElement={
              <Pressable mr={3} onPress={() => setShowPass(!showPass)}>
                <Icon name={showPass ? 'eye-off-outline' : 'eye-outline'} size={20} color='#C5C5C5' />
              </Pressable>
            } />
            <Button onPress={() => navigation.navigate('BottomTabs')} _text={{ fontWeight: 'bold', textTransform: 'uppercase' }} bg={style.primary} py={3} shadow={10} borderRadius={15} _pressed={{ bg: '#ffffff17' }}>
              Login
            </Button>
          </VStack>
          <Box mt={4} flexDirection='row' justifyContent='center' alignItems='flex-end' _text={{ color: style.primary, fontSize: 13 }}>
            Don’t have an account ?
            <Pressable onPress={() => navigation.navigate('Registration')} ml={1}>
              <Text bold underline color={style.primary} fontSize={13}>Register Now</Text>
            </Pressable>
          </Box>
        </Box>
      </Box >
    </KeyboardAvoidingView>
  )
}

export default LoginScreen