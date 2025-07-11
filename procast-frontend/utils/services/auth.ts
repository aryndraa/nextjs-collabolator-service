import axios from "@/utils/axios";

interface LoginResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export async function login(email: string, password: string) {
  const response = await axios.post<LoginResponse>("/api/auth/login", {
    email,
    password,
  });

  // Simpan token ke cookie atau localStorage
  const token = response.data.access_token;
  localStorage.setItem("token", token);

  return response.data;
}
