import { Box, Button, HStack, ScrollView, Stack, Text, VStack } from 'native-base'
import React from 'react'
import style from '../../style'

const SchedulePage = () => {
    const customers = [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john.doe@example.com",
            "type": "gold",
            "phone": "123-456-7890",
            "total": "1000000"
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "email": "jane.smith@example.com",
            "type": "silver",
            "phone": "987-654-3210",
            "total": "200000"
        },
        {
            "id": 3,
            "name": "Bob Johnson",
            "email": "bob.johnson@example.com",
            "type": "platinum",
            "phone": "555-555-5555",
            "total": "300000"
        }
    ]
    return (
        <ScrollView bg={style.bg} showsVerticalScrollIndicator={false}>
            <Stack py={4} px={6}>
                <VStack space={2}>
                    {customers.map((item, index) =>
                        <Box rounded={8} flex={1} bg='white' flexDirection='row' p={4} key={index} justifyContent='space-between'>
                            <Stack>
                                <Text bold>{item.name}</Text>
                                <Text >{item.type}</Text>
                            </Stack>
                            <Stack>
                                <Text>Rp.{item.total}</Text>
                                <Button py={1} px={1} _text={{ fontSize: 10, fontWeight: 'bold' }} bg={style.bg} rounded={5}>Penagihan</Button>
                            </Stack>
                        </Box>
                    )}
                </VStack>
            </Stack>
        </ScrollView >
    )
}

export default SchedulePage