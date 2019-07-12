import React from "react";
import {Text, TouchableOpacity} from "react-native";


const Button = (props) => {
    const {buttonStyle, textStyle} = styles;
    return (
        <TouchableOpacity style={buttonStyle} onPress={props.press}>
            <Text style={textStyle} >{props.children}</Text>
        </TouchableOpacity>
    );
}

const styles = {
    textStyle: {
        color: '#007aff',
        alignSelf: 'center',
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 16,
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
    }
}

export default Button;