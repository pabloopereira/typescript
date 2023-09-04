import fastify from 'fastify';

import { PrismaClient } from '@prisma/client';

const app = fastify();

const prisma = new PrismaClient();

app.get('/student', async () => {
    const student = await prisma.student.findMany();
    return student;
})
app.get('/teacher', async () => {
    const teacher = await prisma.teacher.findMany();
    return teacher;
})
app.get('/subject', async () => {
    const subject = await prisma.subject.findMany();
    return subject;
})
app.listen({
    port:3333,
}).then(() => {
    console.log("HTTP server running on http://localhost:3333")
})
