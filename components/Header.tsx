import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet , Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Header = () => {
  return (
    <View style={styles.headerContainer}>     
      <LinearGradient
        colors={['rgba(0, 0, 0,0.7)', 'transparent']}
        style={StyleSheet.absoluteFill}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      ></LinearGradient>
      <View style={styles.headercontent}>
      <Image 
        source={require('../assets/images/logo1.png')}
        style={styles.headerImage} 
      />
      
      <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed')}>
        <LinearGradient
          colors={['rgba(247, 185, 49,.5)', 'transparent']}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={styles.buttonText}>Subscribe</Text>
        </LinearGradient>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position:'absolute',
    alignItems: 'center',
    width: '100%', 
    height: 70,
   
  },
  headercontent:{
    marginTop:21,
    // marginLeft:20,
    // marginRight:20,
  height:45,
  width:'100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

},
  headerImage: {
    width: 65, 
    height: 60, 
    
  },
  button: {
    marginRight:8,
    width: 95, 
    height: 33,
    borderWidth: 1,
    borderColor: '#daa520',
    borderRadius: 5,
    overflow: 'hidden',
  },
  gradient: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#daa520',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
 
});

export default Header;