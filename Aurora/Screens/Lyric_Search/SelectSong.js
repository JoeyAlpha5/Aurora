import React, {useEffect,useState} from 'react';
import {View,Text,Image,TextInput,StyleSheet} from 'react-native';
import LongButton from '../../Components/LongButton';
import { Overlay } from 'react-native-elements';
import Loader from '../../Components/Loader';
import PopUp from '../../Components/PopUp';
const SelectSong = ({navigation,route})=>{
    const [Title,setTitle] = useState('');
    const [Artist,setArtist] = useState('');
    const [Loading,setLoading] = useState(false);
    const [Err,setErr] = useState(false);

    const SearchLyrics = () =>{
        setLoading(true);
        fetch('http://34bf6e3446e4.ngrok.io/lyrics?title='+Title+'&artist='+Artist)
        .then(res=>res.json())
        .then((json)=>{
            setLoading(false);
            setErr(false);
            navigation.navigate('SelectLyrics',{artist:json.artist,date:json.date,title:json.title,image:json.cover_image,lyrics:json.lyrics, size:route.params.size,apparelType:route.params.apparelType});
        })
        .catch((err)=>{
            setLoading(false);
            setErr(true);
        });
    }

    return(
        <>
            <View style={{flex:1,alignItems:'center'}}>
                <View style={{width:'90%'}}>
                    <TextInput value={Title} onChangeText={text => setTitle(text)} placeholderTextColor={'#000'} style={styles.searchBar}  placeholder={'Enter song title'}/>
                    <TextInput value={Artist} onChangeText={text => setArtist(text)} placeholderTextColor={'#000'} style={styles.searchBar}  placeholder={'Enter artist name'}/>
                </View>

                {Title != '' && Artist != ''?
                    (
                        <LongButton buttonClick={SearchLyrics}/>
                    ):

                    (
                        null
                    )

                }
            </View>

            <Overlay isVisible={Loading}>
                <Loader text={'Fetching song, please wait..'}/>
            </Overlay>
            <Overlay isVisible={Err} onBackdropPress={()=>setErr(false)}>
                <PopUp errorBtn={()=>setErr(false)} text={'Unable to find match'} error={true}/>
            </Overlay>
        </>
    )
}
export default SelectSong
const styles = StyleSheet.create({
    searchBar:{
        width:'100%',
        height:40,
        backgroundColor:'rgba(0, 0, 0, 0.06)',
        marginTop:10,
        borderRadius:20,
        paddingLeft:15
    }
})