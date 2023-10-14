'use client'
// Remember you must use an AuthProvider for 
// client components to useSession
import { useSession, signIn, signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'
import UserCard from '../components/UserCard'

export default function ClientPage() {
     const { data: session } = useSession()
    // {
    //     required: true,
    //     onUnauthenticated() {
    //         redirect('/api/auth/signin?callbackUrl=/client')
    //     }
    // })
    if (session){
        return(
            <div>
                <h1>Client</h1>
                <p>You are successfully signedin to the client page</p>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        )
    }

    return (
        <section className="flex flex-col gap-6">
            <h1>Client</h1>
                <p>You are not signedin to the client page. Please click the button bellow to signin</p>
                <button onClick={() => signIn()}>Sign In</button>
        </section>
    )
}