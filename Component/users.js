import { useQuery,gql } from "@apollo/client";

const QUERY = gql`
    query users{
        users{
            id
            name
            phone
            email
        }
    }
  
`

export default function users() {
    const {data, loading, error} = useQuery(QUERY);
    if(loading){
        return <h2>loading...</h2>
    }
    if(error){
        console.error(error);
        return null;
    }

    const users = data.users.slice(0,10);

  return (
    <div className="">
        {users.map((user)=>(
            <div key={user.id} className="">
                <h3>{user.name}</h3>
                <p>{user.email} - {user.phone}</p>
            </div>
        ))
        }

    </div>
  )
}
