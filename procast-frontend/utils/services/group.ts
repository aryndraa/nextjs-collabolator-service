import { Group } from "@/lib/stores/group";
import axios from "@/utils/axios";

export async function getGroups() {
  const response = await axios.get("/api/group/");

  return response.data;
}

export async function createGroup(group: Omit<Group, "id">): Promise<Group> {
  const response = await axios.post("/api/group/", {
    name: group.name,
    description: group.description,
    deadline_project: group.deadline_project,
  });

  return response.data;
}

export async function showGroup(id: number): Promise<Group> {
  const response = await axios.get(`/api/group/${id}`);

  return response.data.data;
}

export async function getMembers(id: number, search: string) {
  const response = await axios.get(`/api/group/${id}/participant/${search}`);

  return response.data.data.participant;
}
