import { AlertDialog, Button, Heading, Text, Center } from 'native-base'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import style from '../style'

const Alert = ({ isOpen, onClose }) => {
    const cancelRef = React.useRef(null);
    return (
        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
            <AlertDialog.Content>
                <AlertDialog.Body>
                    <Center>
                        <Icon name="checkmark-circle-outline" size={65} color='#3AE62A' />
                        <Text bold color={style.primary} mt={5} fontSize={18}>Register successfully !</Text>
                        <Button variant="unstyled" colorScheme={style.secondary} _text={{ color: style.secondary }} onPress={onClose} ref={cancelRef}>
                            close
                        </Button>
                    </Center>
                </AlertDialog.Body>
            </AlertDialog.Content>
        </AlertDialog>
    )
}

export default Alert