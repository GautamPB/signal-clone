import React, { useState, useLayoutEffect } from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Input, Button, Text } from 'react-native-elements'
import { auth } from '../firebase'

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [imageURL, setImageURL] = useState('')

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'ABC',
        })
    }, [navigation])

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                authUser.user.updateProfile({
                    displayName: name,
                    photoURL:
                        imageURL ||
                        'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg',
                })
                navigation.replace('Home')
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text h4 style={{ marginBottom: 50 }}>
                Create a Signal Account
            </Text>

            <View style={styles.inputContainer}>
                <Input
                    placeholder="Full Name"
                    autoFocus
                    type="text"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />

                <Input
                    placeholder="Email"
                    type="text"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                />

                <Input
                    placeholder="Profile Picture URL (optional)"
                    type="text"
                    value={imageURL}
                    onChangeText={(text) => setImageURL(text)}
                    onSubmitEditing={register}
                />
            </View>

            <Button
                containerStyle={styles.button}
                raised
                title="Register"
                onPress={register}
            />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 10,
    },

    button: {
        width: 200,
        marginTop: 10,
    },

    inputContainer: {
        width: 400,
    },
})
