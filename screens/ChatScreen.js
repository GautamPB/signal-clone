import React, { useLayoutEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableWithoutFeedback,
} from 'react-native'
import { Avatar } from 'react-native-elements'
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView } from 'react-native'
import { Platform } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Keyboard } from 'react-native'

const ChatScreen = ({ navigation, route }) => {
    const [input, setInput] = useState('')

    const sendMessage = () => {
        Keyboard.dismiss()
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Chat',
            headerTitleAlign: 'left',
            headerTitle: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Avatar
                        rounded
                        source={{
                            uri:
                                'https://www.computerhope.com/jargon/g/guest-user.jpg',
                        }}
                    />
                    <Text
                        style={{
                            color: 'white',
                            marginLeft: 10,
                            fontWeight: '700',
                        }}
                    >
                        {route.params.chatName}
                    </Text>
                </View>
            ),
            headerLeft: () => (
                <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={navigation.goBack}
                >
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
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
                    <TouchableOpacity>
                        <FontAwesome
                            name="video-camera"
                            size={24}
                            color="white"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="call" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            ),
        })
    }, [navigation])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar style="light" />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
                keyboardVerticalOffset={90}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <>
                        <ScrollView>{/* chat goes here */}</ScrollView>
                        <View style={styles.footer}>
                            <TextInput
                                value={input}
                                onChangeText={(text) => setInput(text)}
                                placeholder="Signal message"
                                style={styles.textInput}
                            />
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={sendMessage}
                            >
                                <Ionicons
                                    name="send"
                                    size={24}
                                    color="#2b68e6"
                                />
                            </TouchableOpacity>
                        </View>
                    </>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 15,
    },

    textInput: {
        bottom: 0,
        height: 40,
        flex: 1,
        marginRight: 15,
        borderColor: 'transparent',
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#ececec',
        borderRadius: 30,
    },
})
