import React, { useLayoutEffect } from 'react'
import {
    Text,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    TouchableOpacity,
} from 'react-native'
import CustomListComponent from '../components/CustomListComponent'
import { Avatar } from 'react-native-elements'
import { auth, db } from '../firebase'
import { AntDesign, SimpleLineIcons, MaterialIcons } from '@expo/vector-icons'

const HomeScreen = ({ navigation }) => {
    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace('Login')
        })
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Signal',
            headerStyle: { backgroundColor: 'white' },
            headerTitleStyle: { color: 'black' },
            headerTintColor: 'black',
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Avatar
                            rounded
                            source={{
                                uri:
                                    'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png',
                            }}
                        />
                    </TouchableOpacity>
                </View>
            ),

            headerRight: () => (
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: 80,
                        marginRight: 20,
                    }}
                >
                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign name="camerao" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                        <SimpleLineIcons
                            name="pencil"
                            size={24}
                            color="black"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                        <MaterialIcons
                            name="logout"
                            size={24}
                            color="black"
                            onPress={signOutUser}
                        />
                    </TouchableOpacity>
                </View>
            ),
        })
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListComponent />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
