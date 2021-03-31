import React, {Component}from 'react';
import {StyleSheet,SafeAreaView, Text} from 'react-native'
import {Picker} from '@react-native-picker/picker';

class App extends Component{
  render(){
    return( 
      <SafeAreaView style={styles.container} >
       <Text style = {styles.titulo}>Selecione os Parâmentros</Text>
       <Picker>
         <Picker.Item key={1} value={1} label = "Daniel de Amorim"/>
       </Picker>
       <Text style = {styles.relatorio}>Nome: Daniel de Amorim</Text>
       <Text style = {styles.relatorio}>Curso: Sistemas de Informacao</Text>
      </SafeAreaView>
    )   
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    marginTop: 20,
    flex: 1
  },

  titulo:{
    fontSize: 28,
    fontWeight: 'bold',
  },
  
  relatorio:{
    fontSize: 15,
    marginTop: 20,
  }
})


export default App;