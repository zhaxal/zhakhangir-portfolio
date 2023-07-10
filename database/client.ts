import { initializeApp } from "firebase/app";
import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  collection,
  doc,
  getFirestore,
} from "firebase/firestore";

import { firebaseConfig } from "@/secret/firebaseConfig";
import { Message } from "@/models/message";

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>;
};

const createDocument = <T = DocumentData>(path: string) => {
  return doc(db, path) as DocumentReference<T>;
};

export const messagesCol = () => createCollection<Message>("messages");
export const messageDoc = (uid: string) =>
  createDocument<Message>(`messages/${uid}`);

export { db };
