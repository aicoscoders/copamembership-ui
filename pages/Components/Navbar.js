import styles from '../../styles/Navbar.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';


export default function Navbar() {
    const router = useRouter();
    console.log(router);
  return (
    <div className={styles.topnav}>
        <Link href='/' className={router.pathname=="/"?styles.active:''}>Home</Link>
        <Link href='/user' className={router.pathname=="/user"? styles.active:''}>User</Link>
        <Link href='/listinGgroup' className={router.pathname=="/listinGgroup"? styles.active:''}>User Group</Link>

    </div>
  )
}
