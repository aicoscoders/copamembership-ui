import { useQuery,gql } from "@apollo/client";
import User from "../user/User";
import styles from "../../styles/User.module.css";

export async function getServerSiteProps(){
  const { data } = await User.query({
    query: gql`
    query display{
      groupe{
        name
        description
      }
    }
    `,
  });
  return{
    props:{
      displaygroups: data.displaygroups.slice(0,5),
    },
  };
}

export default function listingGroup({displaygroups}) {

  console.log(displaygroups);
  return (
    <div className={styles.container}>
      <div className={styles.userlist}>
        {
          // displayusers && displayusers.map((displaygrp)=>(
          //   <div key={displaygrp.id}>
          //     {displaygrp.name}
          //   </div>
          // ))
        }
        Usergroup
      </div>
    </div>
  )
}
