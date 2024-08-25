import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { config, databases } from '../../lib/appwrite.js';
import CustomButton from '../../components/CustomButton';

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

  const handleAddPress = async () => {
      await databases.createDocument(
        config.databaseId,
        config.plotCollectionId,
        'unique()', 
        { plant: text } 
      );
      getSuggestions();
      setText('');
    }

 

  return (
    <SafeAreaView>
      <Text>Plots</Text>
      <TextInput
        placeholder='What is planted here?'
        value={text}
        onChangeText={handleChangeText}

      />
      <CustomButton 
          title="Add"
          handlePress={handleAddPress}
          containerStyles="w-[80px] h-[20px] mt-7"
        />
      <Text>This plot contains:</Text>
      <FlatList className="h-screen"
        data={suggestions}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <View className="mt-5">
            <Text>{item.plant}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Plots   

const styles = StyleSheet.create({})