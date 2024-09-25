'use client'

import { useState } from 'react'
import ServerTextContent from '../../server/ServerTextContent/ServerTextContent'

export default function ClientTextContent() {
  const [showServer, setShowServer] = useState(false)

  return (
    <div className='bg-yellow-50 p-4 rounded-lg border-2 border-yellow-500 shadow-md'>
      <p className='font-semibold text-lg mb-2'>
        Este es un Componente de Cliente (Anidado 2)
      </p>
      <p className='mb-4'>
        Este componente de cliente contiene un componente de servidor anidado.
      </p>
      <button
        className='bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors mb-4'
        onClick={() => setShowServer(!showServer)}
      >
        {showServer ? 'Ocultar' : 'Mostrar'} Componente de Servidor
      </button>
      {showServer && <ServerTextContent />}
    </div>
  )
}
