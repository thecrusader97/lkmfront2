import { Box, Button, Center, Checkbox, HStack, Image, Input, Spinner, KeyboardAvoidingView, Pressable, ScrollView, Text, VStack, Heading } from 'native-base'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import style from '../../../style'
import Alert from '../../../components/Alert'

function RegisterScreen() {
    const [showPass, setShowPass] = useState(false)
    const [showPass2, setShowPass2] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [notif, setNotif] = useState(false);
    const navigation = useNavigation()
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const register = async () => {
        setIsLoading(true)
        try {
        } catch (error) {

        }
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <Box safeArea bg={style.bg}>
                <Box h='full' padding={5}>
                    <Center height='30%'>
                        <Image source={require('../../../assets/logo.png')} alt='logo' size='1/2' resizeMode='contain' />
                        <Heading fontSize={32} color={style.primary}>PT. LKM Garut</Heading>
                    </Center>
                    <VStack space={4}>
                        <Input value={name} onChangeText={setName} type='text' _focus={{ bg: 'white', borderColor: '#E3454D' }} variant='outline' borderColor='#C5C5C5' borderRadius={15} bg={'#F9F9F9'} placeholder='nama' px={4} />
                        <Input value={phone} onChangeText={setPhone} type='text' _focus={{ bg: 'white', borderColor: '#E3454D' }} variant='outline' borderColor='#C5C5C5' borderRadius={15} bg={'#F9F9F9'} placeholder='08xxxxxxxxx' px={4} />
                        <Input value={password} onChangeText={setPassword} type={showPass ? 'text' : 'password'} _focus={{ bg: '#F9F9F9', borderColor: '#E3454D' }} variant='outline' autoComplete='password' borderColor='#C5C5C5' borderRadius={15} bg={'#F9F9F9'} placeholder='password' px={4} InputRightElement={
                            <Pressable mr={3} onPress={() => setShowPass(!showPass)}>
                                <Icon name={showPass ? 'eye-off-outline' : 'eye-outline'} size={20} color='#C5C5C5' />
                            </Pressable>
                        } />
                        <Input value={passwordConfirmation} onChangeText={setPasswordConfirmation} type={showPass2 ? 'text' : 'password'} _focus={{ bg: '#F9F9F9', borderColor: '#E3454D' }} variant='outline' autoComplete='password' borderColor='#C5C5C5' borderRadius={15} bg={'#F9F9F9'} placeholder='confirm password' px={4} InputRightElement={
                            <Pressable mr={3} onPress={() => setShowPass2(!showPass2)}>
                                <Icon name={showPass2 ? 'eye-off-outline' : 'eye-outline'} size={20} color='#C5C5C5' />
                            </Pressable>
                        } />
                        <Button onPress={register} _text={{ fontWeight: 'bold', textTransform: 'uppercase' }} bg={style.primary} py={3} shadow={10} borderRadius={15} _pressed={{ bg: '#ffffff17' }}>
                            {isLoading ? <Spinner color='white' /> : 'Register'}
                        </Button>
                    </VStack>
                    <Box mt={4} flexDirection='row' justifyContent='center' alignItems='flex-end' _text={{ color: style.primary, fontSize: 13 }}>
                        Already have an account ?
                        <Pressable onPress={() => navigation.navigate('LoginPage')} ml={1}>
                            <Text bold underline color={style.primary} fontSize={13}>Login Now</Text>
                        </Pressable>
                    </Box>
                </Box>

                <Alert isOpen={notif} onClose={() => setNotif(false)} />
            </Box >
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen