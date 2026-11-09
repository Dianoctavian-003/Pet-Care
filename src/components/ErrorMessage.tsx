import { Pressable, Text, View } from "react-native";

type ErrorMessageProps = {
  message: string;
  onRetry: () => void;
};

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <View
      style={{
        backgroundColor: "#FCE7E7",
        borderRadius: 12,
        padding: 16,
      }}
      accessibilityRole="alert"
    >
      <Text style={{ color: "#B42318", marginBottom: 12 }}>{message}</Text>
      <Pressable
        onPress={onRetry}
        style={{
          alignSelf: "flex-start",
          backgroundColor: "#A83268",
          borderRadius: 10,
          paddingHorizontal: 16,
          paddingVertical: 10,
        }}
      >
        <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>Coba lagi</Text>
      </Pressable>
    </View>
  );
}
