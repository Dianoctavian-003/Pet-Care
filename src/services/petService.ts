import type { Pet } from "../types/pet";

const PET_API_URL =
  "https://petstore.swagger.io/v2/pet/findByStatus?status=available";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function mapApiPets(payload: unknown): Pet[] {
  if (!Array.isArray(payload)) {
    throw new Error("Format data pet dari server tidak valid.");
  }

  const pets = payload.flatMap((item): Pet[] => {
    if (!isRecord(item)) {
      return [];
    }

    const id = item.id;
    const name = item.name;
    const category = isRecord(item.category) ? item.category.name : undefined;
    const tags = Array.isArray(item.tags) ? item.tags : [];
    const firstTag = tags.find(
      (tag) => isRecord(tag) && typeof tag.name === "string" && tag.name.trim(),
    );

    if (typeof id !== "number" || !Number.isFinite(id)) {
      return [];
    }

    if (typeof name !== "string" || !name.trim()) {
      return [];
    }

    const type =
      (typeof category === "string" && category.trim()) ||
      (isRecord(firstTag) && typeof firstTag.name === "string"
        ? firstTag.name.trim()
        : "") ||
      "Pet";

    return [{ id, name: name.trim(), type, age: null }];
  });

  if (pets.length === 0) {
    throw new Error("Server tidak mengirimkan data pet yang dapat ditampilkan.");
  }

  return pets.slice(0, 20);
}

export async function fetchPets(): Promise<Pet[]> {
  try {
    const response = await fetch(PET_API_URL);
    if (!response.ok) {
      throw new Error(`Gagal mengambil data pet (HTTP ${response.status}).`);
    }

    const payload: unknown = await response.json();
    return await new Promise<Pet[]>((resolve, reject) => {
      Promise.resolve(payload)
        .then(mapApiPets)
        .then(resolve, reject);
    });
  } catch (error) {
    return Promise.reject(
      error instanceof Error ? error : new Error("Gagal mengambil data pet."),
    );
  }
}
