
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Header from './components/Header';
import Game from './screens/Game';
import Startgame from './screens/Startgame';

const App = (props) =>{
  return(
    <View>
      <Header title="Guess" />
      <Startgame />
      <Game/>
    </View>
  );
}

const styles = StyleSheet.create({

})
export default App;
