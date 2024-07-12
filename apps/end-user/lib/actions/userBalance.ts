'use server'

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/auth";
import prisma from "@repo/db/client";

export async function getUserBalance() {
    const session = await getServerSession(authOptions);

    const userBalance =  await prisma.balance.findFirst({
        where: {
            userId: Number(session?.user.id),
        },
        orderBy: {
            timestamp: "desc"
        },
        take: 1,
        select: {
            totalBalance: true,
            locked: true,
        }
    });

    return {
        amount: userBalance?.totalBalance || 0,
        locked: userBalance?.locked || 0,
    }
}