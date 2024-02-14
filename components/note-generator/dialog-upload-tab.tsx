import { useState } from 'react'
import axios from 'axios'
import { Button } from '../ui/button'
import { Progress } from '@/components/ui/progress'
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'

export default function DialogUploadTab() {
  const [fileSubmitted, setFileSubmitted] = useState<Boolean>(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [progress, setProgress] = useState(0)

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      const formData = new FormData()
      formData.append('video', file)
      try {
        const response = await axios.post('/api/uploadVideo', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const progress = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              )
               setProgress(progress)
            }
          },
        })
        console.log('Video uploaded successfully!', response.data)
        setFileSubmitted(true)
      } catch (error) {
        console.error('Failed to upload video', error)
      }
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (selectedFile) {
      console.log('Selected file:', selectedFile)
      setFileSubmitted(true)
    }
  }

  return (
    <div className="space-y-4">
      <DialogHeader className="flex items-center">
        <DialogTitle className="mb-1 mt-4">Upload Session</DialogTitle>
        <DialogDescription>Upload an existing audio session.</DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit}>
        {progress > 0 ? (
          <div className="min-h-[50px]">
            <div className="mt-10 flex w-full items-center justify-evenly gap-4">
              <Progress value={progress} className="h-3 w-[70%]" />
              <p>{progress}%</p>
            </div>
            <p className="mb-14 mt-10 w-64 truncate text-sm">
              <span className="font-bold">Name of File: </span>
              {selectedFile?.name}
            </p>
          </div>
        ) : (
          <div className="flex w-full items-center justify-center">
            <label className="mb-6 flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pb-4 pt-5">
                <svg
                  className="mb-4 h-8 w-8 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500">
                  Accepted file types are .mp3, .m4a, or .wav files.
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={handleUpload}
              />
            </label>
          </div>
        )}
        <Button className="w-full">Send File</Button>
      </form>
    </div>
  )
}
