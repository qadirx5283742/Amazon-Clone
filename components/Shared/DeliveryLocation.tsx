import { AmazonEmber } from "@/utils/constant";
import Icon from "@expo/vector-icons/Ionicons";
import { Text, TouchableOpacity, View } from "react-native";

export function DeliveryLocation() {
    return (
        <TouchableOpacity>
            <View style={{
                flexDirection: "row",
                backgroundColor: "#c7e8f0",
                width: "100%",
                justifyContent: "center",
                gap: 5,
                alignItems: "center",
                padding: 15
            }}>
                <Icon name="location-outline" color={"black"} size={24} />
                <Text style={{
                    marginLeft: 10,
                    fontSize: 16,
                    textAlign: "center",
                    color: "black",
                    fontWeight: "normal",
                    fontFamily: AmazonEmber,
                }}>
                    Delivery to -
                </Text>
                <Text style={{
                    fontSize: 16,
                    textAlign: "center",
                    color: "black",
                    fontWeight: "normal",
                    fontFamily: AmazonEmber,
                }}>
                    Select Location
                </Text>
                <Icon name="chevron-down" color={"black"} size={18} />
            </View>
        </TouchableOpacity>
    )
};
