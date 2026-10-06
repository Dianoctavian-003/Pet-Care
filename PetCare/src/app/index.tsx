import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";

import { styles } from "../constants/styles";

interface Pet {
  id: number;
  name: string;
  type: string;
  age: number;
}

const initialPets: Pet[] = [
  {
    id: 1,
    name: "Milo",
    type: "Golden Retriever",
    age: 2,
  },
  {
    id: 2,
    name: "Luna",
    type: "Persian Cat",
    age: 1,
  },
  {
    id: 3,
    name: "Coco",
    type: "Hamster",
    age: 1,
  },
];

export default function HomeScreen() {
  const [pets, setPets] = useState<Pet[]>(initialPets);

  const [showForm, setShowForm] = useState(false);

  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petAge, setPetAge] = useState("");

  // ID pet yang sedang diedit
  const [editId, setEditId] = useState<number | null>(null);

  // ID pet yang ingin dihapus
  const [deleteId, setDeleteId] = useState<number | null>(null);

  // Menyimpan data pet
  const savePet = () => {
    if (!petName || !petType || !petAge) {
      return;
    }

    // Update pet
    if (editId !== null) {
      const updatedPets = pets.map((pet) =>
        pet.id === editId
          ? {
              ...pet,
              name: petName,
              type: petType,
              age: Number(petAge),
            }
          : pet,
      );

      setPets(updatedPets);
    } else {
      // Tambah pet baru
      const newPet: Pet = {
        id: pets.length > 0 ? Math.max(...pets.map((pet) => pet.id)) + 1 : 1,
        name: petName,
        type: petType,
        age: Number(petAge),
      };

      setPets([...pets, newPet]);
    }

    resetForm();
  };

  // Edit pet
  const editPet = (pet: Pet) => {
    setEditId(pet.id);

    setPetName(pet.name);
    setPetType(pet.type);
    setPetAge(String(pet.age));

    setShowForm(true);
  };

  // Menampilkan konfirmasi delete
  const deletePet = (id: number) => {
    setDeleteId(id);
  };

  // Membatalkan delete
  const cancelDelete = () => {
    setDeleteId(null);
  };

  // Konfirmasi delete
  const confirmDelete = () => {
    if (deleteId !== null) {
      setPets(pets.filter((pet) => pet.id !== deleteId));
      setDeleteId(null);
    }
  };

  // Reset form
  const resetForm = () => {
    setPetName("");
    setPetType("");
    setPetAge("");
    setEditId(null);
    setShowForm(false);
  };

  // Menampilkan setiap pet
  const renderPet = (pet: Pet) => {
    return (
      <View key={pet.id} style={styles.petCard}>
        <Text style={styles.petEmoji}>🐾</Text>

        <View style={styles.petInfo}>
          <Text style={styles.petName}>{pet.name}</Text>

          <Text style={styles.petType}>{pet.type}</Text>

          <Text style={styles.petAge}>Age: {pet.age} years</Text>

          <View style={styles.actionRow}>
            <Pressable style={styles.editButton} onPress={() => editPet(pet)}>
              <Text style={styles.editText}>Edit</Text>
            </Pressable>

            <Pressable
              style={styles.deleteButton}
              onPress={() => deletePet(pet.id)}
            >
              <Text style={styles.deleteText}>Delete</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>🐾</Text>

          <View>
            <Text style={styles.title}>Pet Care</Text>

            <Text style={styles.subtitle}>Take care of your lovely pet</Text>
          </View>
        </View>

        {/* Welcome Card */}
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>Hello, Pet Parent! 👋</Text>

          <Text style={styles.welcomeText}>
            Keep your pets happy, healthy, and loved.
          </Text>
        </View>

        {/* Pet List */}
        <Text style={styles.sectionTitle}>My Pets</Text>

        {pets.map(renderPet)}

        {/* Add Pet Button */}
        {!showForm && (
          <Pressable
            style={styles.button}
            onPress={() => {
              setEditId(null);
              setShowForm(true);
            }}
          >
            <Text style={styles.buttonText}>+ Add Pet</Text>
          </Pressable>
        )}

        {/* Form */}
        {showForm && (
          <View style={styles.form}>
            <Text style={styles.formTitle}>
              {editId !== null ? "Update Pet" : "Add New Pet"}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Pet name"
              value={petName}
              onChangeText={setPetName}
            />

            <TextInput
              style={styles.input}
              placeholder="Pet type"
              value={petType}
              onChangeText={setPetType}
            />

            <TextInput
              style={styles.input}
              placeholder="Age"
              value={petAge}
              onChangeText={setPetAge}
              keyboardType="numeric"
            />

            <Pressable style={styles.saveButton} onPress={savePet}>
              <Text style={styles.buttonText}>
                {editId !== null ? "Update Pet" : "Save Pet"}
              </Text>
            </Pressable>

            <Pressable style={styles.cancelButton} onPress={resetForm}>
              <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>
          </View>
        )}

        {/* Delete Confirmation */}
        {deleteId !== null && (
          <View style={styles.deleteBox}>
            <Text style={styles.deleteTitle}>Delete Pet?</Text>

            <Text style={styles.deleteMessage}>
              Are you sure you want to delete this pet?
            </Text>

            <View style={styles.deleteActions}>
              <Pressable
                style={styles.cancelDeleteButton}
                onPress={cancelDelete}
              >
                <Text style={styles.cancelDeleteText}>Cancel</Text>
              </Pressable>

              <Pressable
                style={styles.confirmDeleteButton}
                onPress={confirmDelete}
              >
                <Text style={styles.confirmDeleteText}>Delete</Text>
              </Pressable>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
