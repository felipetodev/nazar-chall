import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ModalSettings } from "@/components/modal-settings"
import { CirclePlusIcon, CircleXIcon } from "lucide-react"
import { useStore } from "@/lib/hooks/use-store"

export function FiltersSelectors() {
  const {
    users,
    filteredKeys,
    onHandleFilter,
    onRemoveFilter,
    onResetFilters
  } = useStore()

  return (
    <div className="flex flex-col lg:flex-row gap-y-2 items-centers py-4">
      <div className="flex gap-x-4">
        <Select
          value={filteredKeys.assignee as string}
          onValueChange={value => onHandleFilter({ key: 'assignee', value })}
        >
          <div className="relative h-max w-full lg:w-max">
            <SelectTrigger id="users" className="w-full lg:w-max" aria-label="User Selector">
              <SelectValue placeholder="Filter by User" />
              {filteredKeys.assignee && (
                <div className="w-4 mx-2" />
              )}
            </SelectTrigger>
            {filteredKeys.assignee && (
              <button
                className="group absolute flex items-center px-1 top-0 right-8 h-full justify-center"
                onClick={() => onRemoveFilter("assignee")}
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
          onValueChange={value => onHandleFilter({ key: 'type', value })}
        >
          <div className="relative h-max w-full lg:w-max">
            <SelectTrigger id="type" className="w-full lg:w-max" aria-label="Ticket Type">
              <SelectValue placeholder="Filter by Priority" />
              {filteredKeys.type && (
                <div className="w-4 mx-2" />
              )}
            </SelectTrigger>
            {filteredKeys.type && (
              <button
                className="group absolute flex items-center px-1 top-0 right-8 h-full justify-center"
                onClick={() => onRemoveFilter("type")}
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
          onValueChange={value => onHandleFilter({ key: 'status', value })}
        >
          <div className="relative h-max w-full lg:w-max">
            <SelectTrigger id="status" className="w-full lg:w-max" aria-label="Ticket Status">
              <SelectValue placeholder="Filter by Status" />
              {filteredKeys.status && (
                <div className="w-4 mx-2" />
              )}
            </SelectTrigger>
            {filteredKeys.status && (
              <button
                className="group absolute flex items-center px-1 top-0 right-8 h-full justify-center"
                onClick={() => onRemoveFilter("status")}
              >
                <CircleXIcon className="text-primary size-4 group-hover:text-primary/70" />
              </button>
            )}
          </div>
          <SelectContent>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="done">Done</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-x-5 lg:ml-4 w-full">
        <Button className="w-full lg:w-auto" onClick={() => onResetFilters()}>
          Clear all filters
        </Button>

        <div className="flex items-center w-full lg:w-auto lg:!ml-auto">
          <ModalSettings
            variant="create"
          >
            <Button variant="secondary" className="w-full lg:w-auto">
              Create new ticket
              <CirclePlusIcon className="ml-2 size-5" />
            </Button>
          </ModalSettings>
        </div>
      </div>
    </div>
  )
}