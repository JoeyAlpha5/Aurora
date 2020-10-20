import React from 'react';
import {View, Text, StatusBar,StyleSheet, Image,TouchableOpacity} from 'react-native';
import AuroraButton from '../Components/AuroraButton';
import Logo from '../Components/Logo';
const Main = ({navigation})=>{
    const page = (screen) =>{
        navigation.navigate(screen);
    }
    return (
        <>
            <StatusBar  backgroundColor="white" barStyle="dark-content"/>
            <View style={styles.body}>
                <View style={styles.topSection}>
                    <Logo/>
                </View>

                <View style={styles.bottomSection}>
                    <Image style={{width:'100%',height:120,resizeMode:'contain'}} source={require('../Images/tshirt.png')}/>
                    <Text style={{color:'white', textAlign:'center',marginTop:20,marginBottom:10}}>
                        Welcome to Aurora. A service{'\n'}
                        dedicated to some extra content{'\n'}
                        here to describe the service. More{'\n'}
                        content here just to give a brief of{'\n'}
                        what the app is all about.
                    </Text>

                    <AuroraButton buttonFunction={()=>page('SignIn')} bgcolor="white" text="Sign in" color={"black"} outline={false}/>
                    <AuroraButton buttonFunction={()=>page('SignUp')} bgcolor="white" text="Sign up" color={"white"} outline={true}/>

                </View>
            </View>
        </>
    )
}

export default Main
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
        justifyContent:'center',
        alignItems:'center'
    }

})