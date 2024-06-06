import  { View,Text,StyleSheet } from "react-native";


export default function App() {

  return(
    <View style={styles.background}>
      <Text style={styles.text}>Welcome back Matlhogonolo Continue where you Left</Text>
    </View>
  )

}

const styles= StyleSheet.create({

  text:{
    backgroundColor:'blue',fontSize:28
  },
  background:{
    flex:1,justifyContent:'center',alignItems:'center'
  }
})