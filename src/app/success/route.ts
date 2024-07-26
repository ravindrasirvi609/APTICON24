import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const msg = formData.get("msg") as string;
  console.log("msg:", msg);

  if (!msg) {
    return NextResponse.json(
      { error: "Missing msg in request body" },
      { status: 400 }
    );
  }

  // Encode the msg for safe URL transport
  const encodedMsg = encodeURIComponent(msg);
  console.log("********encodedMsg:", encodedMsg);

  // Construct the absolute URL
  const baseUrl = new URL(req.url).origin; // Extract the base URL from the request
  const redirectUrl = new URL(`${baseUrl}/payment-succesful`);
  redirectUrl.searchParams.set("msg", encodedMsg);

  // Redirect to the success page with the msg as a query parameter
  return NextResponse.redirect(redirectUrl.toString(), 302);
}
