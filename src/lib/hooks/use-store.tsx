import { useDispatch, useSelector } from "react-redux"
import {
  handleFilter,
  removeFilter,
  resetFilters,
  handleSort,
  addNewTicket,
  removeTicket,
  updateTicket
} from "@/features/tickets/ticketsSlice"
import { type RootState } from "@/app/store"
import { type Ticket, type TicketFilter } from "@/features/tickets/types"


export function useStore() {
  const { users, filteredTickets: tickets, filteredKeys } = useSelector((state: RootState) => state.tickets)
  const dispatch = useDispatch()

  const onHandleFilter = (filter: { key: TicketFilter, value: string }) => {
    dispatch(handleFilter(filter))
  }

  const onRemoveFilter = (key: TicketFilter) => {
    dispatch(removeFilter(key))
  }

  const onHandleSort = (key: keyof Ticket) => {
    dispatch(handleSort(key))
  }

  const onAddNewTicket = (ticket: Ticket) => {
    dispatch(addNewTicket(ticket))
  }

  const onRemoveTicket = (ticket: Ticket) => {
    dispatch(removeTicket(ticket))
  }

  const onUpdateTicket = (ticket: Ticket) => {
    dispatch(updateTicket(ticket))
  }

  return {
    users,
    tickets,
    filteredKeys,
    onHandleSort,
    onHandleFilter,
    onRemoveFilter,
    onResetFilters: () => dispatch(resetFilters()),
    onAddNewTicket,
    onRemoveTicket,
    onUpdateTicket
  }
}
