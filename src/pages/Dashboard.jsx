import CategoryChart from "../components/dashboard/CategoryChart"
import SummaryCard from "../components/dashboard/SummaryCard"
import TimeBasedChart from "../components/dashboard/TimeBasedChart"

const Dashboard = () => {
  return (
    <div>
      <div className="text-center space-y-10">

        <div>
          <p className="text-lg font-bold">Summary Card</p>
          <SummaryCard />
        </div>

        <div>
          <p className="text-lg font-bold">Time Based Chart</p>
          <TimeBasedChart />
        </div>

        <div>
          <p className="text-lg font-bold">Categorical</p>
          <CategoryChart />
        </div>

      </div>
    </div>
  )
}

export default Dashboard
