import { createSlice } from '@reduxjs/toolkit'
import { INITIAL_STATE, INITIAL_USERS } from '@/lib/constants'
import { toast } from 'sonner'
import { type PayloadAction } from '@reduxjs/toolkit'
import { type TicketFilter, type Ticket, type TicketsState } from './types'

const initialState: TicketsState = {
  tickets: INITIAL_STATE,
  filteredTickets: INITIAL_STATE,
  users: INITIAL_USERS,
  filteredKeys: {
    assignee: '',
    type: '',
    status: ''
  },
  sort: ''
}

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    addNewTicket: (state, action: PayloadAction<Ticket>) => {
      const { tickets } = state;
      const { payload } = action;

      const newTicket = {
        ...payload,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        avatar: `/avatars/${String(Math.floor(Math.random() * 5) || 1).padStart(2, "0")}.png`
      }

      toast.success(`Ticket ${newTicket.title} has been created!`)

      return {
        ...state,
        tickets: [newTicket, ...tickets],
        filteredTickets: [newTicket, ...tickets],
        users: [{ name: newTicket.assignee, avatar: newTicket.avatar }, ...state.users]
      }
    },
    removeTicket: (state, action: PayloadAction<Ticket>) => {
      const { tickets } = state;
      const { payload } = action;

      toast.success(`Ticket ID: ${payload.id} has been removed!`)

      return {
        ...state,
        tickets: tickets.filter((ticket) => ticket.id !== payload.id),
        filteredTickets: tickets.filter((ticket) => ticket.id !== payload.id)
      }
    },
    updateTicket: (state, action: PayloadAction<Ticket>) => {
      const { tickets } = state;
      const { payload } = action;

      const updatedTicket = {
        ...payload,
        updatedAt: Date.now()
      }

      toast.success(`Ticket ${updatedTicket.title} has been updated!`)

      const updatedTicketSorted = tickets
        .map((ticket) => ticket.id === updatedTicket.id ? updatedTicket : ticket)
        .sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 1))

      return {
        ...state,
        tickets: updatedTicketSorted,
        filteredTickets: updatedTicketSorted
      }
    },
    handleSort: (state, action: PayloadAction<keyof Ticket>) => {
      const { sort, tickets } = state;
      const { payload } = action;

      if (sort === 'asc') {
        return {
          ...state,
          filteredTickets: tickets.slice().sort((a, b) => (a[payload] > b[payload] ? 1 : -1)),
          sort: 'desc'
        }
      } else {
        return {
          ...state,
          filteredTickets: tickets.slice().sort((a, b) => (a[payload] < b[payload] ? 1 : -1)),
          sort: 'asc'
        }
      }
    },
    handleFilter: (state, action: PayloadAction<{ key: TicketFilter, value: string }>) => {
      const { tickets, filteredKeys } = state;
      const { payload } = action;
      const { key, value } = payload;

      const updatedFilteredKeys = {
        ...filteredKeys,
        [key]: value
      }

      const updatedFilteredTickets = Object.entries(updatedFilteredKeys)
        .filter(([, value]) => value)
        .reduce((acc, [key, value]) => {
          return acc.filter((ticket) => ticket[key as TicketFilter] === value)
        }, tickets)

      return {
        ...state,
        filteredKeys: updatedFilteredKeys,
        filteredTickets: updatedFilteredTickets
      }
    },
    removeFilter: (state, action: PayloadAction<TicketFilter>) => {
      const { tickets, filteredKeys } = state;
      const { payload: key } = action;

      const updatedFilteredKeys = {
        ...filteredKeys,
        [key]: ''
      }

      const updatedFilteredTickets = Object.entries(updatedFilteredKeys)
        .filter(([, value]) => value)
        .reduce((acc, [key, value]) => {
          return acc.filter((ticket) => ticket[key as TicketFilter] === value)
        }, tickets)

      return {
        ...state,
        filteredKeys: updatedFilteredKeys,
        filteredTickets: updatedFilteredTickets
      }
    },
    resetFilters: (state) => {
      return {
        ...state,
        filteredKeys: {
          assignee: '',
          type: '',
          status: ''
        },
        filteredTickets: state.tickets
      }
    }
  },
})

export const {
  addNewTicket,
  removeTicket,
  updateTicket,
  handleSort,
  handleFilter,
  removeFilter,
  resetFilters
} = ticketsSlice.actions

export default ticketsSlice.reducer
