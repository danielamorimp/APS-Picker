import React, {Component}from 'react';
import {StyleSheet,SafeAreaView, Text,TextInput, Slider, Switch, ScrollView, Button, Alert} from 'react-native'
import {Picker} from '@react-native-picker/picker';

class App extends Component{


  constructor(props){
    super(props);

    this.state = {
      toggled : false,
      sliderValue: 5,
      nomeCompleto: '',
      idade: '',
      curso: 0,
      value: 0,
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
      sexo: 0,
      sexos:[
        {key: 1, nome: 'Feminino'},
        {key: 2, nome: 'Masculino'},
      ],
    }
  }

  togleSwitch = (value) => {
    this.setState ({toggled : value})
  }

  render(){

    const salvar = () =>{
      Alert.alert(
        "Confirmação",
        "Deseja realmente salvar?",
        [
          {
            text: "Sim",
            onPress: () => console.log("Sim")
          },
          {
            text: "Não",
            onPress: () => console.log("Não")
          }
        ]
      )
    }


    let cursoItem = this.state.cursos.map((v, k)=>{
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })

    let periodoItem = this.state.periodos.map((v, k)=>{
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })

    let turnoItem = this.state.turnos.map((v, k)=>{
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })
    let sexoItem = this.state.sexos.map((v, k)=>{
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })


    return( 
      <SafeAreaView  >   
        <ScrollView style={styles.scrollView}> 
       <Text style = {styles.tituloParametros}>Selecione os Parâmentros</Text>
       <TextInput
          placeholder = 'Digite seu nome'
          onChangeText = {(nomeCompleto) => this.setState({nomeCompleto})}
          value={this.state.nomeCompleto}
      />
       <TextInput
          placeholder = 'Digite sua idade'
          onChangeText = {(idade) => this.setState({idade})}
          value={this.state.idade}
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

       <Picker
        selectedValue={this.state.sexo}
        onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}
        >
          {sexoItem}
       </Picker>
       <Text style = {styles.relatorio}>    Renda</Text>
       <Slider
        maximumValue={10000}
        minimumValue={0}
        step={1}
        minimumTrackTintColor="red"
        maximumTrackTintColor="blue"
        value={this.state.sliderValue}
        onValueChange={value => this.setState({sliderValue: value})}
       />
        <Text style = {styles.relatorio}>    R$ {this.state.sliderValue},00</Text>
        
       <Text style = {styles.relatorio}> Ganhou Bolsa: {this.state.toggled? "SIM": "NAO"} </Text>
       <Switch onValueChange = {this.togleSwitch}
                value = {this.state.toggled}/>
      
          <Text style = {styles.titulo}>Informações inseridas</Text>
          <Text style = {styles.relatorio}> Nome: {this.state.nomeCompleto} </Text>
          <Text style = {styles.relatorio}> Idade: {this.state.idade} </Text>
          <Text style = {styles.relatorio}> Curso: {this.state.cursos[this.state.curso].nome}</Text>
          <Text style = {styles.relatorio}> Período: {this.state.periodos[this.state.periodo].nome}</Text>
          <Text style = {styles.relatorio}> Turno: {this.state.turnos[this.state.turno].nome}</Text>
          <Text style = {styles.relatorio}> Sexo: {this.state.sexos[this.state.sexo].nome}</Text>
          <Text style = {styles.relatorio}> Renda: R$ {this.state.sliderValue},00</Text>
          <Text style = {styles.relatorio}> Ganhou Bolsa: {this.state.toggled? "SIM": "NAO"} </Text>

          <Button title = "Salvar Informações" onPress={salvar} />
        </ScrollView>  
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