import React, { useState } from 'react';
import {View,StyleSheet, ActivityIndicator,Text} from 'react-native';
const Loader = (props)=>{

    return (
        <>
            <View style={styles.popUp}>
                <View>
                    <ActivityIndicator style={{transform: [{ scale: 2 }]}} size="large" color="#2FBBF0" />
                    <Text style={{marginTop:40,color:'gray'}}>{props.text}</Text>
                </View>
            </View>
        </>
    )
}

export default Loader
const styles = StyleSheet.create({
    popUp:{
        width:300,
        height:300,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        borderTopRightRadius:100
    },

})