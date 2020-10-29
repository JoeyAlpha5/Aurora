import React, { useState,useEffect} from 'react';
import {View,Text,Dimensions,StatusBar,FlatList,Image,TouchableOpacity} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PlayerList from '../Components/PlayerList';
const Player = ({navigation,route}) =>{
    const {width, height} = Dimensions.get("screen");
    const [postData,setPostData] = useState(route.params.data);
    const [Playlist,setPlaylist] = useState(route.params.playlist);
    const [viewPlaylist,setViewPlaylist] = useState(false);


    //play the selected/next video from the playlist array
    const playNextVideo = (index) =>{
        setPostData(Playlist[index]);
    }

    return(
        <View style={{flex:1,backgroundColor:'white'}}>
            <StatusBar  backgroundColor="black" barStyle="light-content"/>
            <View style={{width:'100%',height:height/3,alignItems:'center'}}>
                <VideoPlayer
                    source={{uri: postData.video_url}}
                    disableFullscreen={true} 
                    resizeMode={"contain"}
                    seekColor={"#50A5F4"}        
                    navigator={navigation}
                    disableVolume={true}
                    // muted={true}                          
                />
            </View>
            <View style={{width:'100%',alignItems:'center',marginTop:20}}>
                <Text style={{fontSize:32,color:'#989898',fontWeight:'bold'}}>{postData.post_artist}</Text>
                <Text style={{fontSize:16,color:'#989898'}}>{postData.post_title}</Text>
            </View>


            <View style={{width:'100%',position:'absolute',bottom:0,backgroundColor:'#d2d2d2',zIndex: 99}}>
                <View style={{width:'100%',height:40,flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{marginTop:10,color:'#989898',marginLeft:15,fontWeight:'bold'}}>
                        Playlist
                    </Text>
                    {viewPlaylist == true?
                        <TouchableOpacity onPress={()=>setViewPlaylist(false)}>
                            <Ionicons color={'#989898'} style={{marginRight:5,marginTop:7}} name="ios-chevron-down" size={25}/>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={()=>setViewPlaylist(true)}>
                            <Ionicons color={'#989898'} style={{marginRight:5,marginTop:7}} name="ios-chevron-up" size={25}/>
                        </TouchableOpacity>
                    }
                </View>

                {viewPlaylist == true?
                    <PlayerList list={Playlist} playNext={playNextVideo}/>
                    :
                    null
                }
            </View>

        </View>
    )
}

export default Player