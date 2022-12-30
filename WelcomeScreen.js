import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// html

function FlickeringImage({ source }) {
  const [opacityValue] = useState(new Animated.Value(1));
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    function animate() {
      if (!isMounted) {
        return;
      }

      Animated.sequence([
        Animated.timing(opacityValue, {
          toValue: .3,
          duration: 70,
          useNativeDriver: true
        }),
        Animated.timing(opacityValue, {
          toValue: .8,
          duration: 30,
          useNativeDriver: true
        })
      ]).start(() => animate());
    }

    animate();

    return () => {
      setIsMounted(false);
    };
  }, []);

  return (
    <Animated.Image
      style={styles.logo}
      source={source}
      opacity={opacityValue}
    />
  );
}

const WelcomeScreen = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <FlickeringImage source={require('./scenaralogo.png')} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('EventList')}
        activeOpacity={.35} >
        <Text style={styles.text}>WELCOME</Text>
      </TouchableOpacity>
    </View>
  );
};

// css

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  logo: {
    width: 250,
    height: 200,
    marginTop: 330,
    marginBottom: 230,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 140,
    borderRadius: 12,
    borderColor: '#f8d26b',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'black',
    marginBottom: 0,
  },
  text: {
    fontFamily: 'sans-serif',
    fontSize: 18,
    lineHeight: 21,
    fontWeight: '700',
    letterSpacing: 2,
    color: '#f8d26b',
  },
});

export default WelcomeScreen;
