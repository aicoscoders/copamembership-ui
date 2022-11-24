import { API_URL } from "../constants/constant";
import UserCard from "../Components/Usercard/UserCard";
import styles from "../../styles/User.module.css";


export async function getStaticProps(){
    const res = await fetch(API_URL);
    const data = await res.json();
    return{
        props: {
            users: data
        }
    }
}

function Users({users}) {
    return(
        <div className={styles.container}>
            <div className={styles.userlist}>
            {
                users.map(user=>(
                    <UserCard key={user.id} user={user} />
                ))
            }
        </div>
        </div>        
    );
}
export default Users