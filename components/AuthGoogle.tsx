"use client";

import { supabaseBrowser } from "@/utils/supabase/browser";
import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function AuthGoogle() {
  console.log(location.origin);

  const handleLoginWithGoogle = async () => {
    const supabase = supabaseBrowser();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: location.origin + "/auth/callback",
      },
    });
  };

  return (
    <button
      onClick={handleLoginWithGoogle}
      className="flex cursor-pointer items-center justify-center gap-4 w-full p-3 border border-zinc-500 rounded-lg"
    >
      <span>
        <FcGoogle />
      </span>
      Sign in with Google{" "}
    </button>
  );
}
