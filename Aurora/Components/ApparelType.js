import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import { CheckBox } from 'react-native-elements'
const ApparelType = (props) =>{
   return ( 
   <>
        <View style={styles.apparelType}>
            <Image style={{width:50,resizeMode:'contain',marginLeft:20}} source={props.image}/>
            <View style={{marginLeft:0}}>
                <Text style={{fontWeight:'bold',fontSize:16}}>{props.apparelType}</Text>
                <Text style={{color:'#646862',fontSize:12,marginBottom:5,marginTop:5}}>{props.description}</Text>
                <Text style={{fontWeight:'bold',fontSize:16}}>{props.price}</Text>                        
            </View>
            <CheckBox
                center
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={props.selected}
                onPress={props.updateSelection}
            />
        </View>
    </>
   )
}
export default ApparelType
const styles = StyleSheet.create({
    apparelType:{
        width:'90%',
        height: 100,
        marginTop:20,
        flexDirection:'row',
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent: 'space-between',
        borderRadius:14,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5

    }
})