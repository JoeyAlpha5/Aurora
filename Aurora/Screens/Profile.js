import React, {useState,useEffect} from 'react';
import {View, Text,StatusBar} from 'react-native';

const Profile = ({navigation, route})=>{
    return (
        <>
            <StatusBar  backgroundColor="white" barStyle="dark-content"/>
            <View style={{flex:1,alignItems:'center'}}>

                <View style={{width:'90%',marginTop:10,alignItems:'flex-start',alignContent:'flex-start'}}>
                    <Text style={{fontSize:25,fontWeight:'bold'}}>Profile</Text>
                </View>
                
            </View>
        </>
    )
}

export default Profile