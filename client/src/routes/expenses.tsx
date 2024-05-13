import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { api } from "../../../lib";

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

  console.log(data);

  if (isPending) return "Loading...";
  if (error) return null;

  return (
    <div>
      <ul>
        {data.map((expense) => (
          <li key={expense.id}>
            <span>{expense.type}</span>
            <span>{expense.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
