import { Coffee } from 'lucide-react'
import { Outlet } from 'react-router-dom'
export const AuthLayout = () => {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <Coffee className="h-5 w-5" />
          <span className="font-medium">managesh</span>
        </div>
        <footer className="text-sm">
          &copy; managesh - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
