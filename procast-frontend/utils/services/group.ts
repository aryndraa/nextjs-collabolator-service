import { Group } from "@/lib/stores/group";
import axios from "@/utils/axios";

export async function getGroups() {
  const response = await axios.get("/api/group/");

  return response.data;
}

export async function createGroup(group: Omit<Group, "id">): Promise<Group> {
  const response = await axios.post("/api/group/", JSON.stringify(group));

  return response.data;
}
