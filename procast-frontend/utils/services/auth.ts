import axios from "@/utils/axios";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const response = await axios.post("/api/auth/login", {
    email,
    password,
  });

  return response.data;
}
