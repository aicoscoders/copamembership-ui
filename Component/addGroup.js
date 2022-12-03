import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { QUERY } from "./Groups";

//define mutation
const ADD_GROUP = gql`
mutation createGroup($name: String!,$description: String!){
    createGroup(name: $name, description: $description){
        groupe{
        id
        name
        description
    }
    }
    
}
`


export default function addGroup() {

    const [group, setGroup] = useState({
        name: "",
        description: "",
      });

    let input;
    const [createGroup, {data, loading, error}] = useMutation(ADD_GROUP, {
        refetchQueries: [
            QUERY
        ]
    });

    

    if(loading) return 'submittng....';
    if(error) `submition error ${error.message}`;

    const handleChange = (e) => {
        setGroup({
            ...group,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(group);
        createGroup({
            variables:{
                name:group.name,
                description:group.description
            }
            
        })
    }


  return (
    <div>
        <form
        onSubmit={handleSubmit} className="flex-auto"
        >
            <input name="name" className="" onChange={handleChange}/> <br/>
            <input name="description" onChange={handleChange}/> <br/>
            <button type="submit">ADD GROUP</button>
        </form>
    </div>
  )
}
