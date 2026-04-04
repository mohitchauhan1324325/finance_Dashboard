import { useNavigate } from "react-router-dom"
import CategoryChart from "../components/dashboard/CategoryChart"
import SummaryCard from "../components/dashboard/SummaryCard"
import TimeBasedChart from "../components/dashboard/TimeBasedChart"

const Dashboard = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className="text-center space-y-10">

        <div>
          <button onClick={() => navigate("/transaction")}>Transaction Section</button>
          <button onClick={() => navigate("/insights")}>Insights Section</button>
        </div>

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
