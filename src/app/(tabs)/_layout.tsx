import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{title: 'Library', tabBarIcon: ({color, size}) => <MaterialIcons name="library-music" size={size} color={color} />}} />
            <Tabs.Screen name="discover" options={{title: 'Discover', tabBarIcon: ({color, size}) => <Feather name="search" size={size} color={color} /> }}/>
        </Tabs>
    )
}