import {StyleSheet, Text} from 'react-native';
import React, {useEffect} from 'react';

import {Camera, useCameraDevices} from 'react-native-vision-camera';

const requestPermission = async () => {
  const newCameraPermission = await Camera.requestCameraPermission();
  const newMicrophonePermission = await Camera.requestMicrophonePermission();
  console.log(newCameraPermission, newMicrophonePermission);
};

const CameraComponent = () => {
  const devices = useCameraDevices();
  const device = devices.front;

  useEffect(() => {
    requestPermission();
  }, []);


  if (device == null) return <Text>No back camera found</Text>;

  return <Camera style={styles.camera} device={device} isActive={true} />;
};

export default CameraComponent;

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
