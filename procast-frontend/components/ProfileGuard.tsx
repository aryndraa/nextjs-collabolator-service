"use client";

import { useUser } from "@/lib/stores/user";
import { getProfile } from "@/utils/services/profile";
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
  const setProfile = useUser((state) => state.setProfile);
  const isAuthenticated = useUser((state) => state.isAuthenticated);

  useEffect(() => {
    const fetchProfile = async () => {
      if (isAuthenticated) {
        if (!profile) {
          const userProfile = await getProfile();

          if (userProfile) {
            setProfile(userProfile);
          } else if (!profile && !allowRoutes.includes(pathname)) {
            router.push("/profile/make-profile");
          }
        }
      }
    };

    fetchProfile();
  }, [profile, pathname, router, setProfile, isAuthenticated]);

  return <>{children}</>;
}
