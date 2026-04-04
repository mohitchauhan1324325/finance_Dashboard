export const getTopCategory = (transactions) => {
  const map = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      map[t.category] = (map[t.category] || 0) + t.amount;
    }
  });

  let topCategory = "N/A";
  let max = 0;

  for (let key in map) {
    if (map[key] > max) {
      max = map[key];
      topCategory = key;
    }
  }

  return { topCategory, amount: max };
};

export const getMonthlyComparison = (transactions) => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const lastMonth = currentMonth - 1;

  let currentTotal = 0;
  let lastTotal = 0;

  transactions.forEach((t) => {
    if (t.type === "expense") {
      const month = new Date(t.date).getMonth();

      if (month === currentMonth) currentTotal += t.amount;
      if (month === lastMonth) lastTotal += t.amount;
    }
  });

  return { currentTotal, lastTotal };
};

export const getInsightMessage = (current, last) => {
  if (current > last) {
    return "📈 Expenses increased this month";
  } else if (current < last) {
    return "📉 Expenses decreased this month";
  } else {
    return "⚖️ Expenses remained the same";
  }
};