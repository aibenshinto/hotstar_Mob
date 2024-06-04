import { StatusBar } from "expo-status-bar";
import {
	Platform,
	StyleSheet,
	Text,
	FlatList,
	View,
	Image,
	TouchableOpacity,
	ScrollView,
	Pressable,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Card from "@/components/Card";
export default function ModalScreen() {
	const { posterImg, title, additionalData } = useLocalSearchParams();
	const parsedData = JSON.parse(additionalData);

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Pressable style={styles.backButton}>
				<Feather name='x' size={35} color='white' />
			</Pressable>
			<View style={styles.imageText}>
				<Image source={{ uri: `${posterImg}` }} style={styles.imageStyle} />
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.text}>2024 | 2h.22m | 4 languages</Text>
				<Pressable style={styles.watchButton}>
					<Text style={styles.watchText}>watch Now</Text>
				</Pressable>
				<Text style={styles.description}>
					La alegría, la tristeza, la ira, el miedo y el asco han llevado a cabo
					una operación exitosa en todos los sentidos. Sin embargo, cuando
					aparece la ansiedad, no están seguros de cómo sentirse.
				</Text>
				<View style={styles.propContainer}>
					<View style={styles.prop}>
						<FontAwesome name='plus' size={30} color='white' />
						<Text style={styles.propText}>watch list</Text>
					</View>
					<View style={styles.prop}>
						<FontAwesome name='share' size={30} color='white' />
						<Text style={styles.propText}>share </Text>
					</View>
					<View style={styles.prop}>
						<FontAwesome name='heart-o' size={30} color='white' />
						<Text style={styles.propText}>heart</Text>
					</View>
					<View style={styles.prop}>
						<FontAwesome name='star-o' size={30} color='white' />
						<Text style={styles.propText}>star </Text>
					</View>
				</View>
				<View>
					<FlatList
						data={parsedData}
						renderItem={({ item }) => (
							<Pressable >
								<Card image={{ uri: item.posterURL }} />
							</Pressable>
						)}
						keyExtractor={(item) => item.id}
						horizontal
						showsHorizontalScrollIndicator={false}
						// contentContainerStyle={styles.carousel}
					/>
				</View>
			</View>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: "center",
		justifyContent: "flex-start",
		position: "relative",
		padding: 3,
	},
	backButton: {
		alignItems: "flex-end",
		paddingTop: 40,
		paddingRight: 20,
		zIndex: 1,
	},
	title: {
		fontSize: 40,
		fontWeight: "bold",
		textAlign: "center",
		color: "white",
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
		paddingLeft: 13,
		gap: 40,
	},
	prop: {
		alignItems: "center",
	},
	propText: {
		color: "white",
	},
	imageText: {
		width: "100%",
		height: "100%",
		position: "absolute",
	},
	imageStyle: {
		objectFit: "cover",
		width: "100%",
		height: "30%",
		borderRadius: 30,
	},
});
