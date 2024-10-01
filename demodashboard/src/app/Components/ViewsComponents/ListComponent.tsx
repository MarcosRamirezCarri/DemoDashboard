import { BarList } from "@/app/Components/Charts/ListChart"

const data = [
    { name: "/home", value: 843 },
    { name: "/imprint", value: 46 },
    { name: "/cancellation", value: 3 },
    { name: "/blocks", value: 108 },
    { name: "/documentation", value: 384 },
  ]

const ListComponent = () =>{
    return(
        <div className="flex flex-col col-span-1 bg-blue-50 items-center justify-center gap-4">
            <BarList data={data}/>

        </div>
    )
}

export default ListComponent;