import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Image,
	ScrollView,
	View,
	FlatList,
	Text,
	TouchableOpacity,
	Dimensions,
} from "react-native";
import Card from "@/components/Card";
import NewMoviewSlid from "@/components/NewMovieScroll";
import { LinearGradient } from "expo-linear-gradient";
import { getData, Movie } from "@/apiCalls/Api";
import imageData from "../NewMovieData/newMovie";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const genres = [
	// 'action-adventure',
	"animation",
	"classic",
	"comedy",
	"drama",
	"horror",
	"family",
	"mystery",
	// 'scifi-fantasy',
	"western",
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
			{/* <View style={styles.title}>
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
      </View> */}

			<NewMoviewSlid
				image={imageData[0].bgImage}
				titleImage={imageData[0].fImage}
				text={imageData[0].Mdata}
			/>
			<View style={styles.buttonContainer}>
				<TouchableOpacity>
					<Text style={styles.button1}>Watch Now</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button2}>
					<Entypo name='plus' size={18} color='white' />
				</TouchableOpacity>
			</View>
			<View>
				{genres.map((genre) => (
					<View key={genre} style={styles.genreSection}>
						<Text style={styles.genreTitle}>{genre}</Text>
						<FlatList
							data={data[genre]}
							renderItem={({ item }) => (
								<Card title={item.title} image={{ uri: item.posterURL }} />
							)}
							keyExtractor={(item) => item.id}
							horizontal
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={styles.carousel}
						/>
					</View>
				))}
			</View>
		</ScrollView>
	);
}

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		paddingBottom: 20,
		gap: 70,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "center",

		gap: 15,
	},
	button1: {
		backgroundColor: "grey",
		paddingHorizontal: 50,
		paddingVertical: 10,
		color: "white",
		borderRadius: 4,
	},
	button2: {
		backgroundColor: "grey",
		color: "white",
		padding: 10,
		borderRadius: 4,
	},

	genreSection: {
		paddingVertical: 10,
	},
	genreTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginLeft: 10,
		color: "white",
	},
	carousel: {
		paddingVertical: 20,
	},
});
