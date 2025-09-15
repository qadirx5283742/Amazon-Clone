import { AmazonEmberBold } from "@/utils/constant";
import MCIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import { Text, View } from "react-native";

interface Tab {
    name: string,
    icon: "home-outline" | "account-outline" | "cart-check"
}

export default function TabLayout() {
    const tabs: Tab[] = [
        {
            name: "index",
            icon: "home-outline"
        },
        {
            name: "profile",
            icon: "account-outline"
        },
        {
            name: "cart",
            icon: "cart-check"
        }
    ]

    const cartItems = "Cart Items";
    return (
        <Tabs>
            {tabs.map((tab) => (
                <Tabs.Screen key={tab.name} name={tab.name} options={{
                    tabBarStyle: {
                        borderTopWidth: 1,
                        borderTopColor: "lightgray"
                    },
                    tabBarLabel: () => null,
                    // header:
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            flex: 1,
                            marginTop: -5,
                            gap: 10,
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <View style={{
                                flexDirection: "row",
                                width: 50,
                                height: 4,
                                borderRadius: 20,
                                backgroundColor: focused ? "#238db0" : "transparent",
                            }}/>
                                <MCIcon
                                    name={tab.icon}
                                    size={30}
                                    color={focused ? "#238db0" : "black"}
                                />
                                {tab.name == "cart" && (
                                    <Text style={{
                                        paddingHorizontal: 4,
                                        borderRadius: 10,
                                        position: "absolute",
                                        top: 8,
                                        backgroundColor: cartItems.length == 0 ? "transparent" : "#de1b1bff",
                                        fontFamily: AmazonEmberBold,
                                        fontSize: 12,
                                        color: cartItems.length == 0 ? "transparent" : "white"
                                    }}>
                                        {cartItems.length}
                                    </Text>
                                )}
                        </View>
                    )
                }}
                ></Tabs.Screen>
            ))}
        </Tabs>
    );
}