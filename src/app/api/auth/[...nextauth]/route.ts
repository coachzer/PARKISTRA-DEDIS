// [...nextuath] -> dynamic slug
import { authOptions } from "@/app/helpers/authOptions";
import NextAuth from "next-auth/next";

// The Credentials provider allows you to handle signing in with arbitrary credentials, such as a username and password, two-factor authentication or hardware device

// The Credentials provider is specified like other providers, except that you need to define a handler for authorize() that accepts credentials submitted via HTTP POST as input and returns:

//   -  A user object, which indicates the credentials are valid.

// next-auth gives us a signin page

// first paramater is "providers", this can be Google, GitHub, etc.
// https://next-auth.js.org/providers/
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
