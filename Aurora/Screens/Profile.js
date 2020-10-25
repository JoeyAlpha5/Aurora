import React, {useState,useEffect} from 'react';
import {View, Text,StatusBar} from 'react-native';

const Profile = ({navigation, route})=>{
    return (
        <>
            <StatusBar  backgroundColor="white" barStyle="dark-content"/>
            <View>
                <Text>Profile</Text>
            </View>
        </>
    )
}

export default Profile