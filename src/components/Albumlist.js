import React, {Component} from "react";
import { View, ScrollView } from "react-native";
import axios from "axios";
import Albumdetail from "./Albumdetail";


class AlbumList extends Component{
    state = { album: [] };

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({album: response.data}));
        //console.log('memememe')
    }
    renderAlbum() {
        return this.state.album.map(album => <Albumdetail key={album.title} album={album} />)
    }
    render(){
        console.log(this.state);
        return(
            <ScrollView>
                {this.renderAlbum()}
            </ScrollView>
        );
    }
};


export default AlbumList;