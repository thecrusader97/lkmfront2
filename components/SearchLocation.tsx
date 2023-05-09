import { Image } from 'native-base';
import React, { useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import setUp from '../src/setup';


function SearchLocation(props: any) {

    return (
        <GooglePlacesAutocomplete
            styles={{
                container: { position: 'relative', zIndex: 6 },
                textInput: { color: setUp.MidGray, fontSize: 12, paddingHorizontal: 10, marginBottom: 0, borderRadius: setUp.radius, },
                textInputContainer: { borderWidth: 1, borderColor: setUp.LigtGray, borderRadius: setUp.radius, alignItems: 'center', marginBottom: 10 },
                listView: {
                    maxHeight: 140,
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                },
            }}
            renderLeftButton={() =>
                <Image source={require('../assets/icons/pin.png')} size={4} alt='pin-png' resizeMode='contain' ml={3} />
            }
            debounce={200}
            fetchDetails={true}
            onPress={(data, details = null) => {
                props.handleCallback(details?.geometry.location)
            }} placeholder='Search Location' query={{
                key: 'AIzaSyDJrEmzxXZYEx5VMFTO9WN692JwgX2zj6U',
                language: 'en',
            }} />
    )
}

export default SearchLocation