import { StyleSheet , Image , SafeAreaView , ScrollView} from 'react-native';


import { Text, View   } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    
    <ScrollView style={styles.container}>
      <View style={styles.title}>
      <Image  source={require('../../assets/images/samplemovie.jpg')} 
        style={styles.image}/>
       
      </View>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,

  },
  title: {
    height:'100%',
    width:'100%',
    backgroundColor:'red',
    

  },
  image: {

 alignSelf:'center'
    //  objectFit: 'stretch', // You can use 'contain', 'cover', 'stretch', 'center'
  },

});



