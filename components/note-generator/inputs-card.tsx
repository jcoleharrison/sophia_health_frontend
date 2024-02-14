'use client'

import { useState } from 'react'
import { Label } from '@radix-ui/react-label'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import DialogWrapper from './dialog-wrapper'
import TranscriptionCard from './transcription-card'

export default function InputsWrapperCard() {
  const [isRecording, setIsRecording] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  const handleRecordClick = () => {
    setIsRecording(true)
    setIsUploading(false)
    // Add your record logic here
  }

  const handleUploadClick = () => {
    setIsRecording(false)
    setIsUploading(true)
    // Add your upload logic here
  }

  return (
    <div className="lg:ml-60 ml-10 max-w-[250px] sm:max-w-full">
      <Card>
        <CardHeader>
          <CardTitle>Transcript Generator</CardTitle>
          <CardDescription>
            Click record below to begin a session or upload an existing session
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col  ">
            <form className="space-y-3">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="session-type">Session Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual</SelectItem>
                    <SelectItem value="group">Group</SelectItem>
                    <SelectItem value="family">Family</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex space-x-4">
                <DialogWrapper />
              </div>
              {/*3: Make card with two textareas in it: transcription and supplemental therapist notes   */}
            </form>
          </div>
        </CardContent>
      </Card>
      <TranscriptionCard />
    </div>
  )
}
