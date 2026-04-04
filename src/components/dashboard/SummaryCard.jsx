import { useState } from 'react'

const SummaryCard = () => {

    const [balance, setBalance] = useState(2000);
    const [income, setIncome] = useState(3000);
    const [expenses, setExpenses] = useState(5000);

  return (
    <div className='flex md: justify-between'>
      
      <div>
        Total Balance : {balance}
      </div>
      <div>
        Total Income : {income}
      </div>
      <div>
        Total Expenses : {expenses} 
      </div>
    </div>
  )
}

export default SummaryCard;
