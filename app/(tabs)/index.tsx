import { StyleSheet , Image , SafeAreaView} from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View   } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
      <Image  source={require('../../assets/images/sample_movie_mob1.webp')} />
      </View>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  title: {
    flex: 0.5,

 
  },
  img:{
    height:'100%',
    width: '100%',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});



