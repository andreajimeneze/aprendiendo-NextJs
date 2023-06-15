
"use client";
import { useRouter } from "next/navigation";


function UsersList({ users }) {
    const router = useRouter();
    return (
        <ul className="list-group">
            {users.map((user) => {
                return (
                    <li key={user.id}
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    style={{cursor: 'pointer'}}
                        onClick={() => {
                            router.push(`/users/${user.id}`)
                        }}>
                        <div>
                            <h6>Id: {user.id}</h6>
                            <h4>{user.first_name}{user.last_name}</h4>
                            <p>{user.email}</p>
                        </div>
                        <img src={user.avatar} alt={user.email} style={{borderRadius: '50%'}} />
                    </li>
                )
            })
            }
        </ul>
    )
}

export default UsersList;