import React from "react";
import { Text, View, Image, Linking } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import Card from "./Card"
import CardSection from "./Cardsection";
import Button from "./Button";


const Albumdetail = (props) => {
    const { cardHeaderStyle, cardImageStyle, imageStyle, cardTitle, cardTitleSub, mainImageStyle } = styles;
    const {title, artist, thumbnail_image, image, url} = props.album;
    return (
        <Card>
            <CardSection>
                <View style={cardImageStyle}>
                    <Image style={imageStyle} source={{uri: thumbnail_image}} />
                </View>
                <View style={cardHeaderStyle}>
                    <Text style={cardTitle}>{title}</Text>
                    <Text style={cardTitleSub} >{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={mainImageStyle} source={{uri: image}} />
            </CardSection>
            <CardSection>
                <Button press={() => {WebBrowser.openBrowserAsync(url);}}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
}

const styles = {
    cardHeaderStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    imageStyle: {
        height: 50,
        width: 50,
    },
    cardImageStyle: {
        justifyContent: 'center',
        alignItem: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    cardTitle: {
        fontSize: 18,
        color: '#000'
    },
    cardTitleSub: {
        color: '#000',
    },
    mainImageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default Albumdetail;