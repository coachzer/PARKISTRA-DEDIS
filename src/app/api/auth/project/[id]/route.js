import { connectToDatabase } from "@/app/helpers/server-helpers";
import prisma from "@/lib/db/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req) {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("id");
    try {
        await connectToDatabase();
        const { data, error } = await prisma.project.delete({
            where: { id: id },
        });
        if (error) {
            return NextResponse({ message: "Failed to delete item" }, { status: 500 });
        }

        return NextResponse.json({ data });
        // return NextResponse.json({ message: "Project deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse({ message: "Internal Server Error - DELETE" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
