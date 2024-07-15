import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const orderId = searchParams.get("orderId");
  const transactionId = searchParams.get("transactionId");
  const transactionStatus = searchParams.get("transactionStatus");
  const transactionAmount = searchParams.get("transactionAmount");

  // Process successful transaction
  // Update your database, send confirmation emails, etc.

  // Redirect to the success page with relevant data
  return NextResponse.redirect(
    new URL(
      `/success?orderId=${orderId}&transactionId=${transactionId}`,
      request.url
    )
  );
}
