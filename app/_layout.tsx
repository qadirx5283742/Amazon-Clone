import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
SplashScreen.preventAutoHideAsync();

export default function Rootlayout() {
    const [loaded, error] = useFonts({
        "Amazon-Ember": require("@/assets/fonts/Amazon-Ember.ttf"),
        "Amazon-Ember-Bold": require("@/assets/fonts/Amazon-Ember-Bold.ttf"),
        "Amazon-Ember-Light": require("@/assets/fonts/Amazon-Ember-Light.ttf"),
    });
    useEffect(() => {
        if (loaded || error) {
            setTimeout(() => SplashScreen.hideAsync(), 1000);
        }
    }, [error, loaded]);
    if (!loaded && !error) {
        return null;
    }
    return (
        <GestureHandlerRootView>
            <StatusBar style="auto" />
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="(tabs)" />
            </Stack>
        </GestureHandlerRootView>
    )
}