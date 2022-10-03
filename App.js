import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput} from "react-native-gesture-handler";

const Stack = createStackNavigator();

export default function App() {
  const [pass, setpass] = useState("1234")
  const [mail, setmail] = useState("xxx@gmail.com")
  const [PASS, setPASS] = useState("")
  const [MAIL, setMAIL] = useState("")
  
  const login=()=>{
    if(pass==PASS && mail==MAIL){
      alert("Giriş Başarılı")
    }
    else {
      alert("Şİfre veya mail hatalı")
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
      style={styles.TextInput}
      placeholder="Mail"
      value="{MAIL}"
      onChangeText={setMAIL}
      />
      <TextInput
      style={styles.TextInput}
      placeholder="password"
      value="{PASS}"
      onChangeText={setPASS}
      />
      <View style={styles.secondview}>

        <TouchableOpacity 
        style={styles.tchable}
        onPress={login}
        >
          <Text style={styles.btn}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tchable}>
          <Text style={styles.btn}>Register</Text>
        </TouchableOpacity>
      
      </View>
    </View>
  )
}