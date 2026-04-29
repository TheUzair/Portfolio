import { z } from 'zod';

export const contactSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  budget: z.string().min(1),
  message: z.string().min(10),
});

export type ContactPayload = z.infer<typeof contactSchema>;
