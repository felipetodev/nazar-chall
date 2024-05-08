import { type Ticket } from "@/features/tickets/types";

export const INITIAL_STATE: Ticket[] = [
  {
    id: 1, // ticketId
    assignee: 'Veronica Ulloa',
    avatar: `/avatars/${String(Math.floor(Math.random() * 5) || 1).padStart(2, "0")}.png`,
    title: 'Ticket 1 lorem ipsum dolor sit amet',
    description: 'This is ticket 1',
    status: 'open',
    type: 'technical',
    priority: 'low',
    createdAt: Date.now() - 10000000,
    updatedAt: Date.now() - 4000000,
  },
  {
    id: 2,
    assignee: 'Felipe Ossandon',
    avatar: `/avatars/${String(Math.floor(Math.random() * 5) || 1).padStart(2, "0")}.png`,
    title: 'Ticket 2 lorem ipsum dolor amet',
    description: 'This is ticket 2',
    status: 'closed',
    type: 'support',
    priority: 'medium',
    createdAt: Date.now() - 5000000,
    updatedAt: Date.now() - 1000000,
  },
  {
    id: 3,
    assignee: 'Pablo Herrera',
    avatar: `/avatars/${String(Math.floor(Math.random() * 5) || 1).padStart(2, "0")}.png`,
    title: 'Ticket 3',
    description: 'This is ticket 3',
    status: 'in-progress',
    type: 'general',
    priority: 'high',
    createdAt: Date.now() - 1000000,
    updatedAt: Date.now() - 500000,
  },
  {
    id: 4,
    assignee: 'Cristian Vega',
    avatar: `/avatars/${String(Math.floor(Math.random() * 5) || 1).padStart(2, "0")}.png`,
    title: 'Ticket 4',
    description: 'This is ticket 4',
    status: 'open',
    type: 'technical',
    priority: 'low',
    createdAt: Date.now() - 800000,
    updatedAt: Date.now() - 400000,
  },
  {
    id: 5,
    assignee: 'Javiera Paredes',
    avatar: `/avatars/${String(Math.floor(Math.random() * 5) || 1).padStart(2, "0")}.png`,
    title: 'Ticket 5',
    description: 'This is ticket 5',
    status: 'closed',
    type: 'support',
    priority: 'medium',
    createdAt: Date.now() - 9000000,
    updatedAt: Date.now() - 3000000,
  },
  {
    id: 6,
    assignee: 'Felipe Ossandon',
    avatar: `/avatars/${String(Math.floor(Math.random() * 5) || 1).padStart(2, "0")}.png`,
    title: 'Ticket 6',
    description: 'This is ticket 6',
    status: 'in-progress',
    type: 'general',
    priority: 'high',
    createdAt: Date.now() - 7000000,
    updatedAt: Date.now() - 2000000,
  },
  {
    id: 7,
    assignee: 'Patricio Vilches',
    avatar: `/avatars/${String(Math.floor(Math.random() * 5) || 1).padStart(2, "0")}.png`,
    title: 'Ticket 7',
    description: 'This is ticket 7',
    status: 'done',
    type: 'sales',
    priority: 'low',
    createdAt: Date.now() - 6000000,
    updatedAt: Date.now() - 1000000,
  }
] as const;

export const INITIAL_USERS = INITIAL_STATE.map((ticket) => ({
  name: ticket.assignee,
  avatar: ticket.avatar
}))
  .reduce((acc, user) => {
    if (!acc.find((u) => u.name === user.name)) {
      acc.push(user)
    }
    return acc
  }, [] as { name: string, avatar: string }[])

export const tableHeaders: { key: keyof Ticket; label: string }[] = [
  { key: "assignee", label: "User" },
  { key: "title", label: "Ticket" },
  { key: "status", label: "Status" },
  { key: "priority", label: "Priority" },
  { key: "createdAt", label: "Created" },
  { key: "updatedAt", label: "Last Updated" },
] as const;
