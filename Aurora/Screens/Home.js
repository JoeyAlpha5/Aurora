import React, {useState,useEffect,createRef} from 'react';
import {View,Text,StatusBar,TextInput,StyleSheet,ActivityIndicator,Image,Linking,TouchableOpacity} from 'react-native';
import ActionSheet from "react-native-actions-sheet";
import { cos } from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Post from '../Components/Post';
const Home = ({navigation, route})=>{
    //feed states
    const actionSheetRef = createRef();
    const [Feed,setFeed] = useState([]);
    const [SelectedPostLink,setSelectedPostLink] = useState('');
    const [Refreshing,setRefreshing] = useState(false);
    const [morePostsAvailable,setMorePostsAvailable] = useState(true);

    // search feed states
    const [searchValue, setSearchValue] = useState('');
    const [closeSearch,setCloseSearch] = useState(true);

    // get the feed
    const getFeed = (reset_feed)=>{
        // set the feed count
        var feed_count = 0;
        reset_feed == true? feed_count = 0: feed_count = Feed.length;

        //set the api call
        var api_call = 'http://8e05bc595270.ngrok.io/feed?feed_count='+feed_count;
        if(searchValue.length > 0 && searchValue != ""){
            console.log("search term ", searchValue);
            api_call = 'http://8e05bc595270.ngrok.io/feed?feed_count='+feed_count+"&search_term="+searchValue;
        }

        fetch(api_call)
        .then(res=>res.json())
        .then(json=>{
            // check if there are any results in the response
            {json.response.length > 0? setMorePostsAvailable(true): setMorePostsAvailable(false)};
            {reset_feed == true? setFeed(json.response): setFeed([...Feed,...json.response])}
            //disable refreshing
            setRefreshing(false);
        }).finally(()=>{
            console.log(Feed);
        });
    }

    // when you swipe down to refresh on the feed
    const onRefresh = ()=>{
        setRefreshing(true);
        getFeed(true);
    }

    // see the available options when you click on the elipses icon on the top far right of a post
    const viewPostOptions = (feed_index) =>{
        setSelectedPostLink(Feed[feed_index].instagram_link);
        actionSheetRef.current?.setModalVisible();
    }

    //open a link to i.e instagram when you select options on a post and then 'visit artist on instagram'
    const openLink = ()=>{
        Linking.openURL(SelectedPostLink);
    }

    //get more posts when you reach the end of the feed
    const getMorePosts = ()=>{
        getFeed(false);
    }

    const Search = ()=>{
        // search only if there is a search term
        if(searchValue.length > 0){
            setFeed([]);
            setCloseSearch(false);
        }
    }

    const EndSearch = ()=>{
        setSearchValue('');
        setFeed([]);
        setCloseSearch(true);
    }

    useEffect(()=>{
        // get the colors feed
        getFeed(true);
    },[closeSearch])

    return (
        <>
            <View style={{flex:1,backgroundColor:'#fff',alignItems:'center'}}>
                <StatusBar  backgroundColor="white" barStyle="dark-content"/>
                <View style={{width:'90%',alignItems:'flex-start',alignContent:'flex-start'}}>
                    <Image style={{width:150,height:80,resizeMode:'contain'}} source={require('../Images/transparentLogo.png')}/>
                    <View style={{width:'100%',flexDirection:'row',justifyContent:'center'}}>  
                        <TextInput value={searchValue} onChangeText={text => setSearchValue(text)} placeholderTextColor={'#000'} style={styles.searchBar}  placeholder={'Search using artist name or song title'}/>
                        <TouchableOpacity onPress={()=>Search()} style={{width:20,height:20,marginTop:20,position:'absolute',right:10,zIndex:1000}}>
                            <Ionicons color="#989898" size={20} name="ios-search"/>
                        </TouchableOpacity>
                        {closeSearch == false?
                            (
                                <TouchableOpacity onPress={()=>EndSearch()} style={{width:20,height:20,marginTop:20,position:'absolute',right:40,zIndex:1000}}>
                                    <Ionicons color="#989898" size={20} name="close"/>
                                </TouchableOpacity>
                            ):
                            null
                        }
                    </View>
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
