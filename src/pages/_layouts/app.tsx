import { Outlet } from 'react-router-dom'

import { Header } from '@/components/ui/header'

export const AppLayout = () => {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />
      <div className="p8 ml-5 mr-5 flex flex-1 flex-col gap-4 pt-6">
        <Outlet />
      </div>
    </div>
  )
}
