import ClientTextContent from '@/components/examples/client/ClientTextContent/ClientTextContent'
import { Counter } from '@/components/examples/client/Counter/Counter'

export default function Page() {
  return (
    <div className='p-8 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>
        Demostración de Componentes en Next.js
      </h1>
      <div className='bg-blue-50 p-6 rounded-lg border-2 border-blue-500 shadow-lg mb-8'>
        <p className='font-semibold text-lg mb-2'>
          Este es un Componente de Servidor (Raíz)
        </p>
        <p className='mb-4'>
          Los componentes de servidor se renderizan en el servidor y pueden
          realizar operaciones del lado del servidor.
        </p>
        <div className='space-y-6'>
          <Counter />
          <ClientTextContent />
        </div>
      </div>
    </div>
  )
}
