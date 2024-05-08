import { useState } from "react"
import { Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { TrashIcon } from "lucide-react"
import { useStore } from "@/lib/hooks/use-store"
import { toast } from "sonner"
import { type Ticket } from "@/features/tickets/types"

type Props = {
  variant: "settings"
  ticket: Ticket
  children: React.ReactNode
} | {
  variant: "create"
  ticket?: undefined
  children: React.ReactNode
}

const DEFAULT_NEW_TICKET = {
  id: new Date().getTime(),
  avatar: "",
  assignee: "",
  title: "",
  description: "",
  type: "",
  status: "open",
  priority: "",
}

export function ModalSettings({ variant, ticket: ticket_, children }: Props) {
  const [ticket, setTicket] = useState(ticket_ || DEFAULT_NEW_TICKET)
  const {
    users,
    onAddNewTicket,
    onRemoveTicket,
    onUpdateTicket
  } = useStore()

  return (
    <AlertDialog
      onOpenChange={open => {
        if (variant === "create" && !open) setTicket(DEFAULT_NEW_TICKET)
        if (variant === "settings" && !open) setTicket(ticket_)
      }}
    >
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-4">
            {variant === "create" && "Create Ticket"}
            {variant === "settings" && "Ticket Settings"}
          </AlertDialogTitle>
          <div className="flex flex-col gap-y-4">
            <label htmlFor="assignee" className="ml-1 text-xs">Assign To:</label>
            <div className="flex items-center">
              {(ticket.assignee && ticket.avatar) ? (
                <Avatar src={ticket.avatar} alt={ticket.assignee} />
              ) : (
                <Avatar src="" alt="User" />
              )}
              <Select
                defaultValue={ticket.assignee}
                onValueChange={(assignee) => {
                  setTicket({ ...ticket, assignee })
                }}
              >
                <SelectTrigger id="assignee" className="ml-4 min-w-[150px] w-max" aria-label="Assign To">
                  <SelectValue placeholder="Assign To:" />
                </SelectTrigger>
                <SelectContent className="!justify-start">
                  {users.map((user) => (
                    <SelectItem key={user.name} value={user.name}>
                      {user.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {variant === "create" && (
                <div className="w-full flex items-center">
                  <span className="mx-4">or</span>
                  <Input
                    placeholder="Type new user"
                    value={ticket.assignee}
                    onChange={({ target }) => {
                      setTicket({ ...ticket, assignee: target.value })
                    }}
                  />
                </div>
              )}
            </div>
            <div>
              <label htmlFor="title" className="ml-1 text-xs mb-3">
                Ticket Title
              </label>
              <Input
                value={ticket.title}
                onChange={({ target }) => {
                  setTicket({ ...ticket, title: target.value })
                }}
                id="title"
                placeholder="New ticket"
              />
            </div>
            <div>
              <label htmlFor="description" className="ml-1 text-xs mb-3">
                Ticket Description
              </label>
              <Input
                value={ticket.description}
                onChange={({ target }) => {
                  setTicket({ ...ticket, description: target.value })
                }}
                autoComplete="off"
                id="description"
                placeholder="Ticket description"
              />
            </div>
            <div className="flex space-x-5">
              <div>
                <label htmlFor="type" className="ml-1 text-xs mb-3">
                  Type:
                </label>
                <Select
                  defaultValue={ticket.type}
                  onValueChange={(type: Ticket["type"]) => {
                    setTicket({ ...ticket, type })
                  }}
                  {...(variant === "settings") ? {
                    disabled: ticket_.status === "done"
                  } : {}}
                >
                  <SelectTrigger id="type" className="max-w-[120px]" aria-label="Ticket Type">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technical">Technical</SelectItem>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="status" className="ml-1 text-xs mb-3">
                  Status:
                </label>
                <Select
                  defaultValue={ticket.status}
                  onValueChange={(status: Ticket["status"]) => {
                    setTicket({ ...ticket, status })
                  }}
                  {...variant === "settings" ? {
                    disabled: ticket_.status !== "open"
                  } : {}}
                >
                  <SelectTrigger id="status" className="max-w-[120px]" aria-label="Ticket Status">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">
                      Open
                    </SelectItem>
                    <SelectItem value="closed">
                      Closed
                    </SelectItem>
                    <SelectItem value="in-progress">
                      In Progress
                    </SelectItem>
                    <SelectItem value="done">
                      Done
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="priority" className="ml-1 text-xs mb-3">
                  Priority:
                </label>
                <Select
                  defaultValue={ticket.priority}
                  onValueChange={(priority: Ticket["priority"]) => {
                    setTicket({ ...ticket, priority })
                  }}
                  {...(variant === "settings") ? {
                    disabled: ticket_.status === "done"
                  } : {}}
                >
                  <SelectTrigger id="priority" className="max-w-[120px]" aria-label="Ticket Priority">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {variant === "settings" && (
            <AlertDialogCancel
              onClick={() => {
                onRemoveTicket(ticket as Ticket)
              }}
              className="bg-red-600 hover:bg-red-600/60 flex items-center mr-auto"
            >
              <TrashIcon className="size-4 mr-2" />
              Delete Ticket
            </AlertDialogCancel>
          )}
          <AlertDialogCancel>
            Cancel
          </AlertDialogCancel>
          {variant === "create" && (
            <AlertDialogAction
              onClick={(e) => {
                // add zod validation
                if (!ticket.assignee || !ticket.title || !ticket.description || !ticket.type || !ticket.status || !ticket.priority) {
                  e.preventDefault()
                  return toast.error("Please fill in all fields")
                }
                onAddNewTicket(ticket as Ticket)
                setTicket(DEFAULT_NEW_TICKET)
              }}
            >
              Create Ticket
            </AlertDialogAction>
          )}
          {variant === "settings" && (
            <AlertDialogAction
              onClick={() => {
                onUpdateTicket(ticket as Ticket)
              }}
            >
              Save Changes
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}