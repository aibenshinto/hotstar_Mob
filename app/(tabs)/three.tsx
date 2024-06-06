import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import { Text, View } from "@/components/Themed";
import { useSearch } from "../SearchContext"; // Import the context hook
import { SearchBar } from "react-native-elements"; // Import the SearchBar component
import Card from "@/components/Card";

export default function TabTwoScreen() {
	const { Search } = useSearch(); // Access the Search data
	const [query, setQuery] = useState(""); // State for the search query
	const [filteredData, setFilteredData] = useState([]); // State for the filtered data

	// Utility function to filter duplicates by title
	const getUniqueTitles = (movies) => {
		const uniqueTitles = new Set();
		return movies.filter((movie) => {
			if (uniqueTitles.has(movie.title)) {
				return false;
			} else {
				uniqueTitles.add(movie.title);
				return true;
			}
		});
	};

	const handleSearch = (text) => {
		setQuery(text);
		if (text === "") {
			setFilteredData([]);
		} else {
			const filtered = Search.filter((item) =>
				item.title.toLowerCase().includes(text.toLowerCase())
			);
			setFilteredData(getUniqueTitles(filtered));
		}
	};

	useEffect(() => {
		if (query === "") {
			setFilteredData([]);
		}
	}, [Search, query]);

	return (
		<View style={styles.container}>
			<View style={styles.separator} />

			{/* Search Bar */}
			<SearchBar
				placeholder='Search by title...'
				onChangeText={handleSearch}
				value={query}
				round
				containerStyle={styles.searchContainer}
				inputContainerStyle={styles.searchInput}
			/>

			{/* Display Filtered Data */}
			{filteredData.length > 0 && (
				<FlatList
					data={filteredData}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <Card image={{ uri: item.posterURL }} />}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 10,
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
	searchContainer: {
		width: "100%",
		backgroundColor: "transparent",
		borderBottomColor: "transparent",
		borderTopColor: "transparent",
		padding: 0,
	},
	searchInput: {
		backgroundColor: "#fff",
	},
	item: {
		fontSize: 16,
		marginVertical: 5,
		textAlign: "left",
	},
});
