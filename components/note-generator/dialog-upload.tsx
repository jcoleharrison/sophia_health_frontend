import { CopyIcon } from '@radix-ui/react-icons'

import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

import { useState } from 'react'

export default function DialogUpload() {
  const [fileSubmitted, setFileSubmitted] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0])
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle file upload logic here
    if (selectedFile) {
      console.log('Selected file:', selectedFile)
      // Perform file upload operation
      setFileSubmitted(true)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Upload</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Record Session</DialogTitle>
          <DialogDescription>
            Upload an existing audio session.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center space-x-2">
            <div className="mb-2 grid flex-1 gap-2">
              <div className="grid w-full max-w-xl items-center gap-1.5">
                <Label htmlFor="audio_file">Audio File</Label>

                <Input
                  id="audio_file"
                  type="file"
                  onChange={handleFileChange}
                />
              </div>
              <DialogDescription>
                Accepted file types are .mp3, .m4a, or .wav files.
              </DialogDescription>
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="submit">Submit</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
