import { Product } from "@/types";
import { Image, View } from "react-native";

interface Props {
  product: Product;
  quantity: number;
}

export default function ProductCard({ product, quantity }: Props) {
  return (
    <View style={{ gap: 10, marginBottom: 20 }}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#f1f1f1",
          minHeight: 200,
          borderRadius: 5,
          overflow: "hidden",
        }}
      >
        <Image
          source={{ uri: product.imageUrl ?? "" }}
          style={{
            width: "35%",
            height: "100%",
            backgroundColor: "#ccc",
            padding: 10,
          }}
        />
      </View>
    </View>
  );
}
