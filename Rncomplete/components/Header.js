import React  from "react";
import { Text, View, StyleSheet} from "react-native";

import Colors from "../assets/Colors";

const Header = props =>{
    return(
        <View style={styles.header} >
            <Text style={styles.headerTitle} >{props.title}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    header:{
        height:40,
        width:'100%',
        backgroundColor:Colors.primary,
        justifyContent:"center",
        alignItems:"center"
    },
    headerTitle:{
        color:"black"
    }
})

export default Header;