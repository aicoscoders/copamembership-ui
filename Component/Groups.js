import { useQuery, gql } from "@apollo/client";

const QUERY = gql`
query display{
    groups{
        id
        name
        description
    }
}
`

export default function Groups() {

    const {data, error, loading} = useQuery(QUERY);
    console.log(data);

    if(loading){
        return <h3>loading...</h3>
    }
    if(error){
        console.error(error);
        return null;
    }

    const groups = data.groups.slice(0,5);

  return (
    <div className="">
        {groups.map((group)=>(
            <div key={group.id}>
                <h3>{group.name}</h3>
                <p>{group.description}</p>
            </div>
        ))
        }
    </div>
  )
}
