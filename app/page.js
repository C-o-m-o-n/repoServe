import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { options } from './api/auth/[...nextauth]/options'
import UserCard from './components/UserCard'

export default async function Home() {
  const sessions = await getServerSession(options)

  return (
    <>
    {sessions ? (
      <UserCard />
      
    ) : (
      <h1>You shall not pass</h1>
    )}

    </>
  )
}
