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
        </View>
    );
}
