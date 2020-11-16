import React, {useState,useEffect} from 'react';
import {View, Text,StatusBar} from 'react-native';

const Notifications = ({navigation, route})=>{
    return (
        <>
            <StatusBar  backgroundColor="white" barStyle="dark-content"/>
            <View style={{flex:1,alignItems:'center'}}>

                <View style={{width:'90%',marginTop:10,alignItems:'flex-start',alignContent:'flex-start'}}>
                    <Text style={{fontSize:25,fontWeight:'bold'}}>Notifications</Text>
                </View>
                
            </View>
        </>
    )
}

export default Notifications