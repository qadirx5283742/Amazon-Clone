import DefaultButton from "@/components/Shared/DefaultButton";
import { AmazonEmber } from "@/utils/constant";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function CreateProduct() {
  const [name, setName] = useState<string>("");
  const [amountInStock, setAmountInStock] = useState<string>("");
  const [currentPrice, setCurrentPrice] = useState<string>("");
  const [previousPrice, setPreviousPrice] = useState<string>("");
  const [deliveryPrice, setDeliveryPrice] = useState<string>("");
  const [deliveryInDays, setDeliveryInDays] = useState<string>("");
  const [isAmazonChoice, setIsAmazonChoice] = useState<boolean>(false);
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [fileUrlGLB, setFileUrlGLB] = useState<string | null>(null);
  const pickMedia = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access media library is required!");
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };
  const pickAndUploadGLB = () => {};
  const createProduct = () => {
    router.back();
  };
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
        gap: 20,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          width: "100%",
          gap: 15,
          paddingBottom: 20,
        }}
      >
        <Text
          style={{
            alignSelf: "flex-start",
            fontSize: 16,
            fontFamily: AmazonEmber,
          }}
        >
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
          autoCorrect={false}
        />
        <Text
          style={{
            alignSelf: "flex-start",
            fontSize: 16,
            fontFamily: AmazonEmber,
          }}
        >
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
          autoCorrect={false}
        />
        <Text
          style={{
            alignSelf: "flex-start",
            fontSize: 16,
            fontFamily: AmazonEmber,
          }}
        >
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
          autoCorrect={false}
        />
        <Text
          style={{
            alignSelf: "flex-start",
            fontSize: 16,
            fontFamily: AmazonEmber,
          }}
        >
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
          autoCorrect={false}
        />
        <Text
          style={{
            alignSelf: "flex-start",
            fontSize: 16,
            fontFamily: AmazonEmber,
          }}
        >
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
          autoCorrect={false}
        />
        <Text
          style={{
            alignSelf: "flex-start",
            fontSize: 16,
            fontFamily: AmazonEmber,
          }}
        >
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
          autoCorrect={false}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Checkbox
            value={isAmazonChoice}
            onValueChange={setIsAmazonChoice}
            style={{ margin: 8 }}
            color={isAmazonChoice ? "#f1b023ff" : undefined}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              fontFamily: AmazonEmber,
            }}
          >
            Amazon Choice
          </Text>
        </View>
        {imageUri && (
          <View>
            <Image
              source={{ uri: imageUri }}
              style={{
                width: 150,
                aspectRatio: 5 / 3,
                borderRadius: 10,
                backgroundColor: "#bababa",
                position: "relative",
              }}
            />
            <Pressable
              onPress={() => setImageUri("")}
              style={{ position: "absolute", top: 3, left: 122 }}
            >
              <MaterialCommunityIcons
                name="close-circle"
                size={24}
                color="#5a5a5aff"
              />
            </Pressable>
          </View>
        )}
        <TouchableOpacity onPress={pickMedia}>
          <Text
            style={{
              alignSelf: "flex-start",
              fontSize: 16,
              fontWeight: "bold",
              fontFamily: AmazonEmber,
              marginBottom: 12,
            }}
          >
            Add Product Image
          </Text>
          {!imageUri && (
            <View
              style={{
                borderWidth: 1,
                borderRadius: 4,
                borderColor: "black",
                padding: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: AmazonEmber,
                  fontWeight: "bold",
                }}
              >
                Add Product Image
              </Text>
              <Feather name="folder-plus" size={20} color="black" />
            </View>
          )}
        </TouchableOpacity>
        <Text
          style={{
            alignSelf: "flex-start",
            fontWeight: "bold",
            fontSize: 16,
            fontFamily: AmazonEmber,
          }}
        >
          Add Product 3d Model .glb file
        </Text>
        {fileUrlGLB ? (
          <View>
            <Pressable onPress={() => setFileUrlGLB(null)}>
              <MaterialCommunityIcons
                name="close-circle"
                size={25}
                color="#5a5a5aff"
                style={{ position: "absolute", left: 36, top: -10 }}
              />
            </Pressable>
          </View>
        ) : (
          <TouchableOpacity onPress={pickAndUploadGLB}>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 4,
                borderColor: "black",
                padding: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: AmazonEmber,
                  color: "#b6b6b6ff",
                }}
              >
                Add Product 3D Model .glb file
              </Text>
              <AntDesign name="file-add" size={18} color="black" />
            </View>
          </TouchableOpacity>
        )}
        <DefaultButton
          style={{ width: "100%" }}
          onPress={createProduct}
          disabled={loading}
        >
          {loading ? "Please Wait ..." : "Create Product"}
        </DefaultButton>
      </View>
    </ScrollView>
  );
}
