import React from "react";
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
import Link from "next/link";

export default function RegisterForm() {
  return (
    <>
      <ToastContainer />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Register Account</CardTitle>
          <CardDescription>Create your account </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6 mb-4">
              <InputLabel
                name="email"
                placeholder="example@gmail.com"
                type="text"
                required={true}
              />
              <InputLabel
                name="password"
                placeholder="******"
                type="password"
                required={true}
              />
              <InputLabel
                name="password_confirmation"
                placeholder="******"
                label="Confirm Passsword"
                type="password"
                required={true}
              />
            </div>
            <div className="flex flex-col gap-4">
              <Button type="submit">Confirm</Button>
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
