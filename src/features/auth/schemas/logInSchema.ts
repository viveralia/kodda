import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const logInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must contain at least 8 characters"),
});

export type LogInSchema = z.infer<typeof logInSchema>;

export const resolver = zodResolver(logInSchema);
