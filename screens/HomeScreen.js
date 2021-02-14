import React, { Component } from 'react'
import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import CustomListComponent from '../components/CustomListComponent'
import { StatusBar } from 'expo-status-bar'

export class HomeScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <StatusBar style="light" />
                <ScrollView>
                    <CustomListComponent />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default HomeScreen

const styles = StyleSheet.create({})
