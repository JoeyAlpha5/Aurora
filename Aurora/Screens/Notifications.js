import React, {useState,useEffect} from 'react';
import {View, Text,StatusBar,Platform} from 'react-native';

const Notifications = ({navigation, route})=>{
    const [isIos,setisIos] = useState(10);
    useEffect(()=>{
        Platform.OS == 'ios' ? setisIos(50):setisIos(10);
    })
    return (
        <>
            <StatusBar  backgroundColor="white" barStyle="dark-content"/>
            <View style={{flex:1,alignItems:'center'}}>

                <View style={{width:'90%',marginTop:isIos,alignItems:'flex-start',alignContent:'flex-start'}}>
                    <Text style={{fontSize:25,fontWeight:'bold'}}>Notifications</Text>
                </View>
                
            </View>
        </>
    )
}

export default Notifications