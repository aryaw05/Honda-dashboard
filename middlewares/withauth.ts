import { getToken } from "next-auth/jwt";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

const authPage = ["/login", "/register"];
export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = []
) {
  // req disini berasa dari saat kita mengetikkan route pada browser
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;
    // cek apakah requireAuth mengandung pathname
    if (requireAuth.includes(pathname)) {
      // ambil token dari next auth
      const token = req.cookies.get("token")?.value;

      if (!token) {
        const url = new URL("/login", req.url);
        url.searchParams.set("callbackUrl", encodeURI(req.url));
        return NextResponse.redirect(url);
      }

      if (token) {
        if (authPage.includes(pathname)) {
          return NextResponse.redirect(new URL("/", req.url));
        }
      }
    }

    return middleware(req, next);
  };
}
