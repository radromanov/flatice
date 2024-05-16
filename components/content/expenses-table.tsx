import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/utils";

interface Props {
  expenses: {
    id: number;
    type: string;
    amount: string;
    createdAt: Date;
  }[];
}

const MOCK_DATA: {
  id: number;
  type: string;
  amount: string;
  createdAt: Date;
}[] = [
  { id: 1, amount: "25.75", createdAt: new Date(), type: "bill" },
  { id: 2, amount: "12.30", createdAt: new Date(), type: "spending" },
  { id: 3, amount: "230.30", createdAt: new Date(), type: "goal" },
  { id: 4, amount: "100", createdAt: new Date(), type: "emergency" },
];

const ExpensesTable = ({ expenses }: Props) => {
  const hasSpent = expenses.length > 0;
  const data = hasSpent ? expenses : MOCK_DATA;
  const caption = hasSpent
    ? "A list of your recent expenses."
    : "This is just a mock-up. The data above is not real.";

  return (
    <Table>
      <TableCaption>{caption}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead>Paid on</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((expense, i) => (
          <TableRow key={expense.id}>
            <TableCell>{i + 1}</TableCell>
            <TableCell>{formatDate(expense.createdAt)}</TableCell>
            <TableCell>{expense.type}</TableCell>
            <TableCell>{expense.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ExpensesTable;
