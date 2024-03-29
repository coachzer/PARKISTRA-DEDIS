import { connectToDatabase } from "@/app/helpers/server-helpers";
import prisma from "@/lib/db/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToDatabase();
        const projects = await prisma.project.findMany();
        return NextResponse.json({ projects }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error - GET" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

export async function POST(request) {
    try {
        const { name, description } = await request.json();
        await connectToDatabase();
        const project = await prisma.project.create({ data: { name, description } });
        return NextResponse.json({ message: "Project created" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error - POST" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get("id");
    try {
        await connectToDatabase();
        const { data, error } = await prisma.project.delete({
            where: { id: id },
        });
        if (error) {
            return NextResponse({ message: "Failed to delete item" }, { status: 500 });
        }

        return NextResponse.json({ message: "Project deleted" }, { status: 200 });
        // return NextResponse.json({ message: "Project deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse({ message: "Internal Server Error - DELETE" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}


