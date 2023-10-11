'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const formSchema = z.object({
  title: z.string().min(1, {
    message: 'Title must be at least 1 character long',
  }),
})

export default function CreatePage() {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema as any),
    defaultValues: {
      title: '',
    },
  })

  const { isSubmitting, isValid } = form.formState

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post('/api/courses', values)
      router.push(`/teacher/courses/${response.data.id}`)
    } catch (error: any) {
      toast.error('Something went wrong. Please try again.')
    }
  }

  return (
    <div className='max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6'>
      <div className=''>
        <h1 className='text-2xl'>Course Name</h1>
        <p className='text-sm text-slate-600'>
          What would you like to name your course? This can be cha nged later
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-8 mt-8'>
            <FormField
              name='title'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder='e.g. Advanced Svelte Course'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    What will you teach in this course
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex items-center gap-x-2'>
              <Link href={'/'}>
                <Button type='button' variant={'ghost'}>
                  Cancel
                </Button>
              </Link>
              <Button disabled={!isValid || isSubmitting} type='submit'>
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
