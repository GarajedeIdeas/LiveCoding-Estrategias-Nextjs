// interface User {
//   id: number
//   name: string
//   email: string
//   username: string
//   phone: string
//   website: string
//   company: {
//     name: string
//     catchPhrase: string
//     bs: string
//   }
//   address: {
//     street: string
//     suite: string
//     city: string
//     zipcode: string
//     geo: {
//       lat: string
//       lng: string
//     }
//   }
// }

// async function getUsers(): Promise<User[]> {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   if (!res.ok) {
//     throw new Error('Failed to fetch users')
//   }
//   return res.json()
// }

export const ServerUserList = async () => {
  return (
    <div className='p-4 bg-gray-100 shadow rounded-lg'>
      <h2 className='text-2xl font-bold mb-4'>Servidor: Lista de Usuarios</h2>
      <ul className='space-y-2'></ul>
    </div>
  )
}
