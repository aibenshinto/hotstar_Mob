import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "@/components/Header";
import { StatusBar } from "expo-status-bar";
import { createContext, useState } from "react";


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "white",
				header: () => <Header />,
				headerStyle: {
					backgroundColor: "transparent",
				},
			}}
		>
			<StatusBar style='light' />
			<Tabs.Screen name='index' options={{}} />

			<Tabs.Screen
				name='three'
				options={{
					tabBarIcon: ({ color }) => (
						<AntDesign name='search1' size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='four'
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name='lightning-bolt'
							size={24}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='favorites'
				options={{
					tabBarIcon: ({ color }) => (
						<AntDesign name='hearto' size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='two'
				options={{
					tabBarIcon: ({ color }) => (
						<Entypo name='home' size={24} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
