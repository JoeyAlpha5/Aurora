import React,{useState,useEffect} from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from './Screens/Main';
import SignIn from './Screens/SignIn';
import Player from './Screens/Player';
import SignUp from './Screens/SignUp';
import ForgotPassword from './Screens/ForgotPassword';
import Home from './Screens/Home';
import LyricSearch from './Screens/LyricSearch';
import SelectSong from './Screens/Lyric_Search/SelectSong';
import SelectLyrics from './Screens/Lyric_Search/SelectLyrics';
import Notifications from './Screens/Notifications';
import Profile from './Screens/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';


const HomeStack =  createStackNavigator();
const LyricSearchStack =  createStackNavigator();
const HomeStackScreens = ({navigation,route})=>{
  return(
    <HomeStack.Navigator>
          <HomeStack.Screen initialParams={{ authenticate: route.params.authenticate }}  name="Feed" component={Home} options={{headerShown:false}}/>
          <HomeStack.Screen name="Player" component={Player} options={{headerShown:false}}/>
    </HomeStack.Navigator>
  )
}

const LyricSearchStackScreens = ()=>{
  return(
    <LyricSearchStack.Navigator>
          <LyricSearchStack.Screen  name="Apparel" component={LyricSearch} options={{headerShown:false}}/>
          <LyricSearchStack.Screen name="SelectSong" component={SelectSong} options={{headerShown:true,title:'Select Song'}}/>
          <LyricSearchStack.Screen name="SelectLyrics" component={SelectLyrics} options={{headerShown:true,title:'Select Lyrics'}}/>
    </LyricSearchStack.Navigator>
  )
}

const App = ()=>{
 const [isSignedIn,setIsSignedIn] = useState(true);

  const SignedOut = createStackNavigator();
  const SignedIn = createBottomTabNavigator();

  // sets sign in status, whether a user is logged in or not
  const signIn = (signInStatus)=>{
    setIsSignedIn(signInStatus);
  }
  
    if(!isSignedIn){
      return (
        <NavigationContainer>
          <SignedOut.Navigator>
            <SignedOut.Screen name="Main" component={Main} options={{headerShown:false}}/>
            <SignedOut.Screen name="SignIn" initialParams={{ authenticate: signIn }} component={SignIn} options={{headerShown:false}}/>
            <SignedOut.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
            <SignedOut.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown:false}}/>
          </SignedOut.Navigator>
        </NavigationContainer>
      )
    }else{
      return(
        <NavigationContainer>
          <SignedIn.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name === 'Home') {
                    iconName = focused
                      ? 'home'
                      : 'home';
                  } else if (route.name === 'LyricSearch') {
                    iconName = focused ? 'shirt' : 'shirt';
                  }
                  else if (route.name === 'Notifications') {
                    iconName = focused ? 'ios-notifications' : 'ios-notifications';
                  }else if (route.name === 'Profile') {
                    iconName = focused ? 'ios-person' : 'ios-person';
                  }
      
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={25} color={color} />;
                },
              })}

              // 
              tabBarOptions={{
                activeTintColor: '#2FBBF0',
                inactiveTintColor: 'gray',
                keyboardHidesTabBar:true,
                showLabel:false,
                style:{
                  backgroundColor:'#FAFAFA',
                  borderTopWidth:0,
                  height:80,
                  borderTopWidth:0.5,
                  borderColor:'rgb(0 0 0 / 50%)',
                },
        
              }}
            >
            <SignedIn.Screen name="Home" initialParams={{ authenticate: signIn }}  component={HomeStackScreens} options={{headerShown:false}}/>
            <SignedIn.Screen name="LyricSearch" component={LyricSearchStackScreens} options={{headerShown:false}}/>
            <SignedIn.Screen name="Notifications" component={Notifications} options={{headerShown:false}}/>
            <SignedIn.Screen name="Profile" authenticate={signIn} component={Profile} options={{headerShown:false}}/>
          </SignedIn.Navigator>
        </NavigationContainer>
      )
    }
  
}
export default App