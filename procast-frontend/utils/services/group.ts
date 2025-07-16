import axios from "@/utils/axios";

export async function getGroups() {
  const response = await axios.get("/api/group/");

  return response.data;
}
