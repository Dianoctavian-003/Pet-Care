import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { router } from "expo-router";

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
  const [formError, setFormError] = useState("");
  const [notice, setNotice] = useState<{ id: number; text: string } | null>(
    null,
  );

  const [editId, setEditId] = useState<number | null>(null);

  const [deleteId, setDeleteId] = useState<number | null>(null);

  useEffect(() => {
    if (!notice) {
      return;
    }

    const timeoutId = setTimeout(() => setNotice(null), 2500);
    return () => clearTimeout(timeoutId);
  }, [notice]);

  const savePet = () => {
    const trimmedName = petName.trim();
    const trimmedType = petType.trim();
    const age = Number(petAge);

    if (!trimmedName || !trimmedType || !petAge.trim()) {
      setFormError("Nama, jenis hewan, dan umur wajib diisi.");
      return;
    }

    if (!Number.isInteger(age) || age < 0) {
      setFormError("Umur harus berupa angka bulat minimal 0.");
      return;
    }

    if (editId !== null) {
      const updatedPets = pets.map((pet) =>
        pet.id === editId
          ? {
              ...pet,
              name: trimmedName,
              type: trimmedType,
              age,
            }
          : pet,
      );

      setPets(updatedPets);
      setNotice({ id: Date.now(), text: `${trimmedName} updated.` });
    } else {
      const newPet: Pet = {
        id: pets.length > 0 ? Math.max(...pets.map((pet) => pet.id)) + 1 : 1,
        name: trimmedName,
        type: trimmedType,
        age,
      };

      setPets([...pets, newPet]);
      setNotice({ id: Date.now(), text: `${trimmedName} added.` });
    }

    resetForm();
  };

  const editPet = (pet: Pet) => {
    setEditId(pet.id);

    setPetName(pet.name);
    setPetType(pet.type);
    setPetAge(String(pet.age));

    setShowForm(true);
  };

  const deletePet = (id: number) => {
    setDeleteId(id);
  };

  const cancelDelete = () => {
    setDeleteId(null);
  };

  const confirmDelete = () => {
    if (deleteId !== null) {
      setPets(pets.filter((pet) => pet.id !== deleteId));
      setNotice({ id: Date.now(), text: "Pet deleted." });
      setDeleteId(null);
    }
  };

  const resetForm = () => {
    setPetName("");
    setPetType("");
    setPetAge("");
    setEditId(null);
    setFormError("");
    setShowForm(false);
  };

  const openPetDetails = (pet: Pet) => {
    router.push({
      pathname: "/pet/[id]",
      params: {
        id: String(pet.id),
        name: pet.name,
        type: pet.type,
        age: String(pet.age),
      },
    });
  };

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
              style={styles.detailButton}
              onPress={() => openPetDetails(pet)}
            >
              <Text style={styles.detailText}>Details</Text>
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

        {notice && (
          <Text key={notice.id} style={styles.notice}>
            {notice.text}
          </Text>
        )}

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

            {formError ? (
              <Text style={styles.formError}>{formError}</Text>
            ) : null}

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
