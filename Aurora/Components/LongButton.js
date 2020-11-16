import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
const LongButton = (props)=>{

    return (
        <TouchableOpacity onPress={()=>props.buttonClick()} style={{width:'90%',height:40,backgroundColor:'rgba(0, 0, 0, 0.06)',borderRadius:20,marginTop:40,justifyContent:'center',alignItems:'center'}}>
            <Text>Continue</Text>
        </TouchableOpacity>
    )

}
export default LongButton