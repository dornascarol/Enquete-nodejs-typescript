import { z } from "zod"
import { prisma } from "../../lib/prisma"
import { FastifyInstance } from "fastify"
import { redis } from "../../lib/redis"

export async function getPoll(app: FastifyInstance) {
    app.get('/polls/:pollId', async (request, reply) => {
        const getPollParams = z.object({
            pollId: z.string().uuid(),
        })
        
        const { pollId } = getPollParams.parse(request.params)
    
        const poll = await prisma.poll.findUnique({
            where: {
                id: pollId,
            },
            include: {
                options: {
                    select: {
                        id: true,
                        title: true,
                    }
                }
            }
        })

        if (!poll) {
            return reply.status(400).send({ message: "Enquete não encontrada" })
        }

        const result = await redis.zrange(pollId, 0, -1, 'WITHSCORES')

        const votes = result.reduce(() => {}, {} as Record<string, number>)

        return reply.status(200).send({ poll })
    })
}