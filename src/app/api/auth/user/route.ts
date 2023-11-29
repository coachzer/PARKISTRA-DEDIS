import { connectToDatabase } from "@/app/helpers/server-helpers";
import prisma from "@/lib/db/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectToDatabase();
        const users = await prisma.user.findMany();
        return NextResponse.json({ users }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Server Error" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};
