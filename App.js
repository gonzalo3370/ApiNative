
import React from 'react';
import {Button, TextInput, Text, View} from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      Valor1: "0",
      Valor2: "0",
      resultadoFinal: "Traer resultado desde la Api"
    };
  }
CambiarValor1 = (Loescrito) =>{
  let num = parseInt(Loescrito);
  this.setState({Valor1: num }); 
}

CambiarValor2 = (Loescrito2) =>{
  let num2 = parseInt(Loescrito2);
  this.setState({Valor2: num2 }); 
}

suma = (a,b) => {
  return a + b;      
}

LlamarAPI = () => fetch("http://192.168.0.97/api/operaciones?a=" + this.state.Valor1 + "&b=" + this.state.Valor2)
  .then((response) => response.json())
  .then((response) => {
    this.setState({
      resultadoFinal: response.Resultado
    });
  })
  .catch((error) =>{
    console.error(error);
  });


  render(){
    return(
      <View style={{margin: 50, flex: 1, paddingTop:20}}>
        <TextInput
          value = {this.state.Valor1}
          onChangeText = {this.CambiarValor1}
        />
        <TextInput
          value = {this.state.Valor2}
          onChangeText = {this.CambiarValor2}
        />     
        <Button 
          title = "SUMAR"
          onPress= {this.LlamarAPI}
        /> 
        <Text>
        {this.state.resultadoFinal}
        </Text>
        <Text>
        {this.suma(this.state.Valor1,this.state.Valor2)}
        </Text>
      </View>
    );
  }
}