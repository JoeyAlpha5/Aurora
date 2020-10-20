import React from 'react';
import {View, Text, Image} from 'react-native';

const Logo = ()=>{
  return (
        <Image style={{width:'100%',resizeMode:'contain'}} source={require('../Images/logo.png')}/>
    )
}

export default Logo