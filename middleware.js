import { NextResponse } from "next/server";
import { auth } from "./app/_lib/auth";

export async function middleware(request) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.redirect(
      new URL(
        `/login?callbackUrl=${encodeURIComponent(request.nextUrl.pathname)}`,
        request.url,
      ),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/account", "/account/profile", "/account/reservations"],
};
