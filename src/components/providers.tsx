import { Provider as ReduxProvider } from 'react-redux'
import { store } from '@/app/store'
import { Toaster } from '@/components/ui/sonner'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      {children}
      <Toaster richColors position='top-center' className='bg-white' />
    </ReduxProvider>
  )
}
