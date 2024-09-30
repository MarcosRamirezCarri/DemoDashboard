import { DonutChart } from "@/app/Components/Charts/DonutChart"

const data = [
    {
      name: "Coca-Cola",
      amount: 4890,
    },
    {
      name: "Fanta",
      amount: 2103,
    },
    {
      name: "Pepsi",
      amount: 2050,
    },
    {
      name: "Sprite",
      amount: 1300,
    },
    {
      name: "Monster",
      amount: 1100,
    },
    {
      name: "Speed",
      amount: 700,
    },
    {
      name: "Red Bull",
      amount: 200,
    },
  ]
  

const DonutComponent = () =>{
    return (
        <div className="flex flex-col col-span-1 bg-blue-50 items-center justify-center gap-4">
        <p className="text-gray-700 dark:text-gray-300">Ventas de Refrescos</p>
        <DonutChart
          data={data}
          category="name"
          value="amount"
          valueFormatter={(number: number) =>
            `$${Intl.NumberFormat("us").format(number).toString()}`
          }
        />
      </div>
  
    )
}

export default DonutComponent;