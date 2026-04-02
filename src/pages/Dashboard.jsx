import CategoryChart from "../components/dashboard/CategoryChart"
import SummaryCard from "../components/dashboard/SummaryCard"
import TimeBasedChart from "../components/dashboard/TimeBasedChart"

const Dashboard = () => {
  return (
    <div>
      <div className="text-center">
        
        <p className="text-3xl font-bold">Summary Card</p> 
        <SummaryCard />
        
        <p className="text-3xl font-bold">Time Based Chart</p>
        <TimeBasedChart />

        <p className="text-3xl font-bold">Categorical</p>
        <CategoryChart />
        
      </div>
    </div>
  )
}

export default Dashboard
