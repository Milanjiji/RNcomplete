import React from 'react';
import { View, Text, StyleSheet,  ScrollView, TouchableOpacity} from 'react-native';

const Style = ({navigation}) => {
    return (
        <View style={styles.flexall}>
            <ScrollView>
                <Text style={styles.head} >Style</Text>

            <View style={styles.flex}></View>
            <View style={styles.flex1}></View>
            <View style={styles.flex2}></View>
            <View style={styles.mainback} >
                <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                        <Text style={styles.back} >Go Back</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
            
        </View>
    );
};

const styles = StyleSheet.create({
    flex:{
        backgroundColor:'red',
        width:200,
        height:200,
        
    },
    flex1:{
        backgroundColor:'blue',
        width:200,
        height:200
    },
    flex2:{
        backgroundColor:'green',
        width:200,
        height:200
    },
    flexall:{
        flexDirection:"column",
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    head:{
        fontSize:20,
        color:"black",
        textAlign:"center",
        fontFamily:'Montserrat-SemiBold',
        marginVertical:10
    },
    back:{
        fontSize:14,
        color:"black",
        backgroundColor:"#619eff",
        textAlign:'center',
        paddingHorizontal:5,
        borderRadius:10,
        width:98,
        fontFamily:"Poppins-Regular",        
    },
    mainback:{
        
        alignItems:"center",
        justifyContent:"center",
        marginVertical:30,

    }
})

export default Style;