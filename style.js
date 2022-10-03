import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  /* FlexDirection belirmedim bu durumda otomatitk olarak y- 
  eksenince ayarlama yapar
  */
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  TextInput:{
    borderWidth:2,
    width:"75%",
    marginTop:10,
    borderRadius:10
  },
  secondview:{
  },
  tchable:{
    backgroundColor:"grey",
    marginTop:10,
    width:200,
    borderColor:"#000000",
    border:3
  },
  btn:{
    color:"red",
    marginTop:5,
    fontSize:15,
    textAlign:"center"
  }
  }
);