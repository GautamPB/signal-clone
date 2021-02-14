import React, { useState, useEffect } from 'react'
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'
import { auth } from '../firebase'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.replace('Home')
            }
        })

        return unsubscribe
    }, [])

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password).catch((error) =>
            alert(error)
        )
    }

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
                    type="email"
                />
                <Input
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    placeholder="Enter Password"
                    secureTextEntry
                    type="password"
                    onSubmitEditing={signIn}
                />
            </View>

            <Button
                containerStyle={styles.button}
                title="Login"
                onPress={signIn}
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
