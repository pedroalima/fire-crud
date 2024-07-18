import { DocumentData } from "firebase/firestore";
import { addUserAccess } from "../dataAccess/usersAcess";


export async function addUserAction(body: DocumentData) {
  const response = await addUserAccess(body);
  return response.id;
}