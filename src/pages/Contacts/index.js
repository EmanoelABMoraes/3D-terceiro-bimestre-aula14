import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles'; 

const Contacts = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Meus Contatos</Text>
      <Button title='tela 2' onPress={()=> navigation.navigate('Information')}/>
    </View>
  );
}

export default Contacts;