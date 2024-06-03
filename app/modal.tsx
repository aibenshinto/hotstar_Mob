import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ModalScreen() {
	const { posterImg, title } = useLocalSearchParams();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<Image source={{ uri: `${posterImg}` }} />

			<StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
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
});
