"use client";

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { InputLabel } from "../InputLabel";
import Button from "../Button";
import AvatarUploader from "../AvatarUploader";
import { makeProfile } from "@/utils/services/profile";
import { useUser } from "@/lib/stores/user";
import { useRouter } from "next/navigation";

export default function ProfileForm() {
  const router = useRouter();
  const setProfile = useUser((state) => state.setProfile);
  const [avatar, setAvatar] = useState<File | null>(null);
  const [name, setName] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();

    try {
      const profile = await makeProfile({
        name,
        bio,
        link,
        avatar,
      });

      setProfile(profile);
      setLoading(false);

      router.replace("/");
    } catch (error) {
      toast.error("Failed to create profile");
      setLoading(false);
      console.error("Error creating profile:", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">
            Let&apos;s finish your profile!
          </CardTitle>
          <CardDescription>Make peoples know you are</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6 mb-4">
              <AvatarUploader onFileSelect={setAvatar} />
              <InputLabel
                name="name"
                placeholder="Your name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                required={true}
              />
              <InputLabel
                name="bio"
                placeholder="Bio"
                type="text"
                onChange={(e) => setBio(e.target.value)}
              />
              <InputLabel
                name="link"
                placeholder="Link"
                type="text"
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-4">
              <Button type="submit" loading={loading}>
                Sign In
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
