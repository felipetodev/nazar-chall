export interface Ticket {
  id: number
  assignee: string
  avatar: string
  title: string
  description: string
  status: 'open' | 'closed' | 'in-progress'
  type: 'technical' | 'general' | 'sales' | 'support' | 'other'
  priority: 'low' | 'medium' | 'high'
  createdAt: number
  updatedAt: number
}

export interface TicketsState {
  tickets: Ticket[]
}
