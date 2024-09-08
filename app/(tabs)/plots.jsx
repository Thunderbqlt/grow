import { StyleSheet, Text, View, FlatList, TextInput} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { config, databases } from '../../lib/appwrite.js';
import CustomButton from '../../components/CustomButton';
import { Picker } from '@react-native-picker/picker';
import Checkbox from 'expo-checkbox';

const Plots = () => {
  //Sets the default selected plot to Plot 1
  const [selectedPlot, setSelectedPlot] = useState("66c123d8000ccb68ad94");
  useEffect(() => {
    if (selectedPlot) {
      getPlantInfo();
    }
  }, [selectedPlot]);


  const [plantInfo, setPlantInfo] = useState([]);

  useEffect(() => {
    getPlantInfo();
  }, []);
  //Gathers the information for each plot
  async function getPlantInfo() {
    const res = await databases.listDocuments(config.databaseId, selectedPlot);

    console.log(res); 
    setPlantInfo(res.documents);
  }

  const [text, setText] = useState('');
  const [notes, setNote] = useState('');
  //Updates the plant name input to display the text being input
  const handleChangeText = (input) => {
    setText(input);
  };
  //Updates the note input to display the text being input
  const handleChangeNote = (input) => {
    setNote(input);
  };
  //Handles adding the data input to the database by creating a new document
  const handleAddPress = async () => {
      await databases.createDocument(
        config.databaseId,
        selectedPlot,
        'unique()', 
        { plant: text,
          info: notes
         } 
      );
      getPlantInfo();
      //Clears the input view after adding the data
      setText('');
      setNote('');
    }
  //Handles the checkbox's state
  const [isChecked, setChecked] = useState(false);
 
  return (
    <SafeAreaView>
        
        <Picker //Allows you to select which plot you want to view
          selectedValue={selectedPlot}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedPlot(itemValue)
          }>
          <Picker.Item label="Plot 1" value="66c123d8000ccb68ad94" />
          <Picker.Item label="Plot 2" value="66cd0e6700146d302820" />
          <Picker.Item label="Plot 3" value="66cd0e870022891b18de" />
        </Picker>
      <TextInput //Input of the new plants name
        className="text-2xl text-black text-center font-psemibold"
        placeholder='What is planted here?'
        value={text}
        onChangeText={handleChangeText}
      />
      <TextInput //Input for notes about the plant
        className="text-2xl text-black text-center font-psemibold mt-3"
        placeholder='Any extra notes about this plant?'
        value={notes}
        onChangeText={handleChangeNote}
      />
      <View className="justify-center items-center">
      <CustomButton //Button which adds the input data to the database
          title="Add"
          handlePress={handleAddPress}
          containerStyles="w-[80px] h-[20px] mt-7 bg-secondary"
        />
      <Text>This plot contains:</Text>
      
      <FlatList //List to display the plots plant information
        className="h-[300px]"
        data={plantInfo}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <View className="mt-5">
            <Text>{item.plant}</Text>
            <Text>{item.info}</Text>
            <Text>Harvested: <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#6AE364' : undefined}
            /></Text>
          </View>          
        )}
      />
      </View>
    </SafeAreaView>
  )
}

export default Plots   

const styles = StyleSheet.create({})