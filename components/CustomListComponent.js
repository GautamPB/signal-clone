import React from 'react'
import { StyleSheet } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

const CustomListComponent = ({ id, chatName, enterChat }) => {
    return (
        <ListItem
            onPress={() => enterChat(id, chatName)}
            key={id}
            bottomDivider
        >
            <Avatar
                rounded
                source={{
                    uri:
                        'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg',
                }}
            />

            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: 'bold' }}>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    ABC
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListComponent

const styles = StyleSheet.create({})
