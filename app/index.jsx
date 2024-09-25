import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { Link } from 'expo-router';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { router } from 'expo-router'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image //Image of the Environmental Club gardens
          source={images.growbanner}
          className="max-w-[380px] w-full h-[250px] rounded-xl mt-6 ml-7"
        />
      <Text className="text-3xl font-pmedium">Welcome to Grow!</Text>
      <StatusBar style="auto" />  
      <CustomButton //Button leading to the home page
          title="Start Now"
          handlePress={() => router.push('/home')}
          containerStyles="w-[150px] mt-3 bg-secondary"
      />
      <Image //Image of the Environmental Club gardens
          source={images.gardenvolunteers}
          className="max-w-[380px] w-full h-[290px] rounded-xl mt-6"
        />
    </View>
  );  
}


