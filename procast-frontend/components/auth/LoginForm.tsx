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

export function LoginForm() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <InputLabel
              name="email"
              placeholder="example@gmail.com"
              type="text"
            />
            <InputLabel name="password" placeholder="******" type="password" />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button>Login</Button>
        <Button type="secondary">Sign Up</Button>
      </CardFooter>
    </Card>
  );
}
