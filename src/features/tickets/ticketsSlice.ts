import { createSlice } from '@reduxjs/toolkit'
import { type PayloadAction } from '@reduxjs/toolkit'
import { type Ticket, type TicketsState } from './types'

const initialState: TicketsState = {
  tickets: [
    {
      id: 1,
      assignee: 'Veronica Ulloa',
      avatar: `/avatars/${String(Math.floor(Math.random() * 5) || 1).padStart(2, "0")}.png`,
      title: 'Ticket 1 lorem ipsum dolor sit amet',
      description: 'This is ticket 1',
      status: 'open',
      type: 'technical',
      priority: 'low',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: 2,
      assignee: 'Felipe Ossandon',
      avatar: `/avatars/${String(Math.floor(Math.random() * 5) || 1).padStart(2, "0")}.png`,
      title: 'Ticket 2 lorem ipsum dolor amet',
      description: 'This is ticket 2',
      status: 'closed',
      type: 'support',
      priority: 'medium',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: 3,
      assignee: 'Pablo Herrera',
      avatar: `/avatars/${String(Math.floor(Math.random() * 5) || 1).padStart(2, "0")}.png`,
      title: 'Ticket 3',
      description: 'This is ticket 3',
      status: 'in-progress',
      type: 'general',
      priority: 'high',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: 4,
      assignee: 'Cristian Vega',
      avatar: `/avatars/${String(Math.floor(Math.random() * 5) || 1).padStart(2, "0")}.png`,
      title: 'Ticket 4',
      description: 'This is ticket 4',
      status: 'open',
      type: 'technical',
      priority: 'low',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: 5,
      assignee: 'Javiera Paredes',
      avatar: `/avatars/${String(Math.floor(Math.random() * 5) || 1).padStart(2, "0")}.png`,
      title: 'Ticket 5',
      description: 'This is ticket 5',
      status: 'closed',
      type: 'support',
      priority: 'medium',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }
  ],
}

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    addTicket: (state, action: PayloadAction<Ticket>) => {
      state.tickets.push(action.payload)
    },
    removeTicket: (state, action: PayloadAction<number>) => {
      state.tickets = state.tickets.filter((ticket) => ticket.id !== action.payload)
    },
    updateTicket: (state, action: PayloadAction<Ticket>) => {
      const { id, title, description, status, type, priority, updatedAt } = action.payload
      const ticket = state.tickets.find((ticket) => ticket.id === id)
      if (ticket) {
        ticket.title = title
        ticket.description = description
        ticket.status = status
        ticket.type = type
        ticket.priority = priority
        ticket.updatedAt = updatedAt
      }
    },
  },
})

export const { addTicket, removeTicket, updateTicket } = ticketsSlice.actions

export default ticketsSlice.reducer
