import React, {useState,useEffect,createRef} from 'react';
import {View,Text,StatusBar,TextInput,StyleSheet,ActivityIndicator,Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActionSheet from "react-native-actions-sheet";
import Post from '../Components/Post';
const Home = ({navigation, route})=>{
    const actionSheetRef = createRef();
    const [Feed,setFeed] = useState([]);
    const [Refreshing,setRefreshing] = useState(false);
    const getFeed = ()=>{
        fetch('http://0255d7e6116b.ngrok.io/feed')
        .then(res=>res.json())
        .then(json=>{
            setFeed(json.response);
            //disable refreshing
            setRefreshing(false);
        }).then(()=>{
            console.log(Feed);
        });
    }

    const onRefresh = ()=>{
        console.log("refreshed");
        setRefreshing(true);
        getFeed();

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
                <View style={{width:'90%',alignItems:'flex-start',alignContent:'flex-start'}}>
                    <Image style={{width:150,height:80,resizeMode:'contain'}} source={require('../Images/transparentLogo.png')}/>
                    <TextInput placeholderTextColor={'#000'} style={styles.searchBar}  placeholder={'Search for videos'}/>
                </View>

                <View style={{width:'90%',marginTop:20,paddingBottom:130}}>
                    {Feed.length < 1?
                        (
                            <ActivityIndicator style={{marginTop:20}} size="large" color="#2FBBF0" />

                        ):
                        (
                            <Post feed={Feed} Refreshing={Refreshing} onRefresh={onRefresh} viewPostOptions={viewPostOptions}/>
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
