"use client";

import { useUser } from "@/lib/stores/user";
import { profile } from "@/utils/services/profile";
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
  const getProfile = useUser((state) => state.profile);
  const setProfile = useUser((state) => state.setProfile);

  useEffect(() => {
    const fetchProfile = async () => {
      const userProfile = await profile();

      if (userProfile) {
        setProfile(userProfile);
      } else if (!getProfile && !allowRoutes.includes(pathname)) {
        router.push("/profile/make-profile");
      }
    };

    fetchProfile();
  }, [getProfile, pathname, router, setProfile]);

  return <>{children}</>;
}
