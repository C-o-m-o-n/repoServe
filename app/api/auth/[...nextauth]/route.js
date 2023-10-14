import nextAuth from 'next-auth'
import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import { options } from './options'
// import Facebook from 'next-auth/providers/facebook'
// import Google from 'next-auth/providers/google'


const handler = nextAuth(options)

export {handler as GET, handler  as POST}
