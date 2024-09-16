'use server';

import { z } from 'zod';
<<<<<<< HEAD
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
=======
>>>>>>> 129883a63e19cb2198f6e4dd418cd2615cf09193

const FormSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string(),
});
const CreateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
<<<<<<< HEAD
    const {customerId, amount, status} = CreateInvoice.parse({
=======
    const rawFormData = {} = CreateInvoice.parse({
>>>>>>> 129883a63e19cb2198f6e4dd418cd2615cf09193
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    });
<<<<<<< HEAD
    const amountInCents = amount * 100;
    const date = new Date ().toISOString().split('T')[0];

    await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;
  
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
=======
    console.log(typeof rawFormData.amount);
>>>>>>> 129883a63e19cb2198f6e4dd418cd2615cf09193
}
