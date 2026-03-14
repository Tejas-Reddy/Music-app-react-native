import { useAuth } from "@clerk/expo";
import { Button, Text, View } from "react-native";

export default function Profile() {
    const {signOut} = useAuth()
    return (
    <View>
        <Text>Profile</Text>
        <Button title="Sign Out" onPress={() => signOut()} />
    </View>
    )
}