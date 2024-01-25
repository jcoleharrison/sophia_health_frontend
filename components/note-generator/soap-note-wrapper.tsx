import { Button } from '../ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../ui/card'
import SoapElementCard from './soap-element-card'

export default function NoteGeneratorWrapper() {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>SOAP Note</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 space-y-5 ">
          <SoapElementCard
            soapElement="Subjective"
            description="Patient's description of symptoms"
          ></SoapElementCard>
          <SoapElementCard
            soapElement="Objective"
            description="Measured, observed clinical data"
          ></SoapElementCard>
          <SoapElementCard
            soapElement="Assessment"
            description="Diagnosis based on S & O data"
          ></SoapElementCard>
          <SoapElementCard
            soapElement="Plan"
            description="Treatment, follow-up, patient care plan"
          ></SoapElementCard>
        </div>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Clear</Button>
          <Button>Save and Submit</Button>
        </CardFooter>
      </CardContent>
    </Card>
  )
}
