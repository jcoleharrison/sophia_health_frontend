import * as React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Textarea } from '../ui/textarea'

type SoapElementCardProps = {
  soapElement: string
  description: string
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  value: string
  name: string
  error: string
}

export default function SoapElementCard({
  soapElement,
  description,
  handleChange,
  value,
  name,
  error,
}: SoapElementCardProps) {
  return (
    <Card className="max-w-[300px] 2xl:max-w-full">
      <CardHeader>
        <CardTitle className="text-xl">{soapElement}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Textarea
              id={soapElement.toLowerCase()}
              placeholder={`${soapElement}...`}
              onChange={handleChange}
              value={value}
              name={name}
              className={
                error &&
                'block w-full rounded-lg border border-red-500 bg-red-50 p-2.5 text-sm text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500'
              }
            />
            <p className="mt-2 text-sm text-red-600">{error}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
