import React, {useState, useEffect} from "react"
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Formulario  from './Componentes/Formulario';

export default function App() {

 const [busqueda, guardarBusqueda ] = useState({
   ciudad:"",
   pais: "",
})

const [consultar, guardarConsultar] = useState(false);

 
useEffect(() =>{
  if(consultar){
  console.log("Consultando la API")
  }
  },[consultar])


const ocultarTeclado = ()=>{
Keyboard.dismiss();
  }
  return (
    <>
    <TouchableWithoutFeedback onPress={()=>ocultarTeclado()}>
    <View style={styles.app}>
      <View style={styles.contenido}>
        <Formulario
        busqueda={busqueda}
        guardarBusqueda={guardarBusqueda}
        guardarConsultar={guardarConsultar} />  
      </View>  
    </View>
    </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  app:{
   flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "skyblue"
  },
  contenido:{
    marginHorizontal: "2.5%"
  }
});
