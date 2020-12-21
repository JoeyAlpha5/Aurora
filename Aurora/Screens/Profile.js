import React, {useState,useEffect} from 'react';
import {View, Text,StatusBar} from 'react-native';
import LongButton from '../Components/LongButton';
import {authentication} from '../Firebase/firebase';


const Profile = ({navigation, route})=>{

    const logout = () =>{
        authentication.signOut();
    }

    return (
        <>
            <StatusBar  backgroundColor="white" barStyle="dark-content"/>
            <View style={{flex:1,alignItems:'center'}}>

                <View style={{width:'90%',marginTop:10,alignItems:'flex-start',alignContent:'flex-start'}}>
                    <Text style={{fontSize:25,fontWeight:'bold'}}>Profile</Text>
                </View>
                
                <LongButton text="Sign out" buttonClick={logout}/>

            </View>
        </>
    )
}

export default Profile