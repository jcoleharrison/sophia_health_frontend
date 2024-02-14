import InputsWrapperCard from '@/components/note-generator/inputs-card'
import SoapWrapperCard from '@/components/note-generator/soap-wrapper-card'

export default function Home() {
  return (
    <div className="flex max-h-screen w-screen flex-col overflow-auto pt-5 sm:pl-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <InputsWrapperCard></InputsWrapperCard>
        </div>
        <SoapWrapperCard />
      </div>
    </div>
  )
}
