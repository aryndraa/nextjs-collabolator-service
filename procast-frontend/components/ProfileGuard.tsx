"use client";

import { useUser } from "@/lib/stores/user";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const allowRoutes = ["/profile/make-profile", "/auth/sign-in", "/auth/sign-up"];

export default function ProfileGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const profile = useUser((state) => state.profile);

  useEffect(() => {
    if (!profile && !allowRoutes.includes(pathname)) {
      router.push("/profile/make-profile");
    }
  }, [profile, pathname, router]);

  return <>{children}</>;
}
