'use client'

import { Button } from '@/components/ui/button'

export const ClientCounter = () => {
  return (
    <div className='p-4 bg-white shadow rounded-lg'>
      <h2 className='text-2xl font-bold mb-4'>Cliente: Contador Interactivo</h2>
      <p className='text-lg mb-4'>Conteo actual: </p>
      <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Incrementar
      </Button>
    </div>
  )
}
