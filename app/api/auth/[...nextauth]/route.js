import nextAuth from 'next-auth'
import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import { options } from './options'
// import Facebook from 'next-auth/providers/facebook'
// import Google from 'next-auth/providers/google'


const Handler = nextAuth(options)

export {Handler as GET, Handler  as POST}
