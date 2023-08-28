import type { FC, ReactNode } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from '@/router'
import './App.css'

type Props = {
  children?: ReactNode
}

const App: FC<Props> = () => {
  const routesElement = useRoutes(routes)
  return (
    <>
      {routesElement}
    </>
  )
}

export default App
