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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState } from 'react'
import DialogUploadTab from './dialog-upload-tab'

export default function DialogUpload() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Create New Session</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl md:min-h-96">
        <Tabs defaultValue="record" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="record">Record</TabsTrigger>
            <TabsTrigger value="upload">Upload</TabsTrigger>
          </TabsList>
          <TabsContent value="record"></TabsContent>
          <TabsContent value="upload">
            <DialogUploadTab />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
