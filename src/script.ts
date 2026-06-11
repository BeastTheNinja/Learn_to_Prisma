import bcrypt from "bcrypt";
import { prisma } from "./lib/prisma";

async function main() {
    const hashedPassword = await bcrypt.hash("123456", 10);

    const user = await prisma.user.create({
        data: {
            email: "sebastian@test.dk",
            password: hashedPassword,
            firstName: "Sebastian",
            lastName: "Larsen",
        },
    });

    console.log(user);
}

main()
    .catch(console.error)
    .finally(async () => {
        await prisma.$disconnect();
    });