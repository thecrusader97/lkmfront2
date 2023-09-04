import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Center, Image, Stack, Text } from 'native-base';
import { StyleSheet } from 'react-native'
import HistoryPage from '../src/pages/HistoryPage';
import HomePage from '../src/pages/HomePage';
import ProfilePage from '../src/pages/ProfilePage';
import SchedulePage from '../src/pages/SchedulePage';
import Icon from 'react-native-vector-icons/Ionicons'
import style from '../style';
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
                            <Stack>
                                <Icon name="home-outline" size={24} color={style.primary} />
                                <Text fontSize={10} bold color={style.primary}>Beranda</Text>
                            </Stack>
                            :
                            <Stack>
                                <Icon name="home-outline" size={24} color={style.ligtGray} />
                                <Text fontSize={10} bold color={style.ligtGray}>Beranda</Text>
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
                                <Icon name="document-text-outline" size={24} color={style.primary} />
                                <Text fontSize={10} bold color={style.primary}>Riwayat</Text>
                            </Stack>
                            :
                            <Stack>
                                <Icon name="document-text-outline" size={24} color={style.ligtGray} />
                                <Text fontSize={10} bold color={style.ligtGray}>Riwayat</Text>
                            </Stack>
                        }
                    </Center>
                )
            }}
            />
            <Tab.Screen name="SchedulePage" component={SchedulePage} options={{
                tabBarIcon: ({ focused }) => (
                    <Center>
                        {focused ?
                            <Stack>
                                <Icon name="calendar-outline" size={24} color={style.primary} />
                                <Text fontSize={10} bold color={style.primary}>Jadwal</Text>
                            </Stack>
                            :
                            <Stack>
                                <Icon name="calendar-outline" size={24} color={style.ligtGray} />
                                <Text fontSize={10} bold color={style.ligtGray}>Jadwal</Text>
                            </Stack>
                        }
                    </Center>
                )
            }}
            />
            <Tab.Screen name="ProfilePage" component={ProfilePage} options={{
                tabBarIcon: ({ focused }) => (
                    <Center>
                        {focused ?
                            <Stack>
                                <Icon name="person-outline" size={24} color={style.primary} />
                                <Text fontSize={10} bold color={style.primary}>Profile</Text>
                            </Stack>
                            :
                            <Stack>
                                <Icon name="person-outline" size={24} color={style.ligtGray} />
                                <Text fontSize={10} bold color={style.ligtGray}>Profile</Text>
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