import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7FB",
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  logo: {
    fontSize: 42,
    marginRight: 12,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#D94F8A",
  },

  subtitle: {
    fontSize: 14,
    color: "#777",
    marginTop: 3,
  },

  welcomeCard: {
    backgroundColor: "#FAD9E8",
    padding: 20,
    borderRadius: 18,
    marginBottom: 25,
  },

  welcomeTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#A83268",
    marginBottom: 8,
  },

  welcomeText: {
    fontSize: 14,
    color: "#6B4054",
  },

  notice: {
    color: "#246B45",
    backgroundColor: "#E5F5ED",
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
    fontWeight: "600",
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },

  petCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 3,
  },

  petEmoji: {
    fontSize: 38,
    marginRight: 15,
  },

  petInfo: {
    flex: 1,
    minWidth: 0,
  },

  petName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  petType: {
    fontSize: 14,
    color: "#D94F8A",
    marginTop: 3,
  },

  petAge: {
    fontSize: 13,
    color: "#777",
    marginTop: 3,
  },

  button: {
    backgroundColor: "#D94F8A",
    padding: 15,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  form: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 16,
    marginTop: 15,
  },

  formTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#D94F8A",
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "#E0B5C8",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    fontSize: 15,
    backgroundColor: "#FFF9FC",
  },

  formError: {
    color: "#B42318",
    fontSize: 13,
    marginBottom: 12,
  },

  saveButton: {
    backgroundColor: "#A83268",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 5,
  },

  cancelButton: {
    marginTop: 10,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#FCE7F3",
  },

  cancelText: {
    color: "#A83268",
    fontSize: 15,
    fontWeight: "bold",
  },

  /* Edit dan Delete */

  actionRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 12,
    alignItems: "center",
  },

  detailButton: {
    backgroundColor: "#E5F5ED",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginRight: 8,
    marginTop: 6,
  },

  detailText: {
    color: "#246B45",
    fontSize: 13,
    fontWeight: "bold",
  },

  editButton: {
    backgroundColor: "#FAD9E8",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginRight: 8,
  },

  deleteButton: {
    backgroundColor: "#A83268",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    minWidth: 70,
    alignItems: "center",
    justifyContent: "center",
  },

  editText: {
    color: "#A83268",
    fontSize: 13,
    fontWeight: "bold",
  },

  deleteText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
  },

  /* Kotak konfirmasi Delete */

  deleteBox: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 16,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#FAD9E8",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 3,
  },

  deleteTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#A83268",
    marginBottom: 8,
  },

  deleteMessage: {
    fontSize: 14,
    color: "#777",
    marginBottom: 15,
  },

  deleteActions: {
    flexDirection: "row",
    alignItems: "center",
  },

  cancelDeleteButton: {
    backgroundColor: "#FCE7F3",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginRight: 8,
  },

  cancelDeleteText: {
    color: "#A83268",
    fontSize: 13,
    fontWeight: "bold",
  },

  confirmDeleteButton: {
    backgroundColor: "#A83268",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
  },

  confirmDeleteText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
  },

  detailContainer: {
    flexGrow: 1,
    backgroundColor: "#FFF7FB",
    padding: 20,
  },

  detailBackButton: {
    alignSelf: "flex-start",
    backgroundColor: "#FCE7F3",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginBottom: 24,
  },

  detailBackText: {
    color: "#A83268",
    fontSize: 15,
    fontWeight: "bold",
  },

  detailCard: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    padding: 24,
    borderRadius: 18,
  },

  detailEmoji: {
    fontSize: 64,
    marginBottom: 12,
  },

  detailName: {
    color: "#333333",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },

  detailType: {
    color: "#D94F8A",
    fontSize: 17,
    marginTop: 8,
    textAlign: "center",
  },

  detailAge: {
    color: "#777777",
    fontSize: 15,
    marginTop: 8,
  },

  detailReplaceButton: {
    backgroundColor: "#D94F8A",
    padding: 15,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 20,
  },
});
