"use client";

import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { InputLabel } from "../InputLabel";
import Button from "../Button";
import FileUploader from "../FileUploader";

export default function ProfileForm() {
  const [avatar, setAvatar] = useState<File | null>(null);

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
          <form>
            <div className="flex flex-col gap-6 mb-4">
              <FileUploader onFileSelect={setAvatar} />
              <InputLabel
                name="name"
                placeholder="Your name"
                type="text"
                required={true}
              />
              <InputLabel name="bio" placeholder="Bio" type="text" />
              <InputLabel name="link" placeholder="Link" type="text" />
            </div>
            <div className="flex flex-col gap-4">
              <Button type="submit">Sign In</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
