"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUser } from "@/lib/stores/user";
import { login } from "@/utils/services/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../Button";
import { InputLabel } from "../InputLabel";
import { getProfile } from "@/utils/services/profile";

export function LoginForm() {
  const router = useRouter();
  const setProfile = useUser((state) => state.setProfile);
  const setIsAuthenticated = useUser((state) => state.setIsAuthenticated);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login({
        email,
        password,
      });

      setIsAuthenticated(true);

      try {
        const userProfile = await getProfile();
        setProfile(userProfile);
        setLoading(false);

        toast.success("Sign in successfully");

        router.replace("/");
      } catch (err: any) {
        if (err?.response?.status === 404) {
          setLoading(false);

          toast.success("Sign in successfully");
          toast.info("Complete your profile");

          router.replace("/profile/make-profile");
        } else {
          throw err;
        }
      }
    } catch (err) {
      toast.error("Invalid Credentials");
      setLoading(false);

      console.log(err);
    }
  };

  return (
    <>
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
