import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const msg = formData.get("msg") as string;

  if (msg) {
    // Parse the msg
    const [
      status,
      code,
      merchantId,
      purpose,
      orderId,
      customerId,
      amount,
      currency,
      paymentMethod,
      timestamp,
      referenceId,
      transactionId,
      resultIndicator,
      ...staticValues
    ] = msg.split("|");

    // Create a parsed data object
    const parsedData = {
      status,
      code,
      merchantId,
      purpose,
      orderId,
      customerId,
      amount,
      currency,
      paymentMethod,
      timestamp,
      referenceId,
      transactionId,
      resultIndicator,
      staticValues,
    };

    // Store the parsed data in the URL as encoded JSON
    const successPageUrl = new URL("/success", request.url);
    successPageUrl.searchParams.set(
      "data",
      encodeURIComponent(JSON.stringify(parsedData))
    );

    // Redirect to the success page with the data
    return NextResponse.redirect(successPageUrl);
  } else {
    return NextResponse.redirect(new URL("/error", request.url));
  }
}
