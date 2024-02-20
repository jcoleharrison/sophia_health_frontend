// page.tsx (server component) is where we'll fetch data and render our table.
import { useRouter } from 'next/navigation'
import { Patient, columns } from './columns'
import { DataTable } from './data-table'
import { ChevronRight } from 'lucide-react'
import NavItem from '@/components/nav-item'
async function getData(): Promise<Patient[]> {
  // Fetch data from your API here.
  return [
    {
      name: 'Cole Harrison',
      id: '1',
      lastSession: new Date('2/6/24 07:08'),
      criticalNotes: 'Nervous Ticking',
      status: 'Active',
    },
    {
      name: 'Steven Lim',
      id: '2',
      lastSession: new Date('1/30/24 07:08'),
      criticalNotes: 'Nail Biting',
      status: 'Inactive',
    },
    {
      name: 'Austin Davis',
      id: '3',
      lastSession: new Date('1/23/24 07:08'),
      criticalNotes: 'General Questions',
      status: 'Active',
    },
    {
      name: 'LeBron James',
      id: '4',
      lastSession: new Date('1/16/24 07:08'),
      criticalNotes: 'Likes Dunking',
      status: 'Active',
    },
    {
      name: 'Kevin Durant',
      id: '5',
      lastSession: new Date('4/6/22 07:08'),
      criticalNotes: 'Likes Shooting',
      status: 'Inactive',
    },
    {
      name: 'Austin Reeves',
      id: '6',
      lastSession: new Date('5/14/21 07:08'),
      criticalNotes: 'Oklahoma',
      status: 'Active',
    },
    {
      name: 'Rajon Rondo',
      id: '7',
      lastSession: new Date('12/9/23 07:08'),
      criticalNotes: 'Pass-first',
      status: 'Active',
    },
    {
      name: 'George Lopez',
      id: '8',
      lastSession: new Date('12/2/23 07:08'),
      criticalNotes: 'Comedian',
      status: 'Inactive',
    },
    {
      name: 'Baron Davis',
      id: '9',
      lastSession: new Date('9/18/22 07:08'),
      criticalNotes: 'Shooter/Scorer',
      status: 'Active',
    },
    {
      name: 'Steph Curry',
      id: '10',
      lastSession: new Date('5/24/21 07:08'),
      criticalNotes: '3 Point Specialist',
      status: 'Active',
    },
    {
      name: 'Robert Darwin',
      id: '11',
      lastSession: new Date('12/6/22 07:08'),
      criticalNotes: 'Entrepreneur',
      status: 'Inactive',
    },
    {
      name: 'Anthony Davis',
      id: '12',
      lastSession: new Date('12/12/20 07:08'),
      criticalNotes: 'University of Kentucky',
      status: 'Active',
    },
  ]
}

export default async function Home() {
  const data = await getData()
  return (
    <div className="mx-50 container py-10">
      <div className="flex">
        <NavItem name="Home" route="/" />
        <ChevronRight />
        <span>Patients</span>
      </div>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Patient List
      </h2>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
