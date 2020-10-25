import React, {useState,useEffect,createRef} from 'react';
import {View, RefreshControl,Text,StatusBar,TextInput,StyleSheet,TouchableOpacity,ActivityIndicator,FlatList,Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActionSheet from "react-native-actions-sheet";
const Home = ({navigation, route})=>{
    const actionSheetRef = createRef();
    const [Feed,setFeed] = useState([]);
    const [Refreshing,setRefreshing] = useState(false);
    const getFeed = ()=>{
        fetch('http://590faa87898c.ngrok.io/feed')
        .then(res=>res.json())
        .then(json=>{
            setFeed(json.response);
        }).then(()=>{
            console.log(Feed);
        });
    }

    const onRefresh = ()=>{
        console.log("refreshed");
    }

    const viewPostOptions = (post_id) =>{
        console.log("post id is ", post_id);
        actionSheetRef.current?.setModalVisible();
    }

    useEffect(()=>{
        // get the colors feed
        getFeed();
    },[])

    return (
        <>
            <View style={{flex:1,backgroundColor:'#fff',alignItems:'center'}}>
                <StatusBar  backgroundColor="white" barStyle="dark-content"/>
                <View style={{width:'90%'}}>
                    <Text style={{fontSize:32,fontWeight:'bold',marginTop:10}}>A Colors Show</Text>
                    <TextInput placeholderTextColor={'#000'} style={styles.searchBar}  placeholder={'Search for videos'}/>
                </View>

                <View style={{width:'90%',marginTop:10,paddingBottom:110}}>
                    {Feed.length < 1?
                        (
                            <ActivityIndicator style={{marginTop:20}} size="large" color="#2FBBF0" />

                        ):
                        (
                        <FlatList
                            data={Feed}
                            showsVerticalScrollIndicator ={false}
                            ListFooterComponent={<ActivityIndicator style={{marginTop:5}} size="small" color="#2FBBF0"/>}
                            keyExtractor={( item,index ) => {return item.post_id.toFixed()} }
                            refreshControl={<RefreshControl colors={['#2FBBF0']} refreshing={Refreshing} onRefresh={onRefresh}/>} 
                            renderItem={({item})=>(
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
                                            <TouchableOpacity onPress={()=>viewPostOptions(item.post_id)}>
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
                        )

                    }
                </View>
            </View>
            <ActionSheet gestureEnabled={true} ref={actionSheetRef} containerStyle={{borderTopRightRadius:30,borderTopLeftRadius:30,backgroundColor:'#000'}}>
                <View style={styles.actionSheet}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:18,marginBottom:40}}>Report post</Text>
                    <View style={{alignItems:'center',paddingBottom:20,justifyContent:'center'}}>
                        <Text style={{color:'white'}}>Hatespeech</Text>
                    </View>
                    <View style={{alignItems:'center',paddingBottom:20,justifyContent:'center'}}>
                        <Text style={{color:'white'}}>Graphic violence</Text>
                    </View>
                    <View style={{alignItems:'center',paddingBottom:20,justifyContent:'center'}}>
                        <Text style={{color:'white'}}>Harrassment or bullying</Text>
                    </View>
                    <View style={{alignItems:'center',paddingBottom:20,justifyContent:'center'}}>
                        <Text style={{color:'white'}}>Sexually explicit material</Text>
                    </View>
                </View>
            </ActionSheet>
        </>
    )
}

export default Home
const styles = StyleSheet.create({
    actionSheet:{
        height:300,
        backgroundColor:'#000',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        justifyContent:'center',
        alignItems:'center'
    },
    searchBar:{
        width:'100%',
        height:40,
        backgroundColor:'rgba(0, 0, 0, 0.06)',
        marginTop:10,
        borderRadius:20,
        paddingLeft:15


    }
})
