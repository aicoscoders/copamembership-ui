import styles from "../../styles/User.module.css";
import Users from "../../Component/users";
import ClientOnly from "../../Component/clientOnly"
import React from 'react'

export default function ClientSide() {
  return (
    <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <ClientOnly>
          <Users />
        </ClientOnly>
      </main>
  )
}
