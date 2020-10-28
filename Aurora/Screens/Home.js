import React, {useState,useEffect,createRef} from 'react';
import {View,Text,StatusBar,TextInput,StyleSheet,ActivityIndicator,Image,Linking,TouchableOpacity} from 'react-native';
import ActionSheet from "react-native-actions-sheet";
import Post from '../Components/Post';
const Home = ({navigation, route})=>{
    const actionSheetRef = createRef();
    const [Feed,setFeed] = useState([]);
    const [SelectedPostLink,setSelectedPostLink] = useState('');
    const [Refreshing,setRefreshing] = useState(false);
    const [morePostsAvailable,setMorePostsAvailable] = useState(true);
    // get the feed
    const getFeed = (reset_feed)=>{
        var feed_count = 0;
        reset_feed == true? feed_count = 0: feed_count = Feed.length;
        fetch('http://0255d7e6116b.ngrok.io/feed?feed_count='+feed_count)
        .then(res=>res.json())
        .then(json=>{
            //
            console.log('results length ',json.response.length);
            // check if there are any results in the response
            {json.response.length > 0? setMorePostsAvailable(true): setMorePostsAvailable(false)};
            {reset_feed == true? setFeed(json.response): setFeed([...Feed,...json.response])}
            //disable refreshing
            setRefreshing(false);
        }).finally(()=>{
            console.log(Feed);
        });
    }

    const onRefresh = ()=>{
        setRefreshing(true);
        getFeed(true);
    }

    const viewPostOptions = (feed_index) =>{
        setSelectedPostLink(Feed[feed_index].instagram_link);
        actionSheetRef.current?.setModalVisible();
    }

    const openLink = ()=>{
        Linking.openURL(SelectedPostLink);
    }

    const getMorePosts = ()=>{
        console.log("getting more");
        getFeed(false);
    }

    useEffect(()=>{
        // get the colors feed
        getFeed(true);
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
                            <Post morePostToLoad={morePostsAvailable} feed={Feed} getMore={getMorePosts} Refreshing={Refreshing} onRefresh={onRefresh} viewPostOptions={viewPostOptions}/>
                        )

                    }
                </View>
            </View>
            <ActionSheet gestureEnabled={true} ref={actionSheetRef} containerStyle={{borderTopRightRadius:30,borderTopLeftRadius:30,backgroundColor:'#000'}}>
                <View style={styles.actionSheet}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:18,marginBottom:40}}>Post options</Text>
                    <View style={{alignItems:'center',paddingBottom:20,justifyContent:'center'}}>
                        <Text style={{color:'white'}}>Share Aurora post link</Text>
                    </View>
                    <View style={{alignItems:'center',paddingBottom:20,justifyContent:'center'}}>
                        <TouchableOpacity onPress={()=>openLink()}>
                            <Text style={{color:'white'}}>View artist on instagram</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'center',paddingBottom:20,justifyContent:'center'}}>
                        <Text style={{color:'white'}}>Report post</Text>
                    </View>
                </View>
            </ActionSheet>
        </>
    )
}

export default Home
const styles = StyleSheet.create({
    actionSheet:{
        height:250,
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
