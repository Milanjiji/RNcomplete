import React , {useState, useRef} from 'react';
import { View,Text,StyleSheet,Button } from 'react-native';

import ConfirmGame from '../components/ConfirmGame';
import Card from '../components/Card';


const generateRnd = (min,max,exculde) =>{
    min = Math.ceil(min);
    max = Math.floor(max);


    const rndNum = Math.floor(Math.random() * (max-min)) + min;

    if(rndNum === exculde){
        return generateRnd(min,max,exculde)
    }else{
        return rndNum;
    }
}

const Game = props => {
    const [currentGuess,setGuess] = useState(generateRnd(1,100,52));
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const nextGuess = direction =>{
        if((direction == 'lower' && currentGuess < 52 ) ||
        (direction == 'greater' && currentGuess > 52 ) ){
            alert('dont lie');
            return;
        }
        if(direction == 'lower'){
            currentHigh.current = currentGuess;
        }else{
            currentLow.current = currentGuess;
        }
        const nextnumber = generateRnd(currentLow,currentHigh,currentGuess );
        setGuess(nextnumber)

    }
    console.log(currentGuess);
    return (
        <Card>
            
            
            <Text>
                {currentGuess}
            </Text>
            <Button title='LOWER' onPress={nextGuess.bind(this,'lower')}   />
            <Button title='GREATER' onPress={nextGuess.bind(this,'greater')} />
        </Card>
    );
}

const styles = StyleSheet.create({

})

export default Game;