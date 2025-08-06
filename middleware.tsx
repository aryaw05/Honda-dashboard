import { NextRequest, NextResponse } from "next/server";
import withAuth from "./middlewares/withauth";

export function mainMiddleware(request: NextRequest) {
  const res = NextResponse.next();

  return res;
}

// function ini akan dijalankan sebelum semua kode program di eksekusi
export default withAuth(mainMiddleware, [
  "/dashboard/motors/add-data",
  "/dashboard/motors/show-data",
]);
