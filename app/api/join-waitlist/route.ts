import { NextResponse } from "next/server";
import { ctaSchema } from "@/zod_schema/CTA";
import { supabase } from "@/lib/server";
/**
 * API route to handle joining the waitlist.
 * Validates the email and inserts it into the 'waitlist' table in Supabase.
 */
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
    // Sending data to the waitlist table in Supabase
    //Note: RLS is disabled for this table, so we can access the data directly
    const { data, error } = await supabase
      .from("waitlist")
      .insert([{ email }])
      .select();

    if (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Failed to join waitlist" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Successfully joined the waitlist", data },
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
