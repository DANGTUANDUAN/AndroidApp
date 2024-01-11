import * as React from 'react';
import { View, Text ,Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function HomePage({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontStyle:'italic',fontWeight: 'bold',fontSize: 26,color: 'black'}}>Trang home pages</Text>
      
    </View>
  );
}

function Introduce({navigation}) {
  setTimeout(()=>{
    Alert.alert('Sau 10 giây sẽ tự động chuyển sang trang home page');
    navigation.navigate('Home')
  },10000)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontStyle:'italic',fontWeight: 'bold',fontSize: 26,color: 'black'}}>Đây là trang giới thiệu</Text>
      <Text style={{fontStyle:'italic',fontWeight: 'bold',fontSize: 26,color: 'black'}}>Họ và tên : Đặng Tuấn Duẫn</Text>
      <Text style={{fontStyle:'italic',fontWeight: 'bold',fontSize: 26,color: 'black'}}>Sau 10 giây sẽ chuyển sang trang home page</Text>
    </View>
  );
}



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Introduce" component={Introduce}/>
        <Stack.Screen name="Home" component={HomePage} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
