import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const Detail = ({navigation}) => {
    return (
        <View style={styles.main} >
            <Text style={styles.head} >Detail screen</Text>
            <View style={styles.detail} >
                <Text style={styles.detaill} >This is all te details i can give</Text> 
                
                <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                    <Text style={styles.back} >Go Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    main:{
        backgroundColor:"#c0d7fc",
        height:1000,
    },
    head:{
        textAlign:"center",
        paddingVertical:20,
        fontFamily:'Montserrat-SemiBold',
        color:"black",
    },
    detail:{
        alignItems:"center",
        justifyContent:"center",
        height:670,
    },
    detaill:{
        fontSize:20,
        color:"black",
        fontFamily:"Poppins-Regular",
    },
    back:{
        fontSize:20,
        color:"black",
        backgroundColor:"#619eff",
        paddingHorizontal:20,
        paddingVertical:7,
        borderRadius:10
    }

})
export default Detail;