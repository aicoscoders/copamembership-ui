import ClientOnly from "../../Component/clientOnly";
import Group  from "../../Component/Groups";
import AddGroup  from "../../Component/addGroup";


export default function Groups() {
  return (
    <div className="">
      <ClientOnly>
        <AddGroup />
        <Group />
      </ClientOnly>
    </div>
  )
}
