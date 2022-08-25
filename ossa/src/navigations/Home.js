import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Home = ({navigation}) => {
    return (
        
        <View style={styles.main}>
            <View style={styles.head}>
                <Text style={styles.hletter} >The things i have learned</Text>
            </View>    
            <View style={styles.mainpress} >
                <TouchableOpacity onPress={() => navigation.navigate('Detail')} >
                    <Text style={styles.press} >Detail</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('curly')} >
                    <Text style={styles.press} >curly</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('text')} >
                    <Text style={styles.press} >text</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('style')} >
                    <Text style={styles.press} >style</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('image')} >
                    <Text style={styles.press} >image</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('buttons')} >
                    <Text style={styles.press} >buttons</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        
        
    );
}
const styles = StyleSheet.create({
    main:{
        
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
    press:{
        backgroundColor:"#619eff",
        width:200,
        textAlign:"center",
        padding:10,
        fontSize:18,
        color:"black",
        marginVertical:20,
        borderRadius:15,
        fontFamily:"Poppins-Regular",
    },
    mainpress:{
        alignItems:"center",
    }
})

export default Home;