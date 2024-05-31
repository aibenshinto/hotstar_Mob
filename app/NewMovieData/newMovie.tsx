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
		Mdata: "2024 | 2h | fgfdg",
	},
];

export default imageData;
