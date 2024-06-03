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
import Swiper from "react-native-swiper";
import { Movie } from "@/app/NewMovieData/newMovie";

type NewMoviewSlidProps = {
	imageData: Movie[];
};

const NewMovieSlide: React.FC<NewMoviewSlidProps> = ({ imageData }) => {
	return (
		<Swiper
			autoplay={true}
			autoplayTimeout={8}
			style={styles.wrapper}
			showsButtons={false}
			dotColor='grey'
			activeDotColor='white'
		>
			{imageData.map((movie, index) => (
				<>
					<View style={styles.title}>
						<Image source={movie.bgImage} style={styles.image} />
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
						<Image source={movie.fImage} style={styles.titleImage} />
					</View>
					<Text style={styles.titleText}>{movie.Mdata}</Text>
				</>
			))}
		</Swiper>
	);
};

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
	wrapper: {
		height: height * 0.6,
	},
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
		objectFit: "contain",
		height: "100%",
		width: "100%",
	},
	detailsContainer: {
		flex: 1,

		justifyContent: "flex-start",
		width: width * 0.5,
		height: height * 0.2,
		position: "absolute",
		marginTop: 250,
		marginLeft: 100,
	},
	titleText: {
		color: "white",
		alignSelf: "center",
	},
});
export default NewMovieSlide;
