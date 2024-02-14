import React from 'react'
import { mockTranscription } from '@/helpers/mockData'

const TranscriptionCard = () => {
  return (
    <div className="mt-10 block max-w-[300px] rounded-lg border border-gray-200 bg-white p-6 shadow sm:max-w-[700px]">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
        Transcription
      </h5>
      {mockTranscription.map((item) => (
        <div key={item.id} className='flex items-start'>
          {item.person === 'Therapist' ? (
            <img
            className='h-16'
              src="/icons/healthWorker.svg"
              alt="Health Worker"
              width={25}
              height={25}
            />
          ) : (
            <img className='h-[54px]' src="/icons/person.svg" alt="Person" width={25} height={25} />
          )}
          <p className="mt-4 font-normal text-black">
            <span className="font-bold">{item.person}</span>:{' '}
            {item.transcription}
          </p>
        </div>
      ))}
    </div>
  )
}

export default TranscriptionCard
