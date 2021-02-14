import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

const CustomListComponent = () => {
    return (
        <ListItem>
            <Avatar
                rounded
                source={{
                    uri:
                        'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg',
                }}
            />

            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: 'bold' }}>
                    Signal Chat
                </ListItem.Title>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListComponent

const styles = StyleSheet.create({})
