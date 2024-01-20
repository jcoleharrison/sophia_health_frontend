'use client'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form'
import { Input } from './ui/input'

const formSchema = z.object({
  searchQuery: z.string().optional(),
})

export default function Search() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery: '',
    },
  })

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full">
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input
                    type="search"
                    placeholder="Search"
                    {...field}
                    className=" hover:border-1 hover:border-gray-500 focus:border-gray-300"
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        ></FormField>
      </form>
    </Form>
  )
}

export { Search }
