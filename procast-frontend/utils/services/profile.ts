import axios from "@/utils/axios";

export async function profile() {

  const response = await axios.get("/api/profile/");

  return response.data;
}
