import { AmazonEmberBold } from "@/utils/constant";
import Icon from "@expo/vector-icons/Ionicons";
import { Pressable, Text } from "react-native";

export function HeaderTitle() {
    return (
        <Text style={{fontSize: 18, fontFamily: AmazonEmberBold}}>Amazon.com</Text>
    )
}

export function HeaderLeftBack({onPress}: {onPress: VoidFunction}) {
    return (
        <Pressable onPress={onPress}>
            <Icon name="arrow-back" color={"black"} size={24} />
        </Pressable>
    )
}
