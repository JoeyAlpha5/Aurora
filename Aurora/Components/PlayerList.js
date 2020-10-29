import React from 'react';
import {View,Text,FlatList,Image,TouchableOpacity} from 'react-native';
const PlayerList = (props)=>{
    return(
        <FlatList
            data={props.list}
            showsVerticalScrollIndicator ={false}
            keyExtractor={( item,index ) => {return item.post_id.toFixed()} }
            renderItem={({item,index})=>(
                <TouchableOpacity onPress={()=>props.playNext(index)} style={{width:'100%',height:80,flexDirection:'row',backgroundColor:'#f3f3f3',paddingTop:10}}>
                    <Image source={{uri:item.artist_photo}} style={{width:60,height: 60,resizeMode:'center',borderRadius:10,marginLeft:15,backgroundColor:'rgba(0, 0, 0, 0.06)'}}/>
                    <View style={{marginLeft:10}}>
                        <Text style={{color:'#000',fontSize:16,fontWeight:'bold'}}>{item.post_artist}</Text>
                        <Text style={{color:'#646862'}}>{item.post_title}</Text>
                    </View>
                </TouchableOpacity>
        )}/>
    )
}
export default PlayerList