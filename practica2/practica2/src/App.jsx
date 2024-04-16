import Table from "./components/table/Table";

const netIncomes = [
  { brand: "McDonalds", income: 1291283 },
  { brand: "Burger King", income: 1927361 },
  { brand: "KFC", income: 1098463 },
];

const incomes = netIncomes.map((netIncome) => netIncome.income);
const average =
  incomes.reduce((acc, current) => acc + current, 0) / incomes.length;

function App() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <Table netIncomes={netIncomes} />
      </div>
      <p className="d-flex justify-content-center">
        Promedio de ingreso neto: {average}{" "}
      </p>
    </>
  );
}

export default App;
