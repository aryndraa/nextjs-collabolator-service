"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Button from "../Button";
import { InputLabel } from "../InputLabel";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/utils/services/auth";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import { profile } from "@/utils/services/profile";
import { useUser } from "@/lib/stores/user";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const setProfile = useUser((state) => state.setProfile);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login({
        email,
        password,
      });

      setLoading(false);

      router.push("/");

      toast.success("Sign In Successfuly");
    } catch (err) {
      toast.error("Invalid Credentials");
      setLoading(false);

      console.log(err);
    }
  };

  return (
    <>
      <ToastContainer />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6 mb-4">
              <InputLabel
                name="email"
                placeholder="example@gmail.com"
                type="text"
                value={email}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputLabel
                name="password"
                placeholder="******"
                type="password"
                required={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-4">
              <Button type="submit" loading={loading}>
                Sign In
              </Button>
              <span className="flex gap-1 text-sm font-medium text-zinc-500">
                Don&apos;t have account?
                <Link href={"/auth/sign-up"} className="text-primary-100">
                  Sign Up
                </Link>
              </span>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
