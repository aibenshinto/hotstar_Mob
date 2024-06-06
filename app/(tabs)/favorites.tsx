import { StyleSheet, Image, ScrollView, Text, View } from "react-native";
import { useFavorites } from "../FavoritesContext";
import Card from "@/components/Card";

export default function TabTwoScreen() {
	const { favorites } = useFavorites();

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.FavoritesText}>Favorites movies</Text>
			<View style={styles.favcontainer}>
				{favorites.length > 0 ? (
					favorites.map((favorite) => <Card image={{ uri: favorite }} />)
				) : (
					<Text style={styles.noFavoritesText}>No favorites added yet.</Text>
				)}
			</View>
		</ScrollView>
	);
}


const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		padding: 10,
	},
	FavoritesText: {
		marginTop: 70,
		color: "grey",
		fontSize:30,
	},
	favcontainer: {
		flexDirection: "row",
		borderWidth: 2,
		flexWrap: "wrap",
		flex: 1,
		justifyContent: "space-between",
		alignContent: "space-between",
		rowGap: 20,
	},
	noFavoritesText: {
		fontSize: 18,
		color: "grey",
		
	},
});
