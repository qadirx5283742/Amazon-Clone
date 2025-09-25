import { AmazonEmber } from "@/utils/constant";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function Location() {
    const [name, setName] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const handleNameChange = () => { }
    const handleLocationChange = () => { }
    return (
        <View style={{
            flex: 1,
            justifyContent: "flex-start",
            marginTop: 20,
            gap: 14,
            paddingHorizontal: 20,
        }}>
            <Text style={{
                fontSize: 20,
                fontFamily: AmazonEmber,
            }}>
                Name
            </Text>
            <TextInput
                value={name}
                onChangeText={handleNameChange}
                style={{
                    borderColor: "black",
                    padding: 8,
                    fontFamily: AmazonEmber,
                    borderWidth: 1,
                    borderRadius: 8,
                    minHeight: 50,
                    textAlignVertical: "top",
                    fontSize: 16,
                }}
                placeholder="Name"
                placeholderTextColor="#b8bdc5ff"
                autoCapitalize="none"
                autoCorrect={false} />
            <Text style={{
                fontSize: 20,
                fontFamily: AmazonEmber,
            }}>
                Give Delivery Address
            </Text>
            <TextInput
                value={location}
                onChangeText={handleLocationChange}
                multiline
                style={{
                    borderColor: "black",
                    padding: 8,
                    fontFamily: AmazonEmber,
                    borderWidth: 1,
                    borderRadius: 8,
                    minHeight: 100,
                    textAlignVertical: "top",
                    fontSize: 16,
                }}
                placeholder="Enter Delivery Location"
                placeholderTextColor="#b8bdc5ff"
                autoCapitalize="none"
                autoCorrect={false} />
            <AntDesign
                name="check-circle"
                size={18}
                color={loading ? "#747775ff" : "green"}
                style={{
                    position: "absolute",
                    right: 25,
                    top: 64,
                }} />
            <AntDesign
                name="check-circle"
                size={18}
                color={loading ? "#747775ff" : "green"}
                style={{
                    position: "absolute",
                    right: 25,
                    top: 214,
                }} />

        </View>
    )
};
