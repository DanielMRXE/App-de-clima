import { StyleSheet, View, TouchableWithoutFeedback, Keyboard,useState } from 'react-native';
import Formulario  from './Componentes/Formulario';

export default function App() {
  
  const ocultarTeclado = ()=>{
Keyboard.dismiss();
  }

  return (
    <>
    <TouchableWithoutFeedback onPress={()=>ocultarTeclado()}>
    <View style={styles.app}>
      <View style={styles.contenido}>
        <Formulario/>
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
