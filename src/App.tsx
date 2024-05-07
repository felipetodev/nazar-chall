import { HandshakeIcon } from "lucide-react";
import { FormTable } from "./components/form-table";

export default function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <header className="h-[80px] flex items-center border-b mb-4">
        <HandshakeIcon className="w-8 h-8 text-primary mr-4" />
        <h1 className="text-2xl font-semibold text-primary">Nazar Management Tool</h1>
      </header>
      <FormTable />
    </main>
  )
}
