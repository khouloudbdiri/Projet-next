import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
export default NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {

                const { email, password } = credentials;
                console.log(email, password)

                const res = await
                    axios.post('http://localhost:3001/api/user', {
                        email,
                        password
                    })
                if (res) {
                    const user = res.data.result;
                    const token = res.data.token;
                    console.log(user)
                    console.log(token)
                    return user;
                }
                
            }
        })

    ],
    pages: {
        signIn: '/login'
    },
    secret: process.env.NEXTAUTH_SECRET
}); 
