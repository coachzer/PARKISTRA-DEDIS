// [...nextuath] -> dynamic slug
import { connectToDatabase } from "@/app/helpers/server-helpers";
import prisma from "@/lib/db/prisma";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

// The Credentials provider allows you to handle signing in with arbitrary credentials, such as a username and password, two-factor authentication or hardware device

// The Credentials provider is specified like other providers, except that you need to define a handler for authorize() that accepts credentials submitted via HTTP POST as input and returns: 

//   -  A user object, which indicates the credentials are valid.

// next-auth gives us a signin page
export default authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials", // " Sign in with 'creds' "
            credentials: {
                email: { label: "Email", placeholder: "Enter Email: " },
                password: { label: "Password", placeholder: "Enter Password: " },
            },
            async authorize(credentials) {
                if (!credentials || !credentials.email || !credentials.password) {
                    return null;
                }

                try {
                    await connectToDatabase();

                    const user = await prisma.user.findFirst({
                        where: { email: credentials.email },
                    });

                    if (!user?.hashedPassword) {
                        return null;
                    }

                    const isPasswordCorrect = await bcrypt.compare(
                        credentials.password,
                        user.hashedPassword
                    );

                    if (isPasswordCorrect) {
                        return user;
                    }
                } catch (error) {
                    console.log(error);
                    return null;
                } finally {
                    await prisma.$disconnect();
                }
            },
        }),
    ],

    // NEXTAUTH_SECRET
    // Used to encrypt the NextAuth.js JWT, and to hash email verification tokens. This is the default value for the secret option in NextAuth and Middleware.

    secret: process.env.NEXTAUTH_SECRET,
};

// first paramater is "providers", this can be Google, GitHub, etc.
// https://next-auth.js.org/providers/
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
