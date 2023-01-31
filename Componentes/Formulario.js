import React, {useState} from "react";
import {
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  Animated,
  Alert
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const Formulario = ({busqueda,guardarBusqueda, guardarConsultar}) => {
  
  const {pais, ciudad}= busqueda;

  const [animacionboton]=useState(new Animated.Value(1));  

  const consultarClima=()=>{
    if(pais.trim()===" "|| ciudad.trim()===" "){
      mostrarAlerta();
      return;
    }
    //Consultando la Api
    guardarConsultar(true)
  }


  const mostrarAlerta = ()=>{
    Alert.alert(
      "Error",
      "No seas pendejo, rellena el formulario hdp",
      [{text: "entendido"}]
    )
  }


  const animacionEntrada = () => {
    Animated.spring(animacionboton,{
      toValue: .3,
      useNativeDriver: true
    }
      ).start();
  }

  const animacionSalida = () => {
    Animated.spring(animacionboton,{
      toValue: 1,
      friction:1,
      tension: 20,
      useNativeDriver: true
    }
      ).start();
  }

  const estiloAnimacion ={
    transform: [{scale: animacionboton}]
  }

  return (
    <>
    <View  >
      <View >
        <View>
          <TextInput 
          onChangeText={ciudad => guardarBusqueda ({...busqueda, ciudad})}
          value = {ciudad} placeholder="Ciudad" placeholderTextColor="#666"  style={styles.input}/>
        </View>
      </View>
      <View>
        <Picker 
        onValueChange={pais=>guardarBusqueda({...busqueda,pais})}
        selectedValue={pais}
        itemStyle={{height:120,backgroundColor: "#FFF"}}>
          <Picker.Item label="-Seleecion una opcion-"value=""/>
          <Picker.Item label="Estados Unidos" value="US"/>
          <Picker.Item label="Mexico" value="MX"/>
          <Picker.Item label="Argentina" value="AR"/>
          <Picker.Item label="Colombia" value="CO"/>
          <Picker.Item label="Costa Rica" value="CR"/>
          <Picker.Item label="España" value="ES"/>
          <Picker.Item label="Perú" value="PE"/>
        </Picker>
      </View> 
      <TouchableWithoutFeedback
      onPressIn={()=>animacionEntrada()}
      onPressOut={()=>animacionSalida()}
      onPress={()=>consultarClima()}
      >
        <Animated.View style={[styles.btnBuscar,estiloAnimacion]}>
          <Text style={styles.textoBuscar}>Buscar clima</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
    </>
  );
};
const styles = StyleSheet.create({
input:{
  padding: 10,
  height:50,
  width: 300,
  backgroundColor: '#FFF',
  fontSize: 20,
  marginBottom: 20  
},
btnBuscar:{
marginTop: 50,
backgroundColor: "#000",
padding: 10,
justifyContent: "center"
},
textoBuscar:{
  color: "#FFF",
  fontWeight: "bold",
  textTransform: "uppercase",
  textAlign: "center",
  fontSize: 18

},
});
export default Formulario;
