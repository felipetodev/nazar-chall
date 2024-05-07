import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowDownUpIcon, CircleXIcon, FolderIcon, MailOpenIcon, SettingsIcon } from "lucide-react"
import { useSelector } from "react-redux"
import { type RootState } from '@/app/store'
import { Button } from "./components/ui/button"
import { ModalSettings } from "./components/modal-settings"
import { Avatar } from "./components/ui/avatar"

export default function App() {
  const { tickets } = useSelector((state: RootState) => state.tickets)

  console.log(tickets)

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Ticket</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Created</TableHead>
          <TableHead>Last Updated</TableHead>
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
            <TableCell>{ticket.priority}</TableCell>
            <TableCell>{String(ticket.updatedAt)}</TableCell>
            <TableCell>{String(ticket.updatedAt || ticket.createdAt)}</TableCell>
            <TableCell>
              <ModalSettings>
                <Button size="icon" variant="secondary">
                  <SettingsIcon className="size-5" />
                </Button>
              </ModalSettings>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  )
}
