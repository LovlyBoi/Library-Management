import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { useCounterSlice } from '@/store'

type Props = {
  children?: ReactNode
}

const Home: FC<Props> = () => {
  const count = useCounterSlice((slice) => slice.count)
  const increase = useCounterSlice((slice) => slice.increase)

  return (
    <>
      <div className='text-center'>Home Page</div>
      <nav className='flex justify-center my-2 gap-1'>
        <NavLink to="/home" className="text-purple-300 hover:text-purple-400">home</NavLink>
        |
        <NavLink to="/about" className="text-purple-300 hover:text-purple-400">about</NavLink>
      </nav>
      <div className='flex justify-center'>
        <button className='border rounded-md px-2' onClick={() => increase()}>count is {count}</button>
      </div>
    </>
  )
}

export default Home
