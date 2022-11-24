import Link from 'next/link';
import styles from '../../../styles/Card.module.css';
import Users from '../../users';

export default function UserCard({user}) {
  return (
    <div className="flex flex-wrap -mb-4 max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-10 py-6">
          <h4 className="font-bold text-xl mb-2"><b>Name: {user.name}</b></h4> 
          <p className="text-gray-700 text-base">Email: { user.email}</p> 
          <Link href={`users/${user.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Details </Link>
        </div>
    </div>
  )
}
