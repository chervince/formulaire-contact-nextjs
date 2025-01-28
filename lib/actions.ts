"use server"

import { contactFormSchema } from "@/lib/schema"
import { z } from "zod"
import { supabase } from "./supabase"

export async function contactFormAction(_prevState: unknown, formData: FormData) {
  const defaultValues = z.record(z.string(), z.string()).parse(Object.fromEntries(formData.entries()))

  try {
    const data = contactFormSchema.parse(Object.fromEntries(formData))

    // Insérer les données du formulaire dans Supabase
    const { error } = await supabase.from("contact_submissions").insert([
      {
        name: data.name,
        email: data.email,
        message: data.message,
      },
    ])

    if (error) throw error

    return {
      defaultValues: {
        name: "",
        email: "",
        message: "",
      },
      success: true,
      errors: null,
    }
  } catch (error) {
    console.error("Erreur lors de la soumission du formulaire:", error)
    if (error instanceof z.ZodError) {
      return {
        defaultValues,
        success: false,
        errors: Object.fromEntries(
          Object.entries(error.flatten().fieldErrors).map(([key, value]) => [key, value?.join(", ")]),
        ),
      }
    }

    return {
      defaultValues,
      success: false,
      errors: { form: "Une erreur inattendue s'est produite. Veuillez réessayer." },
    }
  }
}

