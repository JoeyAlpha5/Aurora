import React, {useState} from 'react';
import {View, Text, StatusBar,StyleSheet, Image,TouchableOpacity, TextInput,ScrollView} from 'react-native';
import AuroraButton from '../Components/AuroraButton';
import Logo from '../Components/Logo';
import Feather from 'react-native-vector-icons/Feather';
import { Overlay } from 'react-native-elements';
import PopUp from '../Components/PopUp';
import Loader from '../Components/Loader';
import {authentication} from '../Firebase/firebase';

const SignUp = ({navigation})=>{
    const [overlay,setOverlay] = useState(false);
    const [OverlayText,setOverlayText] = useState('Registration is currently not complete');
    const [popUpErr,setpopUpErr] = useState(false);
    const [Registered,setRegistered] = useState(false);
    const [Fullname,onChangeFullname] = useState('');
    const [Email,onChangeEmail] = useState('');
    const [Mobile,onChangeMobile] = useState('');
    const [Password,onChangePassword] = useState('');
    const [ConfirmPassword,onChangeConfirmPassword] = useState('');
    const [loader,setLoader] = useState(false);

    const createAccount = ()=>{
        setOverlay(false);
        setLoader(true);
        var register = authentication.createUserWithEmailAndPassword(Email,Password);
        register.then((user)=>{
            authentication.currentUser.sendEmailVerification(); 
            setLoader(false);
            setRegistered(true); 
        }).catch(err=>{
            setLoader(false);
            showErr(true,true,err.message);
        })
    }
    

    const SignUpSuccess = ()=>{
        setRegistered(false);
        setLoader(false);
        setOverlay(false);
        onChangeFullname('');
        onChangeConfirmPassword('');
        onChangeEmail('');
        onChangeMobile('');
        onChangePassword('');
        navigation.navigate('SignIn');
    }


    const validate = ()=>{
        //validate the full name
        var fullname_has_spacing = Fullname.includes(" ");
        var index_of_spacing = Fullname.indexOf(" ");
        var second_name = Fullname.substring(index_of_spacing+1);
        var first_name = Fullname.substring(0,index_of_spacing);
        //
        if(Fullname,Email,Mobile,Password,ConfirmPassword == ''){
            showErr(true,true,"Unable to sign up \n please fill in all fields");
        }else if(isNaN(Mobile) || Mobile.length < 10 || Mobile[0] != '0' || Mobile.length > 10){
            showErr(true,true,"Unable to sign up \n please enter a valid 10 digit mobile number");
        }else if(Password != ConfirmPassword){
            showErr(true,true,"Unable to sign up \n your passwords do not match");
        }else if(fullname_has_spacing == false){
            showErr(true,true,"Unable to sign up \n please enter your fullname");
        }else if(first_name.length < 2){
            showErr(true,true,"Unable to sign up \n a valid first name must have 2 characters or more");
        }else if(second_name.length < 2){
            showErr(true,true,"Unable to sign up \n a valid last name must have 2 characters or more");
        }else if(Password.length < 6){
            showErr(true,true,"Unable to sign up \n a password must be at least 6 characters long");
        }
        else{
            createAccount();
        }
    }

    const showErr = (show_overlay,show_popup_err,overlay_text)=>{
        setOverlay(show_overlay);
        setpopUpErr(show_popup_err);
        setOverlayText(overlay_text);
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
                                <Text style={{color:'#fff',fontSize:40,marginTop:10,marginBottom:30}}>Create {'\n'}Account</Text> 
                                <TextInput value={Fullname} onChangeText={text => onChangeFullname(text)} style={{height:52,width:'100%',color:'white',borderRadius:10,borderWidth:1,borderColor:'white',paddingLeft:10}} placeholderTextColor="#fff" placeholder="Full name" />  
                                <TextInput value={Email} onChangeText={text => onChangeEmail(text)} style={{height:52,width:'100%',color:'white',borderRadius:10,borderWidth:1,borderColor:'white',paddingLeft:10,marginTop:10}} placeholderTextColor="#fff" placeholder="Email" /> 
                                <TextInput value={Mobile} onChangeText={text => onChangeMobile(text)} style={{height:52,width:'100%',color:'white',borderRadius:10,borderWidth:1,borderColor:'white',paddingLeft:10,marginTop:10}} placeholderTextColor="#fff" placeholder="Mobile" />
                                <TextInput value={Password} onChangeText={text => onChangePassword(text)} secureTextEntry={true} style={{height:52,width:'100%',color:'white',borderRadius:10,borderWidth:1,borderColor:'white',paddingLeft:10,marginTop:10}} placeholderTextColor="#fff" placeholder="Password" />
                                <TextInput  value={ConfirmPassword} onChangeText={text => onChangeConfirmPassword(text)} secureTextEntry={true} style={{height:52,width:'100%',color:'white',borderRadius:10,marginTop:10,borderWidth:1,borderColor:'white',paddingLeft:10}} placeholderTextColor="#fff" placeholder="Confirm Password" />  
                            </View>
                            <AuroraButton buttonFunction={()=>validate()} bgcolor="white" text="Sign up" color={"black"} outline={false}/>
                    </View>
                </ScrollView>
            </View>
            <Overlay isVisible={overlay}>
                <PopUp errorBtn={()=>setOverlay(false)} text={OverlayText} error={popUpErr} />
            </Overlay>

            <Overlay isVisible={Registered}>
                <PopUp successBtn={()=>SignUpSuccess()} text={"Welcome to Aurora, please check your inbox to verify your account."} />
            </Overlay>

            <Overlay isVisible={loader}>
                <Loader text={'Creating your account, please wait..'}/>
            </Overlay>
        </>
    )
}

export default SignUp
const styles = StyleSheet.create({
    topSection:{
        alignItems:'center',
        justifyContent:'center',
        height:'20%',

    },
    body:{
        flex:1,
        backgroundColor:'white',
        flexDirection:'column',
        justifyContent:'space-between'
    },
    bottomSection:{
        width:'100%',
        height:'80%',
        backgroundColor:'#000',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        // justifyContent:'center',
        // alignItems:'center'
    }

})