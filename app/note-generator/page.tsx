import NoteGeneratorWrapper from '@/components/note-generator/soap-note-wrapper'

export default function Home() {
  return (
    <div className="flex max-h-screen w-screen flex-col overflow-auto pl-10 pt-5">
      <h1> Transcript Generator</h1>
      Click record below to begin a session or upload an existing session
      <NoteGeneratorWrapper />
    </div>
  )
}
