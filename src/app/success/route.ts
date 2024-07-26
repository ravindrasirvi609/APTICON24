import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const msg = formData.get("msg") as string;

  if (!msg) {
    return NextResponse.json(
      { error: "Missing msg in request body" },
      { status: 400 }
    );
  }

  // Encode the msg for safe URL transport
  const encodedMsg = encodeURIComponent(msg);

  // Redirect to the success page with the msg as a query parameter
  return NextResponse.redirect(`/success?msg=${encodedMsg}`);
}
