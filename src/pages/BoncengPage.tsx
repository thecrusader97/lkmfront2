import { Box, Text, Button, Heading, Pressable, Input, Image, KeyboardAvoidingView, HStack, VStack, FlatList, ScrollView } from 'native-base'
import React, { useEffect, useState } from 'react'
import MapView, { Callout, Marker } from 'react-native-maps'
import Icon from 'react-native-vector-icons/Ionicons'
import setUp from '../setup'
import { useNavigation } from '@react-navigation/native'
import * as Location from 'expo-location'
import SearchLocation from '../../components/SearchLocation'
import { Dimensions } from 'react-native'


function BoncengPage() {
    const navigation: any = useNavigation()
    let mapView: any = null
    const initialRegion = {
        latitude: -7.2304669,
        longitude: 107.8724554,
        latitudeDelta: 0.091,
        longitudeDelta: 0.041,
    }
    const { width, height } = Dimensions.get("window");
    const history = ['bangladesh', 'papua newguinie', 'afrika', 'nigeria']
    const [address, setAddress] = useState<any>({
        latitude: -7.2304669,
        longitude: 107.8724554,
        latitudeDelta: 0.091,
        longitudeDelta: 0.041,
    })

    useEffect(() => {
        getPermissions()
    }, [])

    const getPermissions = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            console.log('Please grant location permission');
            return
        }

        let currentLocation = await Location.getCurrentPositionAsync({});
    }

    function callbackDataFromChild(location: any) {
        setAddress({
            latitude: location.lat,
            longitude: location.lng
        })
        mapView?.fitToCoordinates(address, {
            edgePadding: {
                right: (width / 20),
                bottom: (height / 20),
                left: (width / 20),
                top: (height / 20),
            }
        });

    }


    return (
        <KeyboardAvoidingView behavior='height' enabled={true}>
            <Box safeArea w='full' h='full'>
                <MapView ref={(c) => mapView = c} style={{ width: '100%', height: '70%' }} region={address} initialRegion={initialRegion} provider='google'>
                    <Marker pinColor={setUp.bgPrimary} coordinate={initialRegion} />
                </MapView>
                <Button position='absolute' left={5} top={5} variant='ghost' rounded='full' h={12} w={12} bg={setUp.bgScreen} _pressed={{ bg: setUp.softWhite }} onPress={() => navigation.navigate('BottomTabs')}>
                    <Icon name='chevron-back-outline' size={24} />
                </Button>
                <Box position='absolute' bottom={0} left={0} py={8} p={setUp.paddingScreen} bg={setUp.bgScreen} w='full' minH='40%' roundedTopLeft='2xl' roundedTopRight='2xl'>
                    <Heading fontSize={14} mb={3} color={setUp.bgPrimary}>Mau dibonceng kemana hari ini ?</Heading>
                    {/* <Input value={address} onChangeText={setAddress} placeholder='cari lokasi tujuan' mb={4} borderRadius={setUp.radius} bg={setUp.bgScreen} _focus={{ bg: setUp.bgScreen }} px={3} color={setUp.MidGray} leftElement={
                        <Image source={require('../../assets/icons/pin.png')} size={4} alt='pin-png' resizeMode='contain' ml={3} />
                    } /> */}
                    <SearchLocation handleCallback={callbackDataFromChild} />
                    <Button mb={4} variant='ghost' bg={setUp.bgCard} rounded='2xl' justifyContent='flex-start'>
                        <HStack space={2} py={3}>
                            <Image source={require('../../assets/icons/vektorline.png')} size={8} alt='vektorline' resizeMode='contain' ml={3} />
                            <Text alignSelf='center' color={setUp.bgSecondary}>Cari lewat peta ?</Text>
                        </HStack>
                    </Button>
                    <Text fontSize={12} mb={3} color={setUp.HeavyGray}>Riwayat perjalanan</Text>
                    <FlatList maxH={12} nestedScrollEnabled showsVerticalScrollIndicator={false} data={history}
                        renderItem={({ item }) =>
                            <Pressable style={{ marginBottom: 2, paddingVertical: 3 }}>
                                <HStack alignItems='center' space={2}>
                                    <Icon name='time-outline' size={12} color={setUp.MidGray} /><Text fontSize={12} color={setUp.MidGray}>{item}</Text>
                                </HStack>
                            </Pressable>
                        }
                    />
                </Box>
            </Box>
        </KeyboardAvoidingView >
    )
}

export default BoncengPage