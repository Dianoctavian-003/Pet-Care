import { router, useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

import { styles } from "../../constants/styles";

export default function PetDetailsScreen() {
  const { name, type, age } = useLocalSearchParams<{
    name?: string;
    type?: string;
    age?: string;
  }>();

  const parsedAge = age?.trim() ? Number(age) : null;
  const validAge = parsedAge === null || (Number.isInteger(parsedAge) && parsedAge >= 0);

  if (!name || !type || !validAge) {
    return (
      <ScrollView contentContainerStyle={styles.detailContainer}>
        <Text style={styles.sectionTitle}>Pet details are unavailable.</Text>
        <Pressable
          style={styles.detailBackButton}
          onPress={() => router.back()}
        >
          <Text style={styles.detailBackText}>← Back</Text>
        </Pressable>
        <Pressable
          style={styles.detailReplaceButton}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.buttonText}>Go to My Pets</Text>
        </Pressable>
      </ScrollView>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.detailContainer}>
      <Pressable
        style={styles.detailBackButton}
        onPress={() => router.back()}
      >
        <Text style={styles.detailBackText}>← Back</Text>
      </Pressable>

      <View style={styles.detailCard}>
        <Text style={styles.detailEmoji}>🐾</Text>
        <Text style={styles.detailName}>{name}</Text>
        <Text style={styles.detailType}>{type}</Text>
        <Text style={styles.detailAge}>
          Age:{" "}
          {parsedAge === null
            ? "Not provided"
            : `${parsedAge} ${parsedAge === 1 ? "year" : "years"}`}
        </Text>
      </View>

      <Pressable
        style={styles.detailReplaceButton}
        onPress={() => router.replace("/")}
      >
        <Text style={styles.buttonText}>Back to My Pets</Text>
      </Pressable>
    </ScrollView>
  );
}