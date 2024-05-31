import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header  from '@/components/Header';
import { StatusBar } from 'expo-status-bar';


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'white',
        header : ()=><Header/>,
        headerStyle: {
          backgroundColor: 'transparent', // Make the header background transparent
        },
      }}>
        <StatusBar style="light" />
      <Tabs.Screen
        name="index"
        options={{
          
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-circle" size={24} color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
         
          tabBarIcon: ({ color }) => <AntDesign name="search1" size={24} color={color}  />,
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="lightning-bolt" size={24} color={color}  />,
        }}
      />
      <Tabs.Screen
        name="five"
        options={{
          
          tabBarIcon: ({ color }) => <Octicons name="download" size={24} color={color}  />,
        }}
      />
      <Tabs.Screen
      name="two"
      options={{
      tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color}  />,
  }}
/>
    </Tabs>
  );
}
