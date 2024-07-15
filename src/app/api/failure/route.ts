import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const orderId = searchParams.get("orderId");
  const errorCode = searchParams.get("errorCode");
  const errorMessage = searchParams.get("errorMessage");

  // Log the failed transaction
  // Update your database, send notification to admin, etc.

  // Redirect to the failure page with relevant data
  return NextResponse.redirect(
    new URL(
      `/failure?orderId=${orderId}&errorMessage=${errorMessage}`,
      request.url
    )
  );
}
