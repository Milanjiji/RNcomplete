import React from "react";
import { View,StyleSheet } from "react-native";

const Card = props =>{
    return <View style={{...styles.card,...props.style}} >
        {props.children}
    </View>
}

const styles = StyleSheet.create({
    card:{
        
        borderRadius:10,
        elevation:10,
        opacity:0.9,
        backgroundColor:'white',
    }
})

export default Card;
