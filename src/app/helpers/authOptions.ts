import { NextAuthOptions } from "next-auth";
import { connectToDatabase } from "@/app/helpers/server-helpers";
import prisma from "@/lib/db/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials", // " Sign in with 'creds' "
            credentials: {
                email: { label: "Email", placeholder: "Enter Email: " },
                password: { label: "Password", placeholder: "Enter Password: ", type: "password" },
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
                    return null;
                } catch (error) {
                    console.log(error);
                    return null;
                } finally {
                    await prisma.$disconnect();
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },

    // NEXTAUTH_SECRET
    // Used to encrypt the NextAuth.js JWT, and to hash email verification tokens. This is the default value for the secret option in NextAuth and Middleware.

    secret: process.env.NEXTAUTH_SECRET,
};
