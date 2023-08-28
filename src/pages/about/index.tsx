import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
  children?: ReactNode
}

const About: FC<Props> = () => {
  return (
    <>
      <div className='text-center'>About Page</div>
      <nav className='flex justify-center my-2 gap-1'>
        <NavLink to="/home" className="text-purple-300 hover:text-purple-400">home</NavLink>
        |
        <NavLink to="/about" className="text-purple-300 hover:text-purple-400">about</NavLink>
      </nav>
    </>
  )
}

export default About
