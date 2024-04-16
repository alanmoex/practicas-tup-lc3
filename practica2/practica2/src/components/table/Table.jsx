import PropTypes from "prop-types";

const Table = ({ netIncomes }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Marca</td>
            <td>Ingreso Neto</td>
          </tr>
        </thead>
        <tbody>
          {netIncomes.map((netIncome, index) => (
            <tr key={index}>
              <td>{netIncome.brand}</td>
              <td>{netIncome.income}</td>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </>
  );
};

export default Table;

Table.propTypes = {
  netIncomes: PropTypes.array,
};
