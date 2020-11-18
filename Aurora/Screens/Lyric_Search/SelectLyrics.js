import React, {useEffect,useState} from 'react';
import {View,Text,Image,StyleSheet,ScrollView} from 'react-native';
const SearchLyrics = ({navigation,route}) =>{
    useEffect(()=>{
        // console.log(route.params.lyrics);
        // console.log(route.params.image);
        // console.log(route.params.size);
        // console.log(route.params.apparelType);
    })
    return(
        <View style={{flex:1}}>
            <ScrollView  contentContainerStyle={{alignItems:'center'}}>
                <View style={styles.selectedSong}>
                    <Image style={{width:60,height:60,borderRadius:10,marginLeft:15,backgroundColor:'#646862'}} source={{uri:route.params.image}}/>
                    <View style={{marginLeft:15,width:'80%'}}>
                        <Text style={{fontWeight:'bold',fontSize:16}}>{route.params.title}</Text>
                        <Text style={{color:'#646862',fontWeight:'bold',fontSize:12}}>{route.params.artist}</Text>
                        <Text style={{color:'#646862',fontSize:12}}>{route.params.date}</Text>
                    </View>
                </View>
                
                <Text selectable={true} selectionColor='#2FBBF0' style={{width:'80%',color:'#646862',marginTop:20,marginBottom:20}}>
                     {route.params.lyrics}
                </Text>
            </ScrollView>
        </View>
    )
}
export default SearchLyrics
const styles = StyleSheet.create({
    selectedSong:{
        width:'90%',
        height: 100,
        marginTop:20,
        flexDirection:'row',
        backgroundColor:'#fff',
        alignItems:'center',
        // justifyContent: 'space-between',
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