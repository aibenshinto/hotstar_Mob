import { StyleSheet, Image, ScrollView, Text, View } from "react-native";
import { useFavorites } from "../FavoritesContext";

export default function TabTwoScreen() {
	const { favorites } = useFavorites();

	return (
		<ScrollView contentContainerStyle={styles.container}>
			
			
			{favorites.length > 0 ? (
				favorites.map((favorite, index) => (
					<Image
						key={index}
						source={{ uri: favorite }}
						style={styles.imageStyle}
					/>
				))
			) : (
				<Text style={styles.noFavoritesText}>No favorites added yet.</Text>
			)}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
	imageStyle: {
		width: 200,
		height: 300,
		margin: 10,
	},
	noFavoritesText: {
		fontSize: 18,
		color: "grey",
	},
});
