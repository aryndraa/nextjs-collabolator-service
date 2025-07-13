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
            <div className="flex flex-col gap-2">
              <Button type="submit">Confirm</Button>
              <Button variant="secondary">
                <Link href={"/auth/sign-in"}>Sign in</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
