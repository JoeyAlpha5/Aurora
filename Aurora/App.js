import React,{useState,useEffect} from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from './Screens/Main';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import ForgotPassword from './Screens/ForgotPassword';
import Home from './Screens/Home';
import LyricSearch from './Screens/LyricSearch';
import Notifications from './Screens/Notifications';
import Profile from './Screens/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = ()=>{
 const [isSignedIn,setIsSignedIn] = useState(false);

  const SignedOut = createStackNavigator();
  const SignedIn = createBottomTabNavigator();

  
    if(isSignedIn){
      return (
          <NavigationContainer>
          <SignedOut.Navigator>
            <SignedOut.Screen name="Main" component={Main} options={{headerShown:false}}/>
            <SignedOut.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
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
            <SignedIn.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <SignedIn.Screen name="LyricSearch" component={LyricSearch} options={{headerShown:false}}/>
            <SignedIn.Screen name="Notifications" component={Notifications} options={{headerShown:false}}/>
            <SignedIn.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
          </SignedIn.Navigator>
        </NavigationContainer>
      )
    }
  
}
export default App