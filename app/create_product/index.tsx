import { AmazonEmber } from "@/utils/constant";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";

export default function CreateProduct() {
    const [name, setName] = useState<string>("");
    const [amountInStock, setAmountInStock] = useState<string>("");
    const [currentPrice, setCurrentPrice] = useState<string>("");
    const [previousPrice, setPreviousPrice] = useState<string>("");
    const [deliveryPrice, setDeliveryPrice] = useState<string>("");
    const [deliveryInDays, setDeliveryInDays] = useState<string>("");
    return (
        <ScrollView contentContainerStyle={{
            padding: 20,
            gap: 20,
            backgroundColor: "white",
        }}>
            <View style={{
                width: "100%",
                gap: 15,
                paddingBottom: 20
            }}>
                <Text style={{
                    alignSelf: "flex-start",
                    fontSize: 16,
                    fontFamily: AmazonEmber,
                }}>
                    Enter Product Name
                </Text>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    style={{
                        borderWidth: 1,
                        borderRadius: 4,
                        borderColor: "black",
                        padding: 10,
                        fontFamily: AmazonEmber,
                    }}
                    placeholder="Product name"
                    autoCapitalize="none"
                    autoCorrect={false} />
                <Text style={{
                    alignSelf: "flex-start",
                    fontSize: 16,
                    fontFamily: AmazonEmber,
                }}>
                    Amount in Stock
                </Text>
                <TextInput
                    value={amountInStock}
                    onChangeText={setAmountInStock}
                    keyboardType="numeric"
                    style={{
                        borderWidth: 1,
                        borderRadius: 4,
                        borderColor: "black",
                        padding: 10,
                        fontFamily: AmazonEmber,
                    }}
                    placeholder="Amount in stock"
                    autoCapitalize="none"
                    autoCorrect={false} />
                <Text style={{
                    alignSelf: "flex-start",
                    fontSize: 16,
                    fontFamily: AmazonEmber,
                }}>
                    Current Price
                </Text>
                <TextInput
                    value={currentPrice}
                    onChangeText={setCurrentPrice}
                    keyboardType="numeric"
                    style={{
                        borderWidth: 1,
                        borderRadius: 4,
                        borderColor: "black",
                        padding: 10,
                        fontFamily: AmazonEmber,
                    }}
                    placeholder="Current Price"
                    autoCapitalize="none"
                    autoCorrect={false} />
                <Text style={{
                    alignSelf: "flex-start",
                    fontSize: 16,
                    fontFamily: AmazonEmber,
                }}>
                    Previous Price
                </Text>
                <TextInput
                    value={previousPrice}
                    onChangeText={setPreviousPrice}
                    keyboardType="numeric"
                    style={{
                        borderWidth: 1,
                        borderRadius: 4,
                        borderColor: "black",
                        padding: 10,
                        fontFamily: AmazonEmber,
                    }}
                    placeholder="Previous Price"
                    autoCapitalize="none"
                    autoCorrect={false} />
                <Text style={{
                    alignSelf: "flex-start",
                    fontSize: 16,
                    fontFamily: AmazonEmber,
                }}>
                    Delivery Price
                </Text>
                <TextInput
                    value={deliveryPrice}
                    onChangeText={setDeliveryPrice}
                    keyboardType="numeric"
                    style={{
                        borderWidth: 1,
                        borderRadius: 4,
                        borderColor: "black",
                        padding: 10,
                        fontFamily: AmazonEmber,
                    }}
                    placeholder="Delivery Price"
                    autoCapitalize="none"
                    autoCorrect={false} />
                <Text style={{
                    alignSelf: "flex-start",
                    fontSize: 16,
                    fontFamily: AmazonEmber,
                }}>
                    Delivery In Days
                </Text>
                <TextInput
                    value={deliveryInDays}
                    onChangeText={setDeliveryInDays}
                    keyboardType="numeric"
                    style={{
                        borderWidth: 1,
                        borderRadius: 4,
                        borderColor: "black",
                        padding: 10,
                        fontFamily: AmazonEmber,
                    }}
                    placeholder="Delivery in Days"
                    autoCapitalize="none"
                    autoCorrect={false} />
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 2,
                }}>
                    <Checkbox />
                </View>
            </View>
        </ScrollView>
    )
};
