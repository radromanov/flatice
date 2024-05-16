import Main from "@/components/content/main-content";
import { getMyExpenses } from "@/lib/server/queries";

const ExpensesPage = async () => {
  const expenses = await getMyExpenses();

  return (
    <div className="container flex flex-grow">
      <Main>
        {expenses.length ? "" : "You have no expenses. Congratulations!"}
      </Main>
    </div>
  );
};

export default ExpensesPage;
