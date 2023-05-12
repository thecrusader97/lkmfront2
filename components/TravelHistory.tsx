import { Box, FlatList, HStack, Pressable, Text } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'
import setUp from '../src/setup'

function TravelHistory() {
    const history = ['bangladesh', 'papua newguinie', 'afrika', 'nigeria']

    return (
        <Box>
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
    )
}

export default TravelHistory