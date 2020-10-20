import React, {useState} from 'react';
import {View, Text, StatusBar,StyleSheet, Image,TouchableOpacity, TextInput, ScrollView} from 'react-native';
import AuroraButton from '../Components/AuroraButton';
import Logo from '../Components/Logo';
import Feather from 'react-native-vector-icons/Feather';
import { Overlay } from 'react-native-elements';
import PopUp from '../Components/PopUp';
const SignIn = ({navigation})=>{
    const [overlay,setOverlay] = useState(false);
    const [OverlayText,setOverlayText] = useState("Sign in functionality is \n currently incomplete");
    const [popUpErr,setpopUpErr] = useState(false);
    const signIn = ()=>{
        setOverlay(true);
        setpopUpErr(true);
    }
  return (
        <>
            <StatusBar  backgroundColor="white" barStyle="dark-content"/>
            <View style={styles.body}>
                <View style={styles.topSection}>
                    <Logo/>
                </View>

                <ScrollView style={styles.bottomSection} contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
                <View style={{justifyContent:'center',alignItems:'center',height:'100%'}}>
                    <View style={{width:'95%',height:50}}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Main')}>
                            <Feather size={50} color={'#fff'} name="chevron-left"/>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:'80%',marginBottom:20}}>
                        <Text style={{color:'#fff',fontSize:40,marginTop:10,marginBottom:30}}>Welcome {'\n'}Back</Text> 
                        <TextInput style={{height:52,width:'100%',color:'white',borderRadius:10,borderWidth:1,borderColor:'white',paddingLeft:10}} placeholderTextColor="#fff" placeholder="Email" />  
                        <TextInput  secureTextEntry={true} style={{height:52,width:'100%',color:'white',borderRadius:10,marginTop:10,borderWidth:1,borderColor:'white',paddingLeft:10}} placeholderTextColor="#fff" placeholder="Password" />  
                    </View>
                    <AuroraButton buttonFunction={()=>signIn()} bgcolor="white" text="Sign in" color={"black"} outline={false}/>
                </View>
                </ScrollView>
            </View>
            <Overlay isVisible={overlay} onBackdropPress={()=>setOverlay(false)}>
                <PopUp text={OverlayText} error={popUpErr} />
            </Overlay>
        </>
    )
}

export default SignIn
const styles = StyleSheet.create({
    topSection:{
        alignItems:'center',
        justifyContent:'center',
        height:'30%',

    },
    body:{
        flex:1,
        backgroundColor:'white',
        flexDirection:'column',
        justifyContent:'space-between'
    },
    bottomSection:{
        width:'100%',
        height:'70%',
        backgroundColor:'#000',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    }

})