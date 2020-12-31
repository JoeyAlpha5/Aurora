import React, {useState,useEffect} from 'react';
import {View, Text,StatusBar,Platform} from 'react-native';
import LongButton from '../Components/LongButton';
import {authentication} from '../Firebase/firebase';


const Profile = ({navigation, route})=>{
    const [isIos,setisIos] = useState(10);

    const logout = () =>{
        authentication.signOut();
    }

    useEffect(()=>{
        Platform.OS == 'ios' ? setisIos(50):setisIos(10);
    })
    return (
        <>
            <StatusBar  backgroundColor="white" barStyle="dark-content"/>
            <View style={{flex:1,alignItems:'center'}}>

                <View style={{width:'90%',marginTop:isIos,alignItems:'flex-start',alignContent:'flex-start'}}>
                    <Text style={{fontSize:25,fontWeight:'bold'}}>Profile</Text>
                </View>
                
                <LongButton text="Sign out" buttonClick={logout}/>

            </View>
        </>
    )
}

export default Profile