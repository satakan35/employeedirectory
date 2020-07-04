import React from "react";
import DataBody from "./DataBody";
import "../styles/DataTable.css";

function DataTable({ headings, users, handleSort }) {<div className="datatable mt-5">
<table
  id="table"
  className="table table-striped table-hover table-condensed"
>
  <thead>
    <tr>
      {context.developerState.headings.map(({ name, width }) => {
        return (
          <th
            className="col"
            key={name}
            style={{ width }}
            onClick={() => {
              // context.handleSort(name.toLowerCase());
              context.handleSort(name);
            }}
          >
            {name}
            <span className="pointer"></span>
          </th>
        );
      })}
    </tr>
  </thead>

  <DataBody />
</table>
</div>

};
    {/*up Here we will creat the header row for the table and using the values
      from headings.
    */}



  // Hint: headings.map
  export default DataTable;