import React from "react";
import {View, Text} from "react-native";


const Card = (props) => {
    const {container} = styles 
    return (
        <View style={container}>
            {props.children}
        </View>
    );
}

const styles = {
    container: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        boxShadow: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowradius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        
    }
}

export default Card;