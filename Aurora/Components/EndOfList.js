import React from 'react';
import {View,Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const EndOfList = ()=>{
    return(
        <View style={{alignItems:'center',marginTop:5}}>
            <Ionicons color="#989898" name="remove-outline"/>
            <Text style={{alignSelf:'center', textAlign:'center',lineHeight:18, marginBottom:15,color:'#989898',fontSize:12}}>That's all we've got for you here.{'\n'}Be sure to check out our other cool feature within the app</Text>
        </View>
    )
}
export default EndOfList;