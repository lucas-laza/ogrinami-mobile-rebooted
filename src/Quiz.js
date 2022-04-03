import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import {useFonts} from 'expo-font';
import FetchApi from "./components/FetchApi";
// import { Button, SafeAreaView } from "react-native-web";



export default function Quiz({navigation}) {
  const [fontLoaded] = useFonts({
    AtmaS: require("../assets/fonts/Atma-SemiBold.ttf"),
    "AtmaB": require("../assets/fonts/Atma-Bold.ttf"),
  });

  const pressHandler = () => {
    navigation.navigate('Home');
  }

  const [quiz, setQuiz] = useState([]);
  useEffect(() => {
    fetch(`http://www.json.ogrinami.com/ogrimobile.php?table=quiz&id=1`)
    .then(function(response) {
        // console.log(response);
        response.json().then(e=>{
            setQuiz(e);

            console.log(quiz);
    
        })
    })
  }, []);

  

  if (!fontLoaded) {
    return null;
  };
  return (
    <View style={styles.container}>
    <View style={styles.header}>
        
                <StatusBar hidden = {true}/>

                <View style={styles.text_header}>
                    <Image
                    style={styles.ogrinami_logo}
                    source={require('./logo_img/ogrinami_logo.png')}/>
                </View>
              
                <View style={styles.text_header}></View>

                <View style={styles.text_header}>
                    <Text style={styles.text_h}>Ogrinami</Text>
                </View>

    </View>

    <ScrollView style={styles.main}>

        <Button   title='Retour' onPress={pressHandler}/>

        <View>
            {/* <FetchApi id={quiz.ext_start} table='texte' texte={true} /> */}
            <FetchApi id={3} table='texte' texte={true} />
        </View>

        <View>
            {/* <FetchApi id={quiz.ext_contenu} table='texte' texte={true} /> */}
            <FetchApi id={4} table='texte' texte={true} />
        </View>

        <View>
            <Button title="Commencer" />
        </View>

    </ScrollView>
   
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : 'midnightblue'
  },
  header:{
    flexDirection : 'row',
    height : '7.25%',
    backgroundColor: 'yellowgreen',

  },
  text_header:{

    flex : 1,
    position: 'relative', left: 0, right: 0, bottom: 0,
    justifyContent : 'center',
    alignItems : 'center',
    fontWeight: 'bold',
  },
  text_h:{
    color : 'white',
    fontSize : 22,
    fontFamily: 'AtmaS',
  },
  ogrinami_logo:{
    height : 80,
    width : 80,
  },
  main:{
    top : 0,
    padding : 20,
    

  },
  planet:{
    height : 850,
    width : '100%',
    backgroundColor : 'midnightblue'
 
  },
  block:{
    
    justifyContent : 'center',
    alignItems : 'center',
    fontWeight: 'bold',
    backgroundColor : 'yellowgreen',
    borderRadius : 15,
    marginBottom : 30,

    

  },
  img:{
    margin : 20,
    width : 300,
    height : 180,
    borderRadius : 15,
  },
  txt:{
    backgroundColor : 'purple',
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    marginBottom : 20,
    width : 300,
    height : 50,
    borderRadius : 15,
  },
  articles:{
    color : 'white',
    fontFamily: 'AtmaS',
    fontSize : 20,

  },
  
});
