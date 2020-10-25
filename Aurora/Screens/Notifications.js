import React, {useState,useEffect} from 'react';
import {View, Text,StatusBar} from 'react-native';

const Notifications = ({navigation, route})=>{
    return (
        <>
            <StatusBar  backgroundColor="white" barStyle="dark-content"/>
            <View>
                <Text>Notifications</Text>
            </View>
        </>
    )
}

export default Notifications