'use client'

import { useState } from 'react'
import { z } from 'zod'

import { Button } from '../ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '../ui/card'
import SoapElementCard from './soap-element-card'
import { fieldsName } from '@/helpers/nameOfFields'
import { formSchema } from '@/helpers/validationFormSchema'

type FormValues = {
  subjective: string
  objective: string
  assessment: string
  plan: string

  [key: string]: string
}

type FormErrors = {
  subjective: string
  objective: string
  assessment: string
  plan: string
  [key: string]: string
}

const SoapWrapperCard = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    subjective: '',
    objective: '',
    assessment: '',
    plan: '',
  })

  const [errors, setErrors] = useState<FormErrors>({
    subjective: '',
    objective: '',
    assessment: '',
    plan: '',
  })

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }))
  }

  const clearFormFields = () => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      subjective: '',
      objective: '',
      assessment: '',
      plan: '',
    }))
    setErrors({
      subjective: '',
      objective: '',
      assessment: '',
      plan: '',
    })
  }

  const handleSubmit = () => {
    try {
      formSchema.parse(formValues)
      console.log('Form submitted successfully:', formValues)
      setErrors({
        subjective: '',
        objective: '',
        assessment: '',
        plan: '',
      })
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        subjective: '',
        objective: '',
        assessment: '',
        plan: '',
      }))
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors: FormErrors = {
          subjective: '',
          objective: '',
          assessment: '',
          plan: '',
        }
        error.errors.forEach((err) => {
          const fieldName = err.path[0] as keyof FormErrors
          formattedErrors[fieldName] = err.message
        })
        setErrors(formattedErrors)
        console.log(errors.assessment)
      }
    }
  }

  return (
    <Card className="sm:w-full border-0 max-w-[320px]">
      <CardHeader>
        <CardTitle>SOAP Note</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-3">
          {fieldsName.map((item) => (
            <SoapElementCard
              key={item.element}
              soapElement={item.element}
              description={item.description}
              handleChange={handleChange}
              value={formValues[item.element]}
              name={item.element}
              error={errors[item.element]}
            />
          ))}
        </form>
        <CardFooter className="max-w-[300px] 2xl:max-w-full mt-4 flex justify-between md:flex-row md:justify-evenly">
          <Button onClick={handleSubmit}>Submit</Button>
          <Button variant="outline" onClick={clearFormFields}>
            Clear
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  )
}

export default SoapWrapperCard
