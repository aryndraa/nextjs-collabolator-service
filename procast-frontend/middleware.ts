import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = ["/auth/sign-in"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token");

  console.log("Token di Middleware:", token);

  // Jika route public, lanjut saja
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Jika tidak ada token dan route bukan public → redirect
  if (!token) {
    const loginUrl = new URL("/auth/sign-in", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|auth/sign-in).*)"], // jalankan middleware untuk semua route kecuali public
};
