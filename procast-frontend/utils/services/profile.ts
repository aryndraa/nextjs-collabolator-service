import axios from "@/utils/axios";

export async function profile() {
  const response = await axios.get("/api/profile/");

  return response.data;
}

export async function makeProfile({
  name,
  bio,
  link,
  avatar,
}: {
  name: string;
  bio?: string;
  link?: string;
  avatar?: File | null;
}) {
  const response = await axios.post(
    "/api/profile",
    {
      name,
      bio,
      link,
      avatar: avatar ? avatar : null,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
}
