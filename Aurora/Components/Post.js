import React from 'react';
import {View, RefreshControl,Text,StatusBar,TextInput,StyleSheet,TouchableOpacity,ActivityIndicator,FlatList,Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useScrollToTop } from '@react-navigation/native';
import EndOfList from './EndOfList';
export const Post = (props)=>{
    const ref = React.useRef(null);
    useScrollToTop(ref);
  return (
      <>
        <FlatList
            data={props.feed}
            ref={ref}
            showsVerticalScrollIndicator ={false}
            ListFooterComponent={props.morePostToLoad == true ? <ActivityIndicator style={{marginTop:5}} size="small" color="#2FBBF0"/>:<EndOfList/>}
            keyExtractor={( item,index ) => {return item.post_id.toFixed()} }
            refreshControl={<RefreshControl colors={['#2FBBF0']} refreshing={props.Refreshing} onRefresh={props.onRefresh}/>} 
            onEndReached={()=>props.getMore()}
            onEndReachedThreshold={1}
            renderItem={({item,index})=>(
                <>
                    <View style={{justifyContent:'space-between',flexDirection:'row',marginTop:20}}>
                        <View style={{flexDirection:'row'}}>
                            <Image style={{backgroundColor:'rgba(0, 0, 0, 0.06)',width:50,height:50,borderRadius:50}} source={{uri:item.artist_photo}}/>
                            <View  style={{marginLeft:15}}>
                                <Text style={{fontSize:16,fontWeight:'bold'}}>{item.post_artist}</Text>
                                <Text style={{color:'#989898',fontSize:14}}>{item.post_title}</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={()=>props.viewPostOptions(index)}>
                                <Ionicons name="ellipsis-vertical" size={15} color={"#7A8FA6"}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginTop:10}}>
                        <Image style={{backgroundColor:'rgba(0, 0, 0, 0.06)',width:'100%',height:200,borderRadius:10}} source={{uri:item.cover_poto}}/>
                    </View>
                </>
            )}
        />
      </>
    )
}

export default Post