import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

interface JwtPayload {
  id: number;
  name?: string;
  email?: string;
  exp: number;
  iat: number;
  sub?: number; // jika kamu menggunakan `sub` sebagai ID
}

const secret = process.env.JWT_SECRET as string;

export function middleware(req: NextRequest) {
  const token =
    req.headers.get("authorization")?.replace("Bearer ", "") ||
    req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  }

  try {
    const decoded = jwt.verify(token, secret) as JwtPayload;

    const userId = decoded.sub ?? decoded.id;
    if (!userId) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    // Optional: taruh data user di header (untuk API)
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-user-id", String(userId));

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (error) {
    console.error("JWT verification failed:", error);
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  }
}

export const config = {
  matcher: ["/"],
};
