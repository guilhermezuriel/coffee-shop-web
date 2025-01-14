import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Whoops, something happened...</h1>
      <p className="text-accent-foreground">
        Back to{' '}
        <Link to="/" className="text-sky-600 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  )
}