import { useEffect, useState } from "react";
import { ExpenseSelectSchema } from "../../lib/types";
import { api } from "../../lib/api";

function App() {
  const ownerId = "admin";
  const [expenses, setExpenses] = useState<ExpenseSelectSchema>([]);

  useEffect(() => {
    async function fetchExpenses() {
      const data = await api.expenses.getAll(ownerId);
      setExpenses(data);
    }

    fetchExpenses();
  }, []);

  return (
    <>
      <header>
        <nav className="flex font-medium h-10 items-center justify-between border-b border-b-white/30">
          <div>
            <span>Logo</span>
          </div>

          <div className="flex gap-2">
            <span>Home</span>
            <span>Expenses</span>
          </div>
        </nav>
      </header>
      <main>
        <ul>
          {expenses?.map(
            (expense: { id: string; amount: number; type: string }) => (
              <li key={expense.id} className="flex gap-2">
                <span>{expense.type}</span>
                <span>{expense.amount}</span>
              </li>
            )
          )}
        </ul>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
