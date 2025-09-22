import { DeliveryLocation } from "@/components/Shared/DeliveryLocation";
import { HeaderTabsProps } from "@/components/Shared/header/HeaderTabs";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Alert, ScrollView } from "react-native";

export default function Home() {
    const navigation = useNavigation();
    const tabs: HeaderTabsProps["tabs"] = [
        {
            active: true,
            title: "Alexa Lists",
            onPress: () => Alert.alert("Alexa Lists")
        },
        {
            title: "Prime",
            onPress: () => Alert.alert("Prime")
        },
        {
            title: "Video",
            onPress: () => Alert.alert("Video")
        }
    ];
    useEffect(() => {
        navigation.setOptions({
            headerSearchShown: true,
            headerTabsProps: { tabs },
        });
    });
    return (
        <ScrollView scrollEnabled contentContainerStyle={{
            paddingBottom: 10,
        }} showsVerticalScrollIndicator={false}>
            <DeliveryLocation />
        </ScrollView>
    )
};
