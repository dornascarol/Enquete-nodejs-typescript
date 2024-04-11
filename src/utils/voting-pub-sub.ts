type Message = { pollOptionId: string, votes: number}
type Subscriber = (message: Message) => void

class VotingPubSub {
    private channels: Record<string, Subscriber[]> = {}
}