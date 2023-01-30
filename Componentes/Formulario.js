import React, {useState} from "react";
import {
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  Animated
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const Formulario = () => {

  const [animacionboton]=useState(new Animated.Value(1));  

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
          <TextInput placeholder="ciudad" placeholderTextColor="#666"  style={styles.input}/>
        </View>
      </View>
      <View>
        <Picker itemStyle={{height:120,backgroundColor: "#FFF"}}>
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
