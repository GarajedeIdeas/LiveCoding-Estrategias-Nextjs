export const ServerTime = () => {
  const currentTime = new Date().toLocaleString()

  return (
    <div className='p-4 bg-gray-100 shadow rounded-lg'>
      <h2 className='text-2xl font-bold mb-4'>Servidor: Hora Actual</h2>
      <p className='text-lg'>La hora actual del servidor es: {currentTime}</p>
    </div>
  )
}
