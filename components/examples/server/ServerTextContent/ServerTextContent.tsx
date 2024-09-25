export default function ServerTextContent() {
  return (
    <div className='bg-red-50 p-4 rounded-lg border-2 border-red-500 shadow-md mt-4'>
      <p className='font-semibold text-lg mb-2'>
        Este es un Componente de Servidor (Anidado)
      </p>
      <p>
        Este componente de servidor está anidado dentro de un componente de
        cliente.
      </p>
    </div>
  )
}
