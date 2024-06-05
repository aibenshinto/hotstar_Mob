import { StatusBar } from "expo-status-bar";
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	ScrollView,
	Pressable,
} from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import CardScroll from "@/components/CardScroll";
import React, { useState } from "react";
import { useFavorites } from "./FavoritesContext";


export default function ModalScreen() {
	const { posterImg, title, parsedData } = useLocalSearchParams();

	 const { favorites, setFavorites } = useFavorites();

	const handlePress = () => {
		if (!favorites.includes(posterImg)) {
			setFavorites([...favorites, posterImg]);
		} else {
			const updatedFavorites = favorites.filter((img) => img !== posterImg);
			setFavorites(updatedFavorites);
		}
	}
	console.log(posterImg);
	 console.log("Favorites:", favorites);

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.imageText}>
				<Image source={{ uri: `${posterImg}` }} style={styles.imageStyle} />
				<Pressable style={styles.backButton}>
					<Link href={"../"}>
						<View style={styles.backButtonBackground}>
							<Feather name='x' size={45} color='white' />
						</View>
					</Link>
				</Pressable>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.text}>2024 | 2h.22m | 4 languages</Text>
				<Pressable style={styles.watchButton}>
					<Text style={styles.watchText}>Watch Now</Text>
				</Pressable>
				<Text style={styles.description}>
					La alegría, la tristeza, la ira, el miedo y el asco han llevado a cabo
					una operación exitosa en todos los sentidos. Sin embargo, cuando
					aparece la ansiedad, no están seguros de cómo sentirse.
				</Text>
				<View style={styles.propContainer}>
					<View style={styles.prop}>
						<FontAwesome name='plus' size={30} color='white' />
						<Text style={styles.propText}>Watch List</Text>
					</View>
					<View style={styles.prop}>
						<FontAwesome name='share' size={30} color='white' />
						<Text style={styles.propText}>Share</Text>
					</View>
					<View style={styles.prop}>
						<Pressable style={styles.prop} onPress={handlePress}>
							<FontAwesome
								name={favorites.includes(posterImg) ? "heart" : "heart-o"}
								size={30}
								color={favorites.includes(posterImg) ? "red" : "white"}
							/>
							<Text style={styles.propText}>Heart</Text>
						</Pressable>
					</View>
					<View style={styles.prop}>
						<FontAwesome name='star-o' size={30} color='white' />
						<Text style={styles.propText}>Star</Text>
					</View>
				</View>
				<CardScroll genre={parsedData} />
			</View>
		</ScrollView>
	);
}
console.log();
const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		justifyContent: "flex-start",
		padding: 3,
	},
	backButton: {
		position: "absolute",
		top: 40,
		right: 20,
		zIndex: 1,
	},
	backButtonBackground: {
		backgroundColor: "rgba(84, 82, 82, 0.7)",
		borderRadius: 50,
	},
	title: {
		fontSize: 40,
		fontWeight: "bold",
		textAlign: "center",
		color: "white",
		marginTop: 20,
	},
	text: {
		color: "white",
		alignSelf: "center",
		padding: 15,
		fontSize: 20,
	},
	watchButton: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
		height: 50,
		borderRadius: 12,
		marginVertical: 10,
	},
	watchText: {
		fontSize: 25,
		fontWeight: "bold",
	},
	description: {
		alignSelf: "center",
		padding: 15,
		fontSize: 20,
		color: "grey",
	},
	propContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		paddingVertical: 20,
	},
	prop: {
		alignItems: "center",
	},
	propText: {
		color: "white",
	},
	imageText: {
		width: "100%",
	},
	imageStyle: {
		width: "100%",
		height: 250,
		borderRadius: 10,
	},
});
