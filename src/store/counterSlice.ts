import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface CounterSlice {
  count: number
  increase: () => void
}

export const useCounterSlice = create<CounterSlice>()(immer((set) => {
  return {
    count: 0,
    increase: () => {
      set((slice) => {
        slice.count += 1
      })
    }
  }
}))

