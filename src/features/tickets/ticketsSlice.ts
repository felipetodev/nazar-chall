import { createSlice } from '@reduxjs/toolkit'
import { type PayloadAction } from '@reduxjs/toolkit'
import { type Ticket, type TicketsState } from './types'

const initialState: TicketsState = {
  tickets: [
    {
      id: 1,
      title: 'Ticket 1',
      description: 'This is ticket 1',
      status: 'open',
      type: 'bug',
      priority: 'low',
      createdAt: '2021-01-01T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
    },
    {
      id: 2,
      title: 'Ticket 2',
      description: 'This is ticket 2',
      status: 'closed',
      type: 'feature',
      priority: 'medium',
      createdAt: '2021-01-02T00:00:00.000Z',
      updatedAt: '2021-01-02T00:00:00.000Z',
    },
    {
      id: 3,
      title: 'Ticket 3',
      description: 'This is ticket 3',
      status: 'in-progress',
      type: 'task',
      priority: 'high',
      createdAt: '2021-01-03T00:00:00.000Z',
      updatedAt: '2021-01-03T00:00:00.000Z',
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
