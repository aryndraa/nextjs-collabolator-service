import { LoginForm } from "@/components/auth/LoginForm";

export default function page() {
  return (
    <div className="absolute min-h-[100dvh] inset-0 bg-white flex justify-center items-center">
      <LoginForm />
    </div>
  );
}
