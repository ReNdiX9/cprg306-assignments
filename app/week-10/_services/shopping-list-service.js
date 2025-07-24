import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";

export async function getItems(userId) {
  let items = [];
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const snapshot = await getDocs(itemsRef);
    snapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return items;
  } catch (error) {
    console.log("Error fetching items:", error);
  }
}
export async function addItem(userId, item) {
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, item);
    return { id: docRef.id, ...item };
  } catch (error) {
    console.log("Error adding item:", error);
  }
}
export async function deleteItem(userId, itemId) {
  try {
    const itemDoc = doc(db, "users", userId, "items", itemId);
    await deleteDoc(itemDoc);
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
}
