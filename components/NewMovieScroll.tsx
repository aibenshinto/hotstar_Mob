import React from "react";
import {
	StyleSheet,
	View,
	Image,
	ImageSourcePropType,
	Dimensions,
	Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type NewMoviewSlidProps = {
	image: ImageSourcePropType;
	titleImage: ImageSourcePropType;
	text: string;
};

const NewMoviewSlid: React.FC<NewMoviewSlidProps> = ({
	image,
	titleImage,
	text,
}) => {
	return (
		<>
			<View style={styles.title}>
				<Image source={image} style={styles.image} />
				<View style={styles.gradientContainer}>
					<LinearGradient
						colors={["rgba(0, 0, 0, 1)", "transparent"]}
						style={styles.topGradient}
						start={{ x: 0, y: 0 }}
						end={{ x: 0, y: 1 }}
					/>
					<LinearGradient
						colors={["transparent", "rgba(0, 0, 0, 1)"]}
						style={styles.bottomGradient}
						start={{ x: 0, y: 0 }}
						end={{ x: 0, y: 1 }}
					/>
				</View>
			</View>
			<View style={styles.detailsContainer}>
				<Image source={titleImage} style={styles.titleImage} />
				<Text style={styles.titleText}>{text}</Text>
			</View>
		</>
	);
};

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
	title: {
		height: height * 0.5,
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
	},
	gradientContainer: {
		...StyleSheet.absoluteFillObject,
	},
	topGradient: {
		height: "30%",
	},
	bottomGradient: {
		height: "70%",
		marginTop: "auto",
	},
	titleImage: {
		objectFit: "fill",
	},
	detailsContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-end",
		width,
		height: height * 0.5,
		position: "absolute",
	},
	titleText: {
		color: "white",
	},
});
export default NewMoviewSlid;
