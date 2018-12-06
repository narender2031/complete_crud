import React from "react";

const TableBody = ({ charctersData, removeCharcter }) => {
  const rows = charctersData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.email}</td>
        <td>{row.phone}</td>
        <td>
          <button
            className="btn btn-primery"
            onClick={() => removeCharcter(index)}
            data={index}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

export default TableBody;
