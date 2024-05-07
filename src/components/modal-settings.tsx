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

type Props = {
  children: React.ReactNode
}

export function ModalSettings({ children }: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-4">
            Ticket Settings
          </AlertDialogTitle>
          <div className="flex flex-col gap-y-4">
            <label htmlFor="assignee" className="text-xs">Assign To:</label>
            <div className="flex items-center">
              <Avatar src="" alt="Avatar 1" />
              <Select>
                <SelectTrigger id="assignee" className="ml-4 w-max" aria-label="Assign To">
                  <SelectValue placeholder="Assign To" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name1">
                    <div className="flex w-full justify-between mx-auto items-center space-x-2">
                      <Avatar src="" alt="Avatar 1" className="size-6 border" />
                      <span>
                        Name 1
                      </span>
                    </div>
                  </SelectItem>
                  <SelectItem value="name2">
                    <div className="flex items-center space-x-2">
                      <Avatar src="" alt="Avatar 1" className="size-6 border" />
                      <span>
                        Name 2
                      </span>
                    </div>
                  </SelectItem>
                  <SelectItem value="name3">
                    <div className="flex items-center space-x-2">
                      <Avatar src="" alt="Avatar 1" className="size-6 border" />
                      <span>
                        Name 3
                      </span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="title" className="text-xs mb-3">Ticket Title</label>
              <Input id="title" placeholder="New ticket" />
            </div>
            <div>
              <label htmlFor="description" className="text-xs mb-3">Ticket Description</label>
              <Input autoComplete="off" id="description" placeholder="Ticket description" />
            </div>
            <div className="flex space-x-5">
              <div>
                <label htmlFor="type" className="text-xs mb-3">
                  Type:
                </label>
                <Select defaultValue="">
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
                <label htmlFor="status" className="text-xs mb-3">
                  Status:
                </label>
                <Select defaultValue="">
                  <SelectTrigger id="status" className="max-w-[120px]" aria-label="Ticket Status">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Save</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}