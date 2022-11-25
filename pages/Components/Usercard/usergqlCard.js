import Link from "next/link";

export default function usergqlCard({use}) {
  return (
    <div className="flex flex-wrap -mb-4 max-w-sm rounded overflow-hidden shadow-lg">
        <Link href={`/user/${use.id}`} className="px-8 py-6">
            <h4 className="font-bold text-xl mb-2">{use.name}</h4>
            <p className="text-gray-700 text-base">{use.email}</p>
        </Link>
    </div>
  )
}
