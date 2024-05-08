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
  CheckCheckIcon,
  CircleXIcon,
  FolderIcon,
  MailOpenIcon,
  SettingsIcon
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ModalSettings } from "@/components/modal-settings"
import { Avatar } from "@/components/ui/avatar"
import TimeAgo from "@/lib/hooks/use-time-ago"
import { FiltersSelectors } from "@/components/filters-selectors"
import { useStore } from "@/lib/hooks/use-store"
import { tableHeaders } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function FormTable() {
  const { tickets, onHandleSort } = useStore()
  return (
    <>
      <FiltersSelectors />
      <Table className="border">
        <TableCaption>This list contains all the tickets</TableCaption>
        <TableHeader>
          <TableRow>
            {tableHeaders.map((header) => {
              const isSortable = ["assignee", "status", "priority", "createdAt", "updatedAt"]
                .includes(header.key)
              return (
                <TableHead
                  key={header.key}
                  className={cn({
                    "cursor-pointer hover:underline hover:text-primary": isSortable,
                  })}
                  onClick={() => {
                    if (isSortable) {
                      onHandleSort(header.key)
                    }
                  }}
                >
                  {header.label}
                </TableHead>
              )
            })}
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
                  <span className="truncate">
                    {ticket.assignee}
                  </span>
                </div>
              </TableCell>
              <TableCell className="space-y-1">
                <div
                  title={`${ticket.title} - ${ticket.description}`}
                  className="block items-base w-full max-w-[50ch] truncate"
                >
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
                  {ticket.status === "done" && (<CheckCheckIcon className="size-4 mr-1" />)}
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
              <TableCell colSpan={7} className="text-center font-semibold">
                No tickets found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table >
    </>
  )
}
