import { Link } from "expo-router";
import { Text, View } from "react-native";


export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text className="font-rubik-bold text-2xl py-10">Welcome to Restate</Text>
            <Link href="/sign-in">Sign In</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/properties/1">Property Details</Link>
            <Link href="/profile">Profile</Link>
            <Text>Hello, Fuck You</Text>
        </View>
    );
}
