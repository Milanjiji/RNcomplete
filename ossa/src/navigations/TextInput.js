import React, { useState } from 'react';
import { View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
 } from 'react-native';

const Textinput = ({navigation}) => {
    const [text, setText] = useState('The text typed will appear here');
    
    return (
        <View style={styles.main} >
            <Text style={styles.head}>TextInput</Text>
            <TextInput style={styles.text} placeholder="place holder" onChangeText={test => setText(test)} /> 
            <Text style={styles.result}>{text}</Text>
            <Text style={styles.note}>
                here instead of direct input i am using props 
            </Text>
            <View style={styles.mainback} >
                <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                        <Text style={styles.back} >Go Back</Text>
                </TouchableOpacity>
            </View>
            
        </View> 
    );
}

const styles = StyleSheet.create({
    main:{
        
        flex:1
    },
    text:{
        marginHorizontal:10,
        borderBottomColor:"black",
        borderBottomWidth:1
    },
    head:{
        fontSize:20,
        color:"black",
        textAlign:"center",
        fontFamily:'Montserrat-SemiBold',
        paddingVertical:20
    },
    result:{
        fontFamily:"Poppins-Regular",
        
        paddingVertical:7,
        paddingHorizontal:10,
        fontSize:15,
        color:"black"
    },
    note:{
        fontFamily:"Poppins-Regular",
        
        paddingVertical:7,
        paddingHorizontal:10,
        fontSize:15,
        color:"black"
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
        marginTop:30,

    }
})

export default Textinput;