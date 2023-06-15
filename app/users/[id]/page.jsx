
async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

async function UsersPage({ params }) {
  const user = await getUser(params.id);

  if (!user) {
    // Manejar el caso en el que no se encuentre el usuario
    return <div>Usuario no encontrado</div>;
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-6 offset md-3">
        <div className="card text-center">
          <div className="card-header">
            <img src={user.avatar} alt={user.firt_name} style={{borderRadius: '5px'}} />
          </div>
          <div className="card-body">
            <h5>Id: {user.id}</h5>
            <h3>{user.first_name} {user.last_name}</h3>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersPage;
