import React, { useEffect, useState } from "react";
import { Link, Tabs } from "expo-router";
import {
	StyleSheet,
	Image,
	ScrollView,
	View,
	FlatList,
	Text,
	TouchableOpacity,
	Dimensions,
	ImageSourcePropType,
} from "react-native";
import Card from "@/components/Card";
import NewMoviewSlid from "@/components/NewMovieScroll";
import { LinearGradient } from "expo-linear-gradient";
import { getData, Movie } from "@/apiCalls/Api";
import imageData from "../NewMovieData/newMovie";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Pressable } from "react-native";
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
			<NewMoviewSlid imageData={imageData} />

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
								<Pressable>
									<Link
										href={{
											pathname: "/modal",
											params: {
												posterImg: item.posterURL,
												title: item.title,
											},
										}}
									>
										<Card title={item.title} image={{ uri: item.posterURL }} />
									</Link>
								</Pressable>
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
