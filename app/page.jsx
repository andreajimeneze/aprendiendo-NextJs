
import UsersList from '../app/components/UsersList'

async function fetchUsers() {
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json()
  return data.data
}

async function IndexPage() {

  const users = await fetchUsers();

  return (
    <div className='container p-4'>
      <UsersList users={users} />
    </div>
  )
}

export default IndexPage;