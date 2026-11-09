import { ActivityIndicator, Text, View } from "react-native";

export function Loading() {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
      accessibilityRole="progressbar"
    >
      <ActivityIndicator size="large" color="#D94F8A" />
      <Text style={{ color: "#777", marginTop: 10 }}>Loading pets...</Text>
    </View>
  );
}
