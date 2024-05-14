import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { api } from "../../../lib";
import TotalSpent from "../components/TotalSpent";

export const Route = createFileRoute("/expenses")({
  component: () => Expenses(),
});

async function getExpenses() {
  const res = await api.expenses.getAll("admin");
  return res;
}

function Expenses() {
  const { isPending, error, data } = useQuery({
    queryKey: ["get-all-expenses"],
    queryFn: getExpenses,
  });

  if (isPending) return "Loading...";
  if (error) return null;

  return (
    <div>
      <ul>
        {data?.length ? (
          data.map((expense) => (
            <li key={expense.id}>
              <span>{expense.type}</span>
              <span>{expense.amount}</span>
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
      <TotalSpent />
    </div>
  );
}