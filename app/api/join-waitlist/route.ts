import { NextResponse } from "next/server";
import { ctaSchema } from "@/zod_schema/CTA";
import { supabase } from "@/lib/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = ctaSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const { email } = result.data;

    // ✅ Insert into Supabase
    const { error } = await supabase
      .from("waitlist") // your table name
      .insert({ email });

    if (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Failed to join waitlist" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Successfully joined the waitlist" },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
