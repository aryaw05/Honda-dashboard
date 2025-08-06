import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

const authPage = ["/login"];
export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = [] //route yang didaftarkan harus login
) {
  // req disini berasa dari saat kita mengetikkan route pada browser
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;
    const token = req.cookies.get("token")?.value;

    // cek apakah requireAuth mengandung pathname
    if (requireAuth.includes(pathname)) {
      // ambil token dari next auth
      if (!token) {
        const url = new URL("/login", req.url);
        url.searchParams.set("callbackUrl", encodeURI(req.url));
        return NextResponse.redirect(url);
      }

      const res = await fetch("http://localhost:3000/api/users/current", {
        headers: { Authorization: token },
      });

      if (!res.ok) {
        const url = new URL("/login", req.url);
        url.searchParams.set("callbackUrl", encodeURI(req.url));
        return NextResponse.redirect(url);
      }
    }

    if (authPage.includes(pathname) && token) {
      const res = await fetch("http://localhost:3000/api/users/current", {
        headers: { Authorization: token },
      });

      if (res.ok) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }
    return middleware(req, next);
  };
}
