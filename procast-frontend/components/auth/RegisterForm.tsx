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
import Link from "next/link";
import { register } from "@/utils/services/auth";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setpasswordConfirm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await register({
        email,
        password,
        passwordConfirm,
      });

      setLoading(false);
      router.push("/profile/make-profile");
    } catch (err) {
      toast.error("Invalid Credential");

      setLoading(false);
      console.log(err);
    }
  };

  return (
    <>
      <ToastContainer />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Register Account</CardTitle>
          <CardDescription>Create your account </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6 mb-4">
              <InputLabel
                name="email"
                placeholder="example@gmail.com"
                type="text"
                required={true}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputLabel
                name="password"
                placeholder="******"
                type="password"
                required={true}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputLabel
                name="password_confirmation"
                placeholder="******"
                label="Confirm Passsword"
                type="password"
                required={true}
                onChange={(e) => setpasswordConfirm(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-4">
              <Button type="submit" loading={loading}>
                Confirm
              </Button>
              <span className="flex gap-1 text-sm font-medium text-zinc-500">
                Already have account?
                <Link href={"/auth/sign-in"} className="text-primary-100">
                  Sign In
                </Link>
              </span>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
