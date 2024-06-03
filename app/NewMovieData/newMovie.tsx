import { ImageSourcePropType } from "react-native";

export interface Movie {
	bgImage: ImageSourcePropType;
	fImage: ImageSourcePropType;
	Mdata: string;
}

const imageData: Movie[] = [
	{
		bgImage: require("../../assets/images/manju.webp"),
		fImage: require("../../assets/images/samplefimage.webp"),
		Mdata: "2024 | 2h | Adventure",
	},
	{
		bgImage: require("../../assets/images/Dori.webp"),
		fImage: require("../../assets/images/DoriF.webp"),
		Mdata: "2024 | 2h | Comedy",
	},
	{
		bgImage: require("../../assets/images/prema.webp"),
		fImage: require("../../assets/images/premaF.webp"),
		Mdata: "2024 | 2h | Comedy",
	},
	{
		bgImage: require("../../assets/images/shin.webp"),
		fImage: require("../../assets/images/shinF.webp"),
		Mdata: "2024 | 2h | Animated",
	},
	{
		bgImage: require("../../assets/images/vikram.webp"),
		fImage: require("../../assets/images/vikramF.webp"),
		Mdata: "2024 | 2h | Adventure",
	},
];

export default imageData;
