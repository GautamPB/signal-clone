import React, { useState } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar style="light" />
            <Image
                source={{
                    uri:
                        'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png',
                }}
                style={{ width: 200, height: 200 }}
            />

            <View style={styles.inputContainer}>
                <Input
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Enter Email"
                    autoFocus
                    type="Email"
                />
                <Input
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    placeholder="Enter Password"
                    secureTextEntry
                    type="password"
                />
            </View>

            <Button
                containerStyle={styles.button}
                title="Login"
                onPress={() => navigation.navigate('Login')}
            />
            <Button
                containerStyle={styles.button}
                type="outline"
                title="Register"
                onPress={() => navigation.navigate('Register')}
            />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white',
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    },
})
