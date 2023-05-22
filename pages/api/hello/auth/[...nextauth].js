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
                try {
                    const res = await axios.post('http://localhost:3001/api/users/login?timestamp=${new Date().getTime()}', {
                      email,
                      password,
                    });
                if (res) {
                    const user = res.data.user;
                    const token = res.data.accessToken;
                    console.log(user);
                    console.log(token);
                    return {
                        redirect: '/dashboard',
                      };
                    } else {
                      console.log('ERROR');
                      return null;
                    }
                  } catch (error) {
                    console.log(error);
                    return null;
                  }
                },
            }),
          ],
        pages: {
            signIn: '/login'
        },
        secret: process.env.NEXTAUTH_SECRET 
        });
