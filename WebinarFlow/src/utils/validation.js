import { email, z } from "zod";

export const dobValidate = z.object({
  dob: z.string().min(4, "Invalid Dob"),
});

export const detailsValidate = z.object({
  name: z.string().min(4, "name too small"),
  email: z.email(),
  phone: z.string().min(10, "Please Entere a vaild phone number"),
});
