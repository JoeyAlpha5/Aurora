import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
const AuroraButton = (props)=>{
    if(props.outline == true){
        return (
        <TouchableOpacity onPress={props.buttonFunction} style={{width:'80%',height:52,borderWidth:1,borderColor:props.bgcolor,borderRadius:10,marginTop:10,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:props.color}}>{props.text}</Text>
        </TouchableOpacity>
        )
    }else{
        return (
            <TouchableOpacity onPress={props.buttonFunction} style={{width:'80%',height:52,backgroundColor:props.bgcolor,borderRadius:10,marginTop:10,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:props.color}}>{props.text}</Text>
            </TouchableOpacity>
        )
    }

}
export default AuroraButton