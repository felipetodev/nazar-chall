export interface Ticket {
  id: number
  assignee: string
  avatar: string
  title: string
  description: string
  status: 'open' | 'closed' | 'in-progress' | 'done'
  type: 'technical' | 'general' | 'sales' | 'support' | 'other'
  priority: 'low' | 'medium' | 'high'
  createdAt: number
  updatedAt: number
}

export interface TicketsState {
  tickets: Ticket[]
  filteredTickets: Ticket[]
  filteredKeys: {
    assignee: keyof Ticket['assignee'] | ''
    type: keyof Ticket['type'] | ''
    status: keyof Ticket['status'] | ''
  }
  sort: 'asc' | 'desc' | ''
  users: {
    name: string
    avatar: string
  }[]
}

export type TicketFilter = keyof Pick<Ticket, "assignee" | "status" | "type">
