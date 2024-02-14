import { z } from 'zod'

const nonEmpty = (value: string | number): boolean => {
  return !!value
}

export const formSchema = z.object({
  objective: z.string().refine(nonEmpty, {
    message: 'Objective must not be empty',
  }),
  subjective: z.string().refine(nonEmpty, {
    message: 'Subjective must not be empty',
  }),
  assessment: z.string().refine(nonEmpty, {
    message: 'Assessment must not be empty',
  }),
  plan: z.string().refine(nonEmpty, {
    message: 'Plan must not be empty',
  }),
})
