'use client'
import { ChevronRight } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useRouter } from 'next/navigation'

export default function Home({ params }: { params: { id: any } }) {
  const patientData = {
    sessions: [
      {
        id: 1,
        name: 'Cole Harrison',
        sessionName: [
          {
            date: '2024-02-12',
            sessionName: 'Coping with Stress and Anxiety',
          },
          {
            date: '2024-02-15',
            sessionName: 'Managing Depression and Mood Swings',
          },
          {
            date: '2024-02-19',
            sessionName: 'Overcoming Grief and Loss',
          },
          {
            date: '2024-02-22',
            sessionName: 'Building Resilience and Self-Esteem',
          },
          {
            date: '2024-02-25',
            sessionName: 'Effective Communication in Relationships',
          },
          {
            date: '2024-02-28',
            sessionName: 'Exploring Trauma and Healing',
          },
          {
            date: '2024-03-02',
            sessionName: 'Mindfulness and Stress Reduction Techniques',
          },
          {
            date: '2024-03-05',
            sessionName: 'Family Dynamics and Conflict Resolution',
          },
          {
            date: '2024-03-08',
            sessionName: 'Understanding and Managing Anger',
          },
          {
            date: '2024-03-11',
            sessionName: 'Self-Compassion and Acceptance',
          },
        ],
      },
      {
        id: 2,
        name: 'Steven Lim',
        sessionName: [
          {
            date: '2024-02-14',
            sessionName: 'Dribbling Techniques',
          },
          {
            date: '2024-02-17',
            sessionName: 'Shooting Drills',
          },
          {
            date: '2024-02-20',
            sessionName: 'Defensive Strategies',
          },
          {
            date: '2024-02-23',
            sessionName: 'Team Offense Tactics',
          },
          {
            date: '2024-02-26',
            sessionName: 'Rebounding Techniques',
          },
          {
            date: '2024-02-29',
            sessionName: 'Passing Fundamentals',
          },
          {
            date: '2024-03-03',
            sessionName: 'Conditioning and Fitness',
          },
          {
            date: '2024-03-06',
            sessionName: 'Game Strategy Analysis',
          },
          {
            date: '2024-03-09',
            sessionName: 'Scrimmage and Game Simulation',
          },
          {
            date: '2024-03-12',
            sessionName: 'Player Development Workshop',
          },
        ],
      },
    ],
  }
  function idMatch(idRequested: any) {
    for (let i = 0; i < patientData.sessions.length; i++) {
      if (patientData.sessions[i].id == idRequested) {
        return i
      }
    }
    return -1
  }
  const currentUser: any = idMatch(params.id)
  const router = useRouter()

  if (currentUser == -1) {
    return <h1>USER NOT FOUND or PAGE NOT FOUND COMPONENT</h1>
  } else {
    return (
      <div className="mx-50 container py-10">
        <div className="flex grow flex-col">
          <div className="flex">
            <button onClick={() => router.push('/')} className="underline">
              Home
            </button>
            <ChevronRight />
            <button
              onClick={() => router.push('/patients')}
              className="underline"
            >
              Patients
            </button>
            <ChevronRight />
            <span>{patientData.sessions[currentUser].name}</span>
          </div>
          <div className="mt-10 border-b ">
            <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Patient: {patientData.sessions[currentUser].name}
            </h1>
            <h1>Demographic 1: Detail</h1>
            <h1>Demographic 2: Other Detail</h1>
          </div>
          <Table className="">
            <TableHeader>
              <TableRow>
                <TableHead className="grow-[1]">Date</TableHead>
                <TableHead className="grow-[2]">Session Name</TableHead>
                <TableHead className="grow-[1]">Tools</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patientData.sessions[currentUser].sessionName.map((x) => (
                <TableRow key={'name'}>
                  <TableCell>
                    <h1>{x.date}</h1>
                  </TableCell>
                  <TableCell>
                    <h1>{x.sessionName}</h1>
                  </TableCell>
                  <TableCell>
                    <h1>Tool</h1>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableCaption>A list of your recent invoices.</TableCaption>
          </Table>
        </div>
      </div>
    )
  }
}
