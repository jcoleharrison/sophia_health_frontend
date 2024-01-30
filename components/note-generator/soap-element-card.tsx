import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '../ui/textarea'

type SoapElementCardProps = {
  soapElement: string
  description: string
}

export default function SoapElementCard(props: SoapElementCardProps) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-xl">{props.soapElement}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Textarea
              id={props.soapElement.toLowerCase()}
              placeholder={`${props.soapElement}...`}
              className="" // Adjust the height value as needed
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
