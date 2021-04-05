import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Camera } from 'expo-camera'

//
// IMPORT ZONE
//

export default function TabOneScreen() {
  const [ cameraPermission, setCameraPermission ] = useState(false);
  const [ type, setType] = useState(Camera.Constants.Type.back);


 useEffect(() => {
   (async () => {
     const { status } = await Camera.requestPermissionsAsync();
     setCameraPermission(status === 'granted')
   })();
 }, [])

 if (cameraPermission === false) {
   return <Text> 給一下權限拉~~~ 拜託~~~! </Text>;
 }

  return (
    <View style={styles.container}>
      <Camera 
        ratio="3:4"
        type={type}
        style={{ 
          width: '100%',
          height: '80%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        >
        </Camera>

        <View >
          <TouchableOpacity
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text> 我轉~ </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
function asysnc() {
  throw new Error('Function not implemented.');
}

