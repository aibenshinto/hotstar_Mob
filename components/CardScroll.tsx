import React, { useEffect, useState } from "react";
import { getData, Movie } from "@/apiCalls/Api";
import { StyleSheet, View, FlatList, Text, Dimensions } from "react-native";
import Card from "@/components/Card";
import { Pressable } from "react-native";
import { Link } from "expo-router";

type ScrollProps = {
	genre: string ;
};

const CardScroll: React.FC<ScrollProps> = ({ genre }) => {
	const [data, setData] = useState<Movie[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const genreData: Movie[] = await getData(genre);
			setData(genreData);
		};

		fetchData();
	}, [genre]);

	return (
		<View style={styles.genreSection}>
			<Text style={styles.genreTitle}>{genre}</Text>
			<FlatList
				data={data}
				renderItem={({ item }) => (
					<Pressable style={styles.cardStyle}>
						<Link
							href={{
								pathname: "/modal",
								params: {
									posterImg: item.posterURL,
									title: item.title,
									parsedData: genre,
								},
							}}
						>
							<Card image={{ uri: item.posterURL }} />
						</Link>
					</Pressable>
				)}
				keyExtractor={(item) => item.id}
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.carousel}
			/>
		</View>
	);
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
	genreSection: {
		paddingVertical: 10,
	},
	genreTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginLeft: 10,
		color: "white",
		gap: 10,
	},
	cardStyle: {
		marginHorizontal: 10,
	},
	carousel: {
		paddingVertical: 20,
	},
});

export default CardScroll;
