import { useSelector } from "react-redux"
import { type RootState } from './app/store'

function App() {
  const tickets = useSelector((state: RootState) => state.tickets)
  return (
    <main>
      <pre>
        {JSON.stringify(tickets, null, 2)}
      </pre>
    </main>
  )
}

export default App
