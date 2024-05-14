import { useQuery } from "@tanstack/react-query";
import { api } from "../../../lib";

async function getTotalSpent() {
  const res = await api.expenses.getTotalSpent("admin");
  return res;
}

const TotalSpent = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["get-total"],
    queryFn: getTotalSpent,
  });

  if (isPending) return "Loading...";
  if (error) return null;

  return (
    <div>
      <span>Total spent: {data}</span>
    </div>
  );
};

export default TotalSpent;
