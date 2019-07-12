//import libraries for making a component
import React from "react";
import { Text, View } from "react-native";



//Make a component
const Header = (props) => {
    const { textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle} >{props.headerText}</Text>
        </View>
        
    );
}


const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 15},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5, 
    },
    textStyle: {
        fontSize: 20,
        color: '#000'
    },
};


export default Header;


//Make the components avaliable to other parts of the App