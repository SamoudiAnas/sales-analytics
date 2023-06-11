import { z } from "zod";

export const signUpFormSchema = z
  .object({
    name: z.string().min(3, { message: "Name is Required!" }),
    email: z.string().email("Email is required!"),
    password: z.string().min(8, { message: "Password is Required!" }),
    confirmPassword: z.string().min(8, { message: "Password is Required!" }),
    agreement: z.literal(true, {
      errorMap: () => ({ message: "You must accept Terms and Conditions" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
  });

export type SignUpForm = z.infer<typeof signUpFormSchema>;

export const signInFormSchema = z.object({
  email: z.string().email("Email is required!"),
  password: z.string().min(8, { message: "Password is Required!" }),
});

export type SignInForm = z.infer<typeof signInFormSchema>;
