'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='p-4 bg-white shadow rounded-lg'>
      <h2 className='text-2xl font-bold mb-4'>Cliente: Contador Interactivo</h2>
      <p className='text-lg mb-4'>Conteo actual: {count}</p>
      <Button
        onClick={() => setCount(count + 1)}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Incrementar
      </Button>
    </div>
  )
}
