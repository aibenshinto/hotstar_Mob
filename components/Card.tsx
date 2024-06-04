import React from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	ImageSourcePropType,
} from "react-native";

type CardProps = {
	image: ImageSourcePropType;
};

const Card: React.FC<CardProps> = ({ image }) => {
	return (
		<View style={styles.card}>
			<Image source={image} style={styles.cardImage} />
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		width: 150,
		height: 200,
		backgroundColor: "#fff",
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 1,
		marginHorizontal: 10,
		alignItems: "center",
    justifyContent: "center",
    
	},
	cardImage: {
		width: "100%",
		height: "100%",
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
	},
	cardTitle: {
		padding: 10,
		textAlign: "center",
		fontSize: 16,
	},
});

export default Card;
