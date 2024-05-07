import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useDispatch, useSelector } from "react-redux"
import { handleFilter, removeFilter, resetFilters } from '@/features/tickets/ticketsSlice'
import { ModalSettings } from "@/components/modal-settings"
import { CirclePlusIcon, CircleXIcon } from "lucide-react"
import { type RootState } from "@/app/store"

export function FiltersSelectors() {
  const { users, filteredKeys } = useSelector((state: RootState) => state.tickets)
  const dispatch = useDispatch()

  return (
    <div className="flex items-centers space-x-4 py-4">
      <Select
        value={filteredKeys.assignee as string}
        onValueChange={value => {
          dispatch(handleFilter({ key: 'assignee', value }))
        }}
      >
        <div className="relative h-max w-max">
          <SelectTrigger id="users" className="w-max !justify-start" aria-label="User Selector">
            <SelectValue placeholder="Filter by User" />
            {filteredKeys.assignee && (
              <div className="w-4 mx-2" />
            )}
          </SelectTrigger>
          {filteredKeys.assignee && (
            <button
              className="group absolute flex items-center px-1 top-0 right-8 h-full justify-center"
              onClick={() => {
                dispatch(removeFilter("assignee"))
              }}
            >
              <CircleXIcon className="text-primary size-4 group-hover:text-primary/70" />
            </button>
          )}
        </div>
        <SelectContent className="!justify-start">
          {users.map((user) => (
            <SelectItem key={user.name} value={user.name}>
              {user.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={filteredKeys.type as string}
        onValueChange={value => {
          dispatch(handleFilter({ key: 'type', value }))
        }}
      >
        <div className="relative h-max w-max">
          <SelectTrigger id="type" className="w-max" aria-label="Ticket Type">
            <SelectValue placeholder="Filter by Priority" />
            {filteredKeys.type && (
              <div className="w-4 mx-2" />
            )}
          </SelectTrigger>
          {filteredKeys.type && (
            <button
              className="group absolute flex items-center px-1 top-0 right-8 h-full justify-center"
              onClick={() => {
                dispatch(removeFilter("type"))
              }}
            >
              <CircleXIcon className="text-primary size-4 group-hover:text-primary/70" />
            </button>
          )}
        </div>
        <SelectContent>
          <SelectItem value="technical">Technical</SelectItem>
          <SelectItem value="general">General</SelectItem>
          <SelectItem value="sales">Sales</SelectItem>
          <SelectItem value="support">Support</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filteredKeys.status as string}
        onValueChange={value => {
          dispatch(handleFilter({ key: 'status', value }))
        }}
      >
        <div className="relative h-max w-max">
          <SelectTrigger id="status" className="w-max" aria-label="Ticket Status">
            <SelectValue placeholder="Filter by Status" />
            {filteredKeys.status && (
              <div className="w-4 mx-2" />
            )}
          </SelectTrigger>
          {filteredKeys.status && (
            <button
              className="group absolute flex items-center px-1 top-0 right-8 h-full justify-center"
              onClick={() => {
                dispatch(removeFilter("status"))
              }}
            >
              <CircleXIcon className="text-primary size-4 group-hover:text-primary/70" />
            </button>
          )}
        </div>
        <SelectContent>
          <SelectItem value="open">Open</SelectItem>
          <SelectItem value="closed">Closed</SelectItem>
          <SelectItem value="in-progress">In Progress</SelectItem>
        </SelectContent>
      </Select>

      <Button onClick={() => dispatch(resetFilters())}>
        Clear all filters
      </Button>

      <div className="flex items-center !ml-auto">
        <ModalSettings
          variant="create"
        >
          <Button variant="secondary">
            Create new ticket
            <CirclePlusIcon className="ml-2 size-5" />
          </Button>
        </ModalSettings>
      </div>
    </div>
  )
}