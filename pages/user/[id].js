import { gql } from "@apollo/client";
import { API_URL_GQL } from "../constants/constant";
import User from "./User";


export async function getServerSideProps(context){
    const id= context.params.id;
    const {data} = await User.query({
        query: gql`
        query(
            $id: ID
        ){
            user(id:$id){
                name
                phone
                email
            }
        }
        `,variables:{id:id}
    });
    return{
        props:{
            user: data.user,
        },
    };
}

export default function name({user}) {
  return (
    <div className="max-w-sm rounded shadow-lg content-center justify-center">
        <div>{user.name}</div>
        <di>{user.email}</di>
        <div>{user.phone}</div>
    </div>
  )
}
