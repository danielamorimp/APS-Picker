import React, {Component}from 'react';
import {StyleSheet,SafeAreaView, Text,TextInput } from 'react-native'
import {Picker} from '@react-native-picker/picker';

class App extends Component{

  constructor(props){
    super(props);

    nome: ''


    this.state = {
      curso: 0,
      cursos:[
        {key: 1, nome: 'Administração'},
        {key: 2, nome: 'Ciências Contábeis'},
        {key: 3, nome: 'Sistemas de informação'}
      ],

      periodo: 0,
      periodos:[
        {key: 1, nome: 'Sétimo'},
        {key: 2, nome: 'Segundo'},
        {key: 3, nome: 'Terceiro'}
      ],

      turno: 0,
      turnos:[
        {key: 1, nome: 'Manhã'},
        {key: 2, nome: 'Tarde'},
        {key: 3, nome: 'Noite'}
      ],
    }
  }


  render(){

    let cursoItem = this.state.cursos.map((v, k)=>{
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })

    let periodoItem = this.state.periodos.map((v, k)=>{
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })

    let turnoItem = this.state.turnos.map((v, k)=>{
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })


    return( 
      <SafeAreaView  >      
       <Text style = {styles.tituloParametros}>Selecione os Parâmentros</Text>
       <TextInput
          placeholder = 'Digite seu nome'
      />
       <Picker
        selectedValue={this.state.curso}
        onValueChange={(itemValue, itemIndex) => this.setState({curso: itemValue})}
        >
          {cursoItem}
       </Picker>
       
       <Picker
        selectedValue={this.state.periodo}
        onValueChange={(itemValue, itemIndex) => this.setState({periodo: itemValue})}
        >
          {periodoItem}
       </Picker>
       
       <Picker
        selectedValue={this.state.turno}
        onValueChange={(itemValue, itemIndex) => this.setState({turno: itemValue})}
        >
          {turnoItem}
       
       </Picker>
       <Text style = {styles.titulo}>Informações inseridas</Text>
       <Text style = {styles.relatorio}> Nome:{this.state.nome} </Text>
       <Text style = {styles.relatorio}> Curso: {this.state.cursos[this.state.curso].nome}</Text>
       <Text style = {styles.relatorio}> Período: {this.state.periodos[this.state.periodo].nome}</Text>
       <Text style = {styles.relatorio}> Turno: {this.state.turnos[this.state.turno].nome}</Text>
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

  tituloParametros:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  relatorio:{
    fontSize: 15,
    marginTop: 20,
  }
})


export default App;