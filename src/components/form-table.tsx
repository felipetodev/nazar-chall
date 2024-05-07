import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ArrowDownUpIcon,
  CircleXIcon,
  FolderIcon,
  MailOpenIcon,
  SettingsIcon
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "@/components/ui/button"
import { ModalSettings } from "@/components/modal-settings"
import { Avatar } from "@/components/ui/avatar"
import TimeAgo from "@/lib/hooks/use-time-ago"
import { handleSort } from '@/features/tickets/ticketsSlice'
import { FiltersSelectors } from "@/components/filters-selectors"
import { type RootState } from '@/app/store'

export function FormTable() {
  const { filteredTickets: tickets } = useSelector((state: RootState) => state.tickets)
  const dispatch = useDispatch()
  return (
    <>
      <FiltersSelectors />
      <Table className="border">
        <TableCaption>This list contains all the tickets</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead
              className="cursor-pointer hover:underline hover:text-primary"
              onClick={() => dispatch(handleSort("assignee"))}
            >
              User
            </TableHead>
            <TableHead>Ticket</TableHead>
            <TableHead
              className="cursor-pointer hover:underline hover:text-primary"
              onClick={() => dispatch(handleSort("status"))}
            >
              Status
            </TableHead>
            <TableHead
              className="cursor-pointer hover:underline hover:text-primary"
              onClick={() => dispatch(handleSort("priority"))}
            >
              Priority
            </TableHead>
            <TableHead
              className="cursor-pointer hover:underline hover:text-primary"
              onClick={() => dispatch(handleSort("createdAt"))}
            >
              Created
            </TableHead>
            <TableHead
              className="cursor-pointer hover:underline hover:text-primary"
              onClick={() => dispatch(handleSort("updatedAt"))}>
              Last Updated
            </TableHead>
            <TableHead className="w-[100px]">Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-card">
          {tickets.map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell className="font-medium">
                <div className="flex items-center space-x-2">
                  <Avatar
                    src={ticket.avatar}
                    alt={ticket.assignee}
                  />
                  <span>
                    {ticket.assignee}
                  </span>
                </div>
              </TableCell>
              <TableCell className="space-y-1">
                <div className="block items-base">
                  <span className="font-semibold">
                    {ticket.title}
                  </span>
                  <span className="mx-2">-</span>
                  <span>
                    {ticket.description}
                  </span>
                </div>
                <Badge className="uppercase">
                  <FolderIcon className="size-3 mr-1" />
                  {ticket.type}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant={ticket.status}>
                  {ticket.status === "open" && (<MailOpenIcon className="size-4 mr-1" />)}
                  {ticket.status === "closed" && (<CircleXIcon className="size-4 mr-1" />)}
                  {ticket.status === "in-progress" && (<ArrowDownUpIcon className="size-4 mr-1" />)}
                  {ticket.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge>{ticket.priority}</Badge>
              </TableCell>
              <TableCell><TimeAgo timestamp={ticket.createdAt} /></TableCell>
              <TableCell>
                <TimeAgo timestamp={ticket.updatedAt || ticket.createdAt} />
              </TableCell>
              <TableCell>
                <ModalSettings
                  variant="settings"
                  ticket={ticket}
                >
                  <Button size="icon" variant="secondary">
                    <SettingsIcon className="size-5" />
                  </Button>
                </ModalSettings>
              </TableCell>
            </TableRow>
          ))}
          {tickets.length === 0 && (
            <TableRow>
              <TableCell colSpan={7} className="text-center">
                No tickets found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  )
}
