import { z } from "zod";

const MAX_FILE_SIZE = 1024 * 1024 * 10;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const volunteerValidationSchema = z.object({
  name: z.string().nonempty({ message: "name is required"}),
  email: z
    .string()
    .nonempty({ message: "email is required" })
    .email({ message: "type a valid email" }),
  contactNo: z.string().nonempty({ message: "Phone number is required" }),
  address: z.string().nonempty({ message: "Address is required" }),
  image: z
    .any()
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 10MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  time: z
    .string()
    .nonempty({ message: "Working hour required and max 8 hour" }),
});

export type VolunteerValidationSchema = z.infer<
  typeof volunteerValidationSchema
>;
