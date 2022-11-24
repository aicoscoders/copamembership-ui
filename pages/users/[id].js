import { API_URL , API_URL_} from "../constants/constant"

export async function getStaticPaths(){
    const res = await fetch(API_URL);
    const data = await res.json();

    const paths= data.map(user=>{
        return {
            params: { id: user.id.toString() }
        }
})
    return{
        paths,
        fallback: false
    }
}
export async function getStaticProps(context){
    const id = context.params.id;
    const res = await fetch(API_URL_ + id);
    const data = await res.json();

    return{
        props:{user: data}
    }
}

export default function Details({user}) {
  return (
    <div className="max-w-sm rounded shadow-lg content-center justify-center">
        <h1>Details</h1>
        <h3 className="font-bold text-xl mb-2">Name: {user.name}</h3>
        <h3 className="text-gray-700 text-base">Email: {user.email}</h3>
        <h3 className="text-gray-700 text-base">Phone Number: {user.phone}</h3>
    </div>
  )
}
