import { gql } from "@apollo/client";
import User from "./User";
import styles from "../../styles/User.module.css";
import UsergqlCard from "../Components/Usercard/usergqlCard";

export async function getServerSideProps(){
    const { data } = await User.query({
        query: gql`
        query{
            users{
                id
                name
                email
            }
        }
        `,
    });

    return{
        props:{
            users: data.users.slice(0,5),
        },
    };
    
}

export default function index({users}) {
  return (
    <div className={styles.container}>
        <div className={styles.userlist}>
            {
                users.map((use)=>(
                    <UsergqlCard key={use.id} use={use} />
                ))
            }
        </div>
    </div>
  )
}
