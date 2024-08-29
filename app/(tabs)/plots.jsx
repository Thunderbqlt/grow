import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { config, databases } from '../../lib/appwrite.js';
import CustomButton from '../../components/CustomButton';
import { Picker } from '@react-native-picker/picker';

const Plots = () => {
  const [selectedPlot, setSelectedPlot] = useState("66c123d8000ccb68ad94");
  useEffect(() => {
    if (selectedPlot) {
      getSuggestions();
    }
  }, [selectedPlot]);


  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    getSuggestions();
  }, []);

  async function getSuggestions() {
    const res = await databases.listDocuments(config.databaseId, selectedPlot);

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
        selectedPlot,
        'unique()', 
        { plant: text } 
      );
      getSuggestions();
      setText('');
    }


 

  return (
    <SafeAreaView>
        <Picker
          selectedValue={selectedPlot}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedPlot(itemValue)
          }>
          <Picker.Item label="Plot 1" value="66c123d8000ccb68ad94" />
          <Picker.Item label="Plot 2" value="66cd0e6700146d302820" />
          <Picker.Item label="Plot 3" value="66cd0e870022891b18de" />
        </Picker>
      <TextInput className="text-2xl text-black text-center font-psemibold"
        placeholder='What is planted here?'
        value={text}
        onChangeText={handleChangeText}
        

      />
      <View className="justify-center items-center">
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
      </View>
    </SafeAreaView>
  )
}

export default Plots   

const styles = StyleSheet.create({})