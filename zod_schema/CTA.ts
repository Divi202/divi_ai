import { z } from "zod";

// Define your shared Zod schema
export const ctaSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
});

// Infer TypeScript type
export type CtaInput = z.infer<typeof ctaSchema>;
