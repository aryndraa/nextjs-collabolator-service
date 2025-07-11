"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Button from "../Button";
import { InputLabel } from "../InputLabel";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/utils/services/auth";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await login(email, password);
      router.push("/"); // arahkan ke dashboard setelah login
    } catch (err) {
      setError("Email atau password salah");
      console.error(err);
    }
  };

  return (
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
          <div className="flex flex-col gap-2">
            <Button type="submit">Login</Button>
            <Button variant="secondary">Sign Up</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
