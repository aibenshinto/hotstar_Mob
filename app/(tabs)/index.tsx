import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, ScrollView, View, FlatList, Dimensions, Text } from 'react-native';
import Card from '@/components/Card';
import { LinearGradient } from 'expo-linear-gradient';
import { getData, Movie } from '@/apiCalls/Api'; 

const genres = [
  // 'action-adventure',
  'animation',
  'classic',
  'comedy',
  'drama',
  'horror',
  'family',
  'mystery',
  // 'scifi-fantasy',
  'western',
];

export default function TabOneScreen() {
  const [data, setData] = useState<{ [key: string]: Movie[] }>({});

  useEffect(() => {
    const fetchData = async () => {
      const genreData: { [key: string]: Movie[] } = {};
      for (const genre of genres) {
        genreData[genre] = await getData(genre);
      }
      setData(genreData);
    };

    fetchData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.title}>
        <Image 
          source={require('../../assets/images/samplemovie.jpg')} 
          style={styles.image}
        />
        <View style={styles.gradientContainer}>
          <LinearGradient
            colors={['rgba(0, 0, 0, 1)', 'transparent']}
            style={styles.topGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          />
          <LinearGradient
            colors={['transparent', 'rgba(0, 0, 0, 1)']}
            style={styles.bottomGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          />
        </View>
      </View>

      {genres.map((genre) => (
        <View key={genre} style={styles.genreSection}>
          <Text style={styles.genreTitle}>{genre}</Text>
          <FlatList
            data={data[genre]}
            renderItem={({ item }) => <Card title={item.title} image={{ uri: item.posterURL }} />}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carousel}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20, 
  },
  title: {
    height: height * 0.5, 
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', 
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  gradientContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  topGradient: {
    height: '30%', 
  },
  bottomGradient: {
    height: '70%', 
    marginTop: 'auto', 
  },
  genreSection: {
    marginVertical: 10,
  },
  genreTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color:'white'
  },
  carousel: {
    paddingVertical: 20,
  },
});
