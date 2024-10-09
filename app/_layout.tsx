import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: true }} />
      <Stack.Screen name="login" options={{ headerBackTitle: "Back" }} />
      <Stack.Screen name="guide" options={{ headerBackTitle: "Back" }} />
      <Stack.Screen name="(home)" />
    </Stack>
  );
}
