export interface Ticket {
  id: number
  title: string
  description: string
  status: 'open' | 'closed' | 'in-progress'
  type: 'bug' | 'feature' | 'task'
  priority: 'low' | 'medium' | 'high'
  createdAt: string
  updatedAt: string
}

export interface TicketsState {
  tickets: Ticket[]
}
