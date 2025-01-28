import { z } from "zod"

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Le nom doit contenir au moins 2 caractères" })
    .max(100, { message: "Le nom ne doit pas dépasser 100 caractères" }),
  email: z.string().email({ message: "Adresse e-mail invalide" }),
  message: z
    .string()
    .min(10, { message: "Le message doit contenir au moins 10 caractères" })
    .max(1000, { message: "Le message ne doit pas dépasser 1000 caractères" }),
})

