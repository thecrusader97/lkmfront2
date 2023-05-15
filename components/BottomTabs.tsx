import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HistoryPage from '../src/pages/HistoryPage';
import HomePage from '../src/pages/HomePage';
import { Center, Image, Stack, Text } from 'native-base';
import { StyleSheet } from 'react-native'
import setUp from '../src/setup';
import NotifPage from '../src/pages/NotifPage';
import PromoPage from '../src/pages/PromoPage';
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
    tab: {
        elevation: 2,
        backgroundColor: 'white',
        height: 60,
        shadowOffset: { width: -2, height: -5 },
        shadowOpacity: .7,
        shadowColor: '#000000'
    }
})

function BottomTabs() {
    return (
        <Tab.Navigator backBehavior='initialRoute' initialRouteName='MainPage'
            screenOptions={{ tabBarShowLabel: false, tabBarStyle: { ...styles.tab }, headerShown: false, tabBarHideOnKeyboard: true, }}>
            <Tab.Screen name="MainPage" component={HomePage} options={{
                tabBarIcon: ({ focused }) => (
                    <Center>
                        {focused ?
                            <Stack flex={1} flexDirection='column' justifyItems='center' justifyContent='center'>
                                <Image source={require('../assets/bottom-icons/HomeActive.png')} alt='home' mx='auto' w='20px' h='20px' resizeMode='contain' />
                                <Text fontSize={10} bold color={setUp.bgPrimary}>Beranda</Text>
                            </Stack>
                            :
                            <Stack>
                                <Image source={require('../assets/bottom-icons/Home.png')} alt='home' mx='auto' w='20px' h='20px' resizeMode='contain' />
                                <Text fontSize={10} bold color={setUp.LigtGray}>Beranda</Text>
                            </Stack>
                        }
                    </Center>
                )
            }} />
            <Tab.Screen name="HistoryPage" component={HistoryPage} options={{
                tabBarIcon: ({ focused }) => (
                    <Center>
                        {focused ?
                            <Stack>
                                <Image source={require('../assets/bottom-icons/HistoryActive.png')} alt='history' mx='auto' w='20px' h='20px' resizeMode='contain' />
                                <Text fontSize={10} bold color={setUp.bgPrimary}>Riwayat</Text>
                            </Stack>
                            :
                            <Stack>
                                <Image source={require('../assets/bottom-icons/History.png')} alt='history' mx='auto' w='20px' h='20px' resizeMode='contain' />
                                <Text fontSize={10} bold color={setUp.LigtGray}>Riwayat</Text>
                            </Stack>
                        }
                    </Center>
                )
            }}
            />
            <Tab.Screen name="NotifPage" component={NotifPage} options={{
                tabBarIcon: ({ focused }) => (
                    <Center>
                        {focused ?
                            <Stack>
                                <Image source={require('../assets/bottom-icons/BellActive.png')} alt='bell' mx='auto' w='20px' h='20px' resizeMode='contain' />
                                <Text fontSize={10} bold color={setUp.bgPrimary}>Notif</Text>
                            </Stack>
                            :
                            <Stack>
                                <Image source={require('../assets/bottom-icons/Bell.png')} alt='bell' mx='auto' w='20px' h='20px' resizeMode='contain' />
                                <Text fontSize={10} bold color={setUp.LigtGray}>Notif</Text>
                            </Stack>
                        }
                    </Center>
                )
            }}
            />
            <Tab.Screen name="PromoPage" component={PromoPage} options={{
                tabBarIcon: ({ focused }) => (
                    <Center>
                        {focused ?
                            <Stack>
                                <Image source={require('../assets/bottom-icons/PromoActive.png')} alt='Promo' mx='auto' w='20px' h='20px' resizeMode='contain' />
                                <Text fontSize={10} bold color={setUp.bgPrimary}>Promo</Text>
                            </Stack>
                            :
                            <Stack>
                                <Image source={require('../assets/bottom-icons/Promo.png')} alt='Promo' mx='auto' w='20px' h='20px' resizeMode='contain' />
                                <Text fontSize={10} bold color={setUp.LigtGray}>Promo</Text>
                            </Stack>
                        }
                    </Center>
                )
            }}
            />
        </Tab.Navigator>
    );
}
export default BottomTabs