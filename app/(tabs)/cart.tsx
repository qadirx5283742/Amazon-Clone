import DefaultButton from "@/components/Shared/DefaultButton";
import { DeliveryLocation } from "@/components/Shared/DeliveryLocation";
import ProductCard from "@/components/Shared/Screen/ProductCard";
import { RootState } from "@/store";
import { router } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function Cart() {
  const items = useSelector((state: RootState) => state.cart.items);
  const subTotal = useSelector((state: RootState) => state.cart.subTotal);
  const session = useSelector((state: RootState) => state.auth.session);

  const onClickSignIn = () => router.push("/(auth)");
  const onClickSignUp = () => router.push("/(auth)/signup");

  const handleClearCart = () => {};
  return (
    <ScrollView
      style={style.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <DeliveryLocation />
      <View style={style.innerContainer}>
        {items.length ? (
          <>
            <View style={style.subTotalRow}>
              <Text style={style.subTotalLabel}>Subtotal: </Text>
              <Text style={style.subTotalLabel}>Rs.{subTotal} </Text>
            </View>
            {session && (
              <DefaultButton
                onPress={handleClearCart}
              >{`Process to checkout (${items.length}) items`}</DefaultButton>
            )}
            {items.map((item) => (
              <ProductCard key={item.product.id} {...item} />
            ))}
          </>
        ) : (
          <>
            <Image
              source={require("@/assets/images/amazon-images/empty-cart.png")}
              style={style.emptyImage}
            />
            <Text style={style.emptyTitle}>Your Amazon cart is empty</Text>
            <Text style={style.emptySubtitle}>Good stuff goes here</Text>
          </>
        )}
        {!session && (
          <View style={style.authButton}>
            <DefaultButton onPress={onClickSignIn}>Sign In</DefaultButton>
            <DefaultButton onPress={onClickSignUp} variant="secondary">
              Create Account
            </DefaultButton>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 20,
  },
  subTotalRow: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginTop: 10,
  },
  subTotalLabel: {
    marginRight: 10,
    fontSize: 26,
  },
  emptyImage: {
    width: 300,
    height: 200,
  },
  emptyTitle: {
    fontSize: 26,
    fontWeight: "bold",
  },
  emptySubtitle: {
    fontSize: 18,
    color: "#666",
  },
  authButton: {
    width: "100%",
    gap: 15,
    marginTop: 20,
  },
});
