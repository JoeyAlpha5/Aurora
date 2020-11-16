import React, {useState,useEffect} from 'react';
import {View, Text,StatusBar,StyleSheet,ScrollView} from 'react-native';
import { CheckBox } from 'react-native-elements'
import ApparelType from '../Components/ApparelType';
import LongButton from '../Components/LongButton';
const LyricSearch = ({navigation, route})=>{
    const [small,setSmall] = useState(false);
    const [large,setLarge] = useState(false);
    const [xLarge,setXlarge] = useState(false);
    const [Tshirt,setTshirt] = useState(false);
    const [Sweater,setSweater] = useState(false);
    const [Hoodie,setHoodie] = useState(false);
    const [selectedSize,setSelectedSize] = useState('');
    const [selectedApparel,setSelectedApparel] = useState('');

    const getLyrics = () =>{
        navigation.navigate('SelectSong',{size:selectedSize,apparelType:selectedApparel});
    }
    return (
        <>
            <StatusBar  backgroundColor="white" barStyle="dark-content"/>
            <View style={{flex:1,alignItems:'center'}}>

                <View style={{width:'90%',marginTop:10,marginBottom:20,alignItems:'flex-start',alignContent:'flex-start'}}>
                    <Text style={{fontSize:25,fontWeight:'bold'}}>Apparel type</Text>
                    <Text style={{fontSize:15,color:'#646464'}}>select apparel type and size</Text>
                </View>
        
                <ScrollView style={{width:'100%',}} contentContainerStyle={{alignItems:'center'}}>
                    <ApparelType selected={Tshirt} apparelType={'T-shirt'} price={'R1500.00'} description={'Click here to preview t-shirt'} image={require('../Images/tshirt-black.png')} updateSelection={()=>{setTshirt(true);setHoodie(false);setSweater(false);setSelectedApparel("T-shirt")}}/>
                    <ApparelType selected={Sweater} apparelType={'Sweater'} price={'R2000.00'} description={'Click here to preview sweater'} image={require('../Images/sweater.png')} updateSelection={()=>{setTshirt(false);setHoodie(false);setSweater(true);setSelectedApparel("Sweater")}}/>
                    <ApparelType selected={Hoodie} apparelType={'Hoodie'} price={'R3000.00'} description={'Click here to preview hoodie'} image={require('../Images/hoodie.png')} updateSelection={()=>{setTshirt(false);setHoodie(true);setSweater(false);setSelectedApparel("Hoodie")}}/>

                    <Text style={{marginTop:40,color:'#646464'}}>Select your size below</Text>

                    <View style={{marginTop:10,width:'100%',alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                            <CheckBox
                                center
                                title='S'
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={small}
                                onPress={() => {setXlarge(false); setLarge(false); setSmall(true);setSelectedSize('S') }}
                            />
                            <CheckBox
                                center
                                title='L'
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={large}
                                onPress={() => {setXlarge(false); setLarge(true); setSmall(false);setSelectedSize('L')  }}
                            />
                            <CheckBox
                                center
                                title='XL'
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={xLarge}
                                onPress={() => {setXlarge(true); setLarge(false); setSmall(false);setSelectedSize('XL')  }}
                            />
                        </View>
                    </View>

                {selectedSize != '' && selectedApparel != ''?
                    (
                        <LongButton buttonClick={getLyrics}/>
                    ):

                    (
                        null
                    )

                }

                </ScrollView>
            </View>
        </>
    )
}

export default LyricSearch
const styles = StyleSheet.create({
    apparelType:{
        width:'90%',
        height: 100,
        marginTop:20,
        flexDirection:'row',
        backgroundColor:'#fff',
        alignItems:'center',
        borderRadius:14,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,


    }
})