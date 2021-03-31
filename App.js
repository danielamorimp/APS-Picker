import React, {Component}from 'react';
import {StyleSheet,SafeAreaView, Text} from 'react-native'
import {Picker} from '@react-native-picker/picker';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      curso: 0,
      cursos:[
        {key: 1, nome: 'Administração'},
        {key: 2, nome: 'Ciências Contábeis'},
        {key: 3, nome: 'Sistemas de informação'}
      ]
    }
  }


  render(){

    let cursoItem = this.state.cursos.map((v, k)=>{
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })

    return( 
      <SafeAreaView  >
       <Text style = {styles.titulo}>Selecione os Parâmentros</Text>
       <Picker
        selectedValue={this.state.curso}
        onValueChange={(itemValue, itemIndex) => this.setState({curso: itemValue})}
        >
          {cursoItem}
       </Picker>
       <Text style = {styles.relatorio}>Nome: Daniel de Amorim</Text>
       <Text style = {styles.relatorio}>Curso: Sistemas de Informacao</Text>
       <Text >{this.state.cursos[this.state.curso].nome}</Text>
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