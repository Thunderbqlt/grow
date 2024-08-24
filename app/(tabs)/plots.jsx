import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { config, databases } from '../../lib/appwrite.js';

const Plots = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    getSuggestions();
  }, []);

  async function getSuggestions() {
    const res = await databases.listDocuments(config.databaseId, config.plotCollectionId);

    console.log(res); 
    setSuggestions(res.documents);
  }

  const [text, setText] = useState('');

  const handleChangeText = (input) => {
    setText(input);
  };

  return (
    <SafeAreaView>
      <Text>Plots</Text>
      <TextInput
        placeholder='What is planted here?'
        value={text}
        onChangeText={handleChangeText}

      />
      <Text>You typed: {text}</Text>
      <FlatList
        data={suggestions}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.plant}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Plots   

const styles = StyleSheet.create({})