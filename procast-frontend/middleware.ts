import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET as string;

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    const headers = new Headers(req.headers);
    headers.set("x-user", JSON.stringify(decoded));

    return NextResponse.next({ request: { headers } });
  } catch (err) {
    console.error("Invalid token:", err);
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  }
}

export const config = {
  matcher: [
    "/",
  ],
};
