import { z } from "zod";

const MAX_FILE_SIZE = 1024 * 1024 * 10;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const suppliesValidationSchema = z.object({
  title: z.string().nonempty({ message: "this field is required" }),
  category: z.string().nonempty({ message: "This field is required" }),
  amount: z.string().nonempty({ message: "This field is required" }),

  image: z
    .any()
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 10MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  description: z.string().nonempty({ message: "This field is required" }),
});

export type SuppliesValidationSchema = z.infer<typeof suppliesValidationSchema>;
