import React, { Component } from "react";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
class Table extends Component {
  render() {
    const { charctersData, removeCharcter } = this.props;
    return (
      <tbale>
        <TableHeader />
        <TableBody
          charctersData={charctersData}
          removeCharcter={removeCharcter}
        />
      </tbale>
    );
  }
}

export default Table;
