import { z } from "zod";

const MAX_FILE_SIZE = 1024 * 1024 * 10;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const userRegistrationSchema = z.object({
  userName: z.string().nonempty({ message: "User name is required" }),
  email: z.string().email({ message: "type valid email" }),
  password: z
    .string()
    .min(6, { message: "password can't less then 6 character" })
    .max(12, { message: "password can't more then 12 character" }),
  image: z
    .any()
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});

export type UserValidationSchema = z.infer<typeof userRegistrationSchema>;
