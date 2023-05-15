import { Box, Text, Button, Heading, Pressable, Input, Image, KeyboardAvoidingView, HStack, VStack, FlatList, ScrollView, Skeleton } from 'native-base'
import React, { useEffect, useRef, useState } from 'react'
import MapView, { Callout, Marker, Polyline } from 'react-native-maps'
import Icon from 'react-native-vector-icons/Ionicons'
import setUp from '../setup'
import { useNavigation } from '@react-navigation/native'
import * as Location from 'expo-location'
import SearchLocation from '../../components/SearchLocation'
import { Dimensions } from 'react-native'
import SetLocation from '../../components/SetLocation'
import MapViewDirections from 'react-native-maps-directions'
import SetByMaps from '../../components/SetByMaps'
import TravelHistory from '../../components/TravelHistory'

function BoncengPage() {
    const navigation: any = useNavigation()
    let mapView: any = useRef()
    const initialRegion = {
        latitude: -7.2304669,
        longitude: 107.8724554,
        latitudeDelta: 0.091,
        longitudeDelta: 0.041,
    }
    const { width, height } = Dimensions.get("window");
    const history = ['bangladesh', 'papua newguinie', 'afrika', 'nigeria']
    const [currentLocation, setCurrentLocation] = useState<any>({})
    const [address, setAddress] = useState<any>({})
    const [destination, setDestination] = useState(false)
    const [initialMaps, setInitialMaps] = useState(true)
    const [searchByMaps, setSearchByMaps] = useState(false)
    const [skeletonLoader, setSkeletonLoader] = useState(false)

    useEffect(() => {
        getPermissions()
    }, [])

    const coordinates = [
        currentLocation,
        address
    ];

    const getPermissions = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            alert('Please grant location permission');
            return
        }

        let currentLocationUser = await Location.getCurrentPositionAsync({});
        setCurrentLocation({
            latitude: currentLocationUser.coords.latitude,
            longitude: currentLocationUser.coords.longitude,
            latitudeDelta: 0.091,
            longitudeDelta: 0.041,
        });
    }

    function callbackDataFromChild(location: any) {
        setSkeletonLoader(true)
        setInitialMaps(false)
        setDestination(false)
        setTimeout(() => {
            setSkeletonLoader(false)
            setDestination(true)
        }, 2500)
        setAddress({
            latitude: location.lat,
            longitude: location.lng
        })
        mapView.current.fitToCoordinates(coordinates, {
            edgePadding: {
                right: (width / 20),
                bottom: (height / 20),
                left: (width / 20),
                top: (height / 20),
            },
            animated: true
        });

    }

    function mapChoose() {
        setSkeletonLoader(true)
        setTimeout(() => {
            setSearchByMaps(true)
            setSkeletonLoader(false)
        }, 2500)
    }

    function cancelLocation() {
        setSkeletonLoader(true)
        setDestination(false)
        setSearchByMaps(false)
        setTimeout(() => {
            setSkeletonLoader(false)
            setInitialMaps(true)
        }, 2500)
    }


    return (
        <KeyboardAvoidingView behavior='height' enabled={true}>
            <Box safeArea w='full' h='full'>
                <MapView ref={mapView} style={{ width: '100%', height: '70%' }} initialRegion={initialRegion} provider='google'>
                    <Marker coordinate={initialRegion} title='Kamu'>
                        <Image source={require('../../assets/icons/pin-marker.png')} alt='pin-marker' resizeMode='contain' size={10} />
                    </Marker>
                    {Object.keys(address).length ?
                        <Marker coordinate={address} title='Tujuan'>
                            <Image source={require('../../assets/icons/pin-dest.png')} alt='pin-dest' resizeMode='contain' size={10} />
                        </Marker>
                        : null}
                    {/* <MapViewDirections origin={initialRegion}
                        destination={address}
                        apikey='AIzaSyDJrEmzxXZYEx5VMFTO9WN692JwgX2zj6U' /> */}
                </MapView>
                <Button position='absolute' left={5} top={5} variant='ghost' rounded='full' h={12} w={12} bg={setUp.bgScreen} _pressed={{ bg: setUp.softWhite }} onPress={() => navigation.navigate('BottomTabs')}>
                    <Icon name='chevron-back-outline' size={24} />
                </Button>
                <Box position='absolute' bottom={0} left={0} py={8} p={setUp.paddingScreen} bg={setUp.bgScreen} w='full' minH='40%' roundedTopLeft='2xl' roundedTopRight='2xl'>
                    <Box w={12} h={1.5} bg='#E2E2E2' rounded='full' position='absolute' left='50%' top={3} />
                    <Heading fontSize={14} mb={3} color={setUp.bgPrimary}>Mau dibonceng kemana hari ini ?</Heading>

                    {!searchByMaps ?
                        <SearchLocation handleCallback={callbackDataFromChild} />
                        : null}

                    {!searchByMaps && !destination && !skeletonLoader ?
                        <Button onPress={mapChoose} mb={4} variant='ghost' bg={setUp.bgCard} rounded='2xl' justifyContent='flex-start'>
                            <HStack space={2} py={3}>
                                <Image source={require('../../assets/icons/vektorline.png')} size={8} alt='vektorline' resizeMode='contain' ml={3} />
                                <Text alignSelf='center' color={setUp.bgSecondary}>Cari lewat peta ?</Text>
                            </HStack>
                        </Button>
                        : null}

                    {skeletonLoader ?
                        <VStack space={3} my={2}>
                            <Skeleton rounded='full' h={5} w='full' />
                            <Skeleton rounded='full' h={5} w='full' />
                            <Skeleton rounded='full' h={5} w='full' />
                        </VStack>
                        : null}
                    {destination ? <SetLocation cancelLocation={cancelLocation} originLocation={initialRegion} destination={address} /> : null}
                    {searchByMaps ? <SetByMaps handleByMaps={() => setSearchByMaps(true)} cancelLocation={cancelLocation} /> : null}
                    {!destination && !searchByMaps && !skeletonLoader ? <TravelHistory /> : null}

                </Box>
            </Box>
        </KeyboardAvoidingView >
    )
}

export default BoncengPage