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

export async function PUT(request, { params }) {
    try {
        const { id } = params;
        const { newName: name, newDescription: description } = await request.json();

        await prisma.project.update({
            where: { id: id },
            data: { name, description },
        });

        return NextResponse.json({ message: "Project updated" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Server Error" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

export async function GET(request, { params }) {
    try {
        const { id } = params;

        const topic = await prisma.project.findUnique({
            where: { id: id },
        });

        return NextResponse.json({ topic }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Server Error" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
