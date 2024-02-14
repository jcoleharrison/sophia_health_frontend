import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '../ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import DialogUploadTab from './dialog-upload-tab'

export default function DialogUpload() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Create New Session</Button>
      </DialogTrigger>
      <DialogContent>
        <Tabs defaultValue="record" className="p-4">
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
