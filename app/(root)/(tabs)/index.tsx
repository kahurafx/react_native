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
            <Link href="/explore">Explore</Link>
            <Link href="/sign-in" className="font-bold text-xl my-10">Sign In</Link>
            <Link href="/properties/1">Property Details</Link>
            <Text>Hello, Fuck You</Text>
            <Link href="/profile">Profile</Link>
        </View>
    );
}
