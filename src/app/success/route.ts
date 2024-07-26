import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const msg = formData.get("msg") as string;

  if (!msg) {
    return new NextResponse(
      JSON.stringify({ error: "Missing msg in request body" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Encode the msg for safe URL transport
  const encodedMsg = encodeURIComponent(msg);

  // Redirect to the success page with the msg as a query parameter
  return NextResponse.redirect(`/Job-Admin?msg=${encodedMsg}`, 302);
}

export async function onRequest(req: NextRequest) {
  if (req.method === "POST") {
    return POST(req);
  } else {
    return new NextResponse(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }
}
