import React, { useEffect, useState } from "react";
import { Link } from "expo-router";
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
import { getData, Movie } from "@/apiCalls/Api";
import imageData from "../NewMovieData/newMovie";
import { Entypo } from "@expo/vector-icons";
import { Pressable } from "react-native";
import CardScroll from "@/components/CardScroll";

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
			{genres.map((genres) => (
				<CardScroll genre={genres} />
			))}
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
		gap:10,
	},
	cardStyle: {
		marginHorizontal:10,
		
	},
	carousel: {
		paddingVertical: 20,
	},
});
