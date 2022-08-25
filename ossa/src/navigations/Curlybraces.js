import React , { useState } from 'react';
import { View,Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';





const Curly = ({navigation}) => {

    const [name,setName] = useState('" Your name"');
    const [place,setPlace] = useState('"Your place"');
    const nandp = (first,second) => {
    return first + " from " + second ;
}

    return (
        <View style={styles.main} >
            <View style={styles.head}>
                <Text style={styles.hletter} >Using Curlybraces & RN Hooks</Text>
            </View> 
            <View>
                <TextInput style={styles.textI} placeholder='Your Name' onChangeText={e => setName(e)} />
                <TextInput style={styles.textI} placeholder='Your Place' onChangeText={e => setPlace(e)} />
            </View>            
            <Text style={styles.result} >Hi i am {nandp(name,place)}</Text>
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
        backgroundColor:"#c0d7fc",
        height:1000,
        
    },
    head:{
        alignItems:"center",
        padding:15
    },
    hletter:{
        fontSize:20,
        color:"black",
        width:200,
        textAlign:"center",
        fontFamily:'Montserrat-SemiBold',
    },
    textI:{
        marginHorizontal:10,
        marginVertical:10,
        padding:10,
        color:"black",
        borderBottomColor:"black",
        borderBottomWidth:1
    },
    result:{
        marginHorizontal:10,
        padding:10,
        fontSize:16,
        color:"black",
        fontFamily:"Poppins-Regular",
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

export default Curly;