import axios from "@/utils/axios";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {

  await axios.get(`/sanctum/csrf-cookie`);

  const response = await axios.post("/api/auth/login", {
    email,
    password,
  });

  return response.data;
}

export async function register({
  email,
  password,
  passwordConfirm,
}: {
  email: string;
  password: string;
  passwordConfirm: string;
}) {
  const response = await axios.post("/api/auth/register", {
    email,
    password,
    password_confirmation: passwordConfirm,
  });

  return response;
}
