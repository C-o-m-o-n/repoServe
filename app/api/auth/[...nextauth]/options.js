import GitHub from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options = {
    providers: [
        GitHub({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET 
        }),
    CredentialsProvider({
        name:'Credentials',
        credentials:{
            name:{
                label: "Username",
                type: "text",
                placeholder:"Enter your Username"
            },
            password:{
                label: "Password",
                type: "password",
                placeholder:"Enter your Password"
            }
        },
        async authorize(credentials){
            const user = {id: "10", name:"Collins", password:"nextAuth"}
            if(credentials.name === user.name && credentials.password === user.password){
                return user
            }else{
                return null
            }
        }
    }),




        // Facebook({
        //   clientId: process.env.FACEBOOK_ID,
        //   clientSecret: process.env.FACEBOOK_SECRET
        // }),
        // Google({
        //   clientId: process.env.GOOGLE_ID,
        //   clientSecret: process.env.GOOGLE_SECRET
        // })
      ]
}