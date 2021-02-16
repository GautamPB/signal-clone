import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from './screens/LoginScreen'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import AddChat from './screens/AddChat'
import ChatScreen from './screens/ChatScreen'

const Stack = createStackNavigator()
const globalScreenOptions = {
    headerStyle: { backgroundColor: '#1F73B7' },
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white',
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={globalScreenOptions}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Add Chat" component={AddChat} />
                <Stack.Screen name="Chat" component={ChatScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
