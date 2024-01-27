import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string().min(1).max(15),
  password: z.string().min(8).max(10),
});

export type User = z.infer<typeof LoginSchema>;
