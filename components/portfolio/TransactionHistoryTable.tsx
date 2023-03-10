import { useTransactionHistory } from "lib/hooks/queries/useTransactionHistory";
import Table, { TableColumn, TableData } from "components/ui/Table";

const columns: TableColumn[] = [
  {
    header: "Market",
    accessor: "question",
    type: "paragraph",
  },
  {
    header: "Action",
    accessor: "action",
    type: "text",
  },
  {
    header: "Price(ZUL)",
    accessor: "price",
    type: "currency",
  },
  {
    header: "Cost(ZUL)",
    accessor: "value",
    type: "currency",
  },
  {
    header: "Time",
    accessor: "time",
    type: "text",
  },
];

const TransactionHistoryTable = ({ address }: { address: string }) => {
  const { data: transactionHistory } = useTransactionHistory(address);

  const tableData: TableData[] = transactionHistory?.map((transaction) => {
    return {
      question: transaction.question,
      action: transaction.action,
      price: {
        value: transaction.price,
        usdValue: 0,
      },
      value: {
        value: transaction.value,
        usdValue: 0,
      },
      time: new Intl.DateTimeFormat("default", {
        dateStyle: "medium",
        timeStyle: "medium",
      }).format(new Date(transaction.time)),
    };
  });

  return <Table columns={columns} data={tableData} />;
};

export default TransactionHistoryTable;
