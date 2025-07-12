import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET as string;

export function middleware(req: NextRequest) {
  const token =
    req.headers.get("authorization")?.replace("Bearer ", "") ||
    req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  }

  try {
    const decoded = jwt.verify(token, secret);
    // Optional: taruh data user di header (untuk API)
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set(
      "x-user-id",
      String((decoded as any).sub || (decoded as any).id)
    );
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
