import React, {useEffect,useState} from 'react';
import {View, Text, StatusBar,StyleSheet, Image,FlatList} from 'react-native';
import AuroraButton from '../Components/AuroraButton';
import Logo from '../Components/Logo';
import Swiper from 'react-native-swiper'
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
     
                    {/* <Image style={{width:'100%',height:120,resizeMode:'contain'}} source={require('../Images/tshirt.png')}/>
                    <Text style={{color:'white', textAlign:'center',marginTop:20,marginBottom:10}}>
                        Welcome to Aurora. A service{'\n'}
                        dedicated to some extra content{'\n'}
                        here to describe the service. More{'\n'}
                        content here just to give a brief of{'\n'}
                        what the app is all about.
                    </Text> */}


                    {/* swiper tutorial */}
                    <View style={{width:'100%',height:320,justifyContent:'center',alignItems:'center'}}>
                        <Swiper  prevButton={<></>} nextButton={<></>} width={320} height={300}  loadMinimalSize={1} autoplay={false} loadMinimal={true} showsButtons={false} dotColor={'gray'} activeDotColor={'#fff'}  style={styles.wrapper} showsButtons={true}>
                            <View style={styles.slide1}>
                                <Image style={{width:'100%',height:120,resizeMode:'contain'}} source={require('../Images/welcome.png')}/>
                                <Text style={styles.text}>
                                    Welcome to Aurora. A service{'\n'}
                                    dedicated to those inspired by{'\n'} music and fashion.
                                </Text>
                            </View>
                            <View style={styles.slide2}>
                                <Image style={{width:'100%',height:120,resizeMode:'contain'}} source={require('../Images/lyric.png')}/>
                                <Text style={styles.text}>
                                    Search for your favourite song lyrics{'\n'}
                                </Text>
                            </View>
                            <View style={styles.slide3}>
                                <Image style={{width:'100%',height:120,resizeMode:'contain'}} source={require('../Images/tshirt.png')}/>
                                <Text style={styles.text}>
                                    Express yourself with your favourite song lyrics printed on selected hoodies, tshirts and sweatchirts.
                                </Text>
                            </View>
                        </Swiper>
                    </View>

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
        alignItems:'center',
    },

    //tutorial swiper
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color:'white', 
        textAlign:'center',
        marginTop:20,
        marginBottom:10,
        lineHeight:20
    }

})