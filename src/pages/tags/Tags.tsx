import React from "react";
import { useTable } from "react-table";
import fakeData from "./data.json";
import SearchNav from "../../components/searchNav/SearchNav";
import im from "../../assets/import.svg";
import "./tags.scss";
const Tags: React.FC = () => {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Instance Count",
        accessor: "Instance Count",
      },
      {
        Header: "Tag Name",
        accessor: "Tag Name",
      },
      {
        Header: "Usage History",
        accessor: "Usage History",
      },
      {
        Header: "Meta Association",
        accessor: "Meta Association",
      },
      {
        Header: "Creator",
        accessor: "Creator",
      },
      {
        Header: "Status",
        accessor: "Status",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="tags_container">
      <SearchNav />
      <div className="list_btns_container">
        <div className="list_btns_container_f">
          <select name="" value="Category" id="">
            <option value="Category">Category</option>
          </select>
          <select name="" value="Category" id="">
            <option value="Category">Order</option>
          </select>
          <button>
            Show Results <span>10/40</span>
          </button>
          <div className="toggle_single_tags">
            <p>Hide Empty</p>
            <label className="switch">
              <input type="checkbox" checked />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="toggle_single_tags">
            <p>Hide blacklisted tags</p>
            <label className="switch">
              <input type="checkbox" checked />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <button className="tags_export_btn">
          <img src={im} alt="" /> <span>Export Table</span>
        </button>
      </div>
      <div className="table_container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup: any) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row: any) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell: any) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="table_mobile_container">
        <div className="table_mobile_cont">
          {data.map((item, index) => {
            return (
              <div className="table_mobile" key={index}>
                <p>
                  <span>Instance Count: </span>
                  {item["Instance Count"]}
                </p>

                <p>
                  <span>Meta Association:</span> {item["Meta Association"]}
                </p>
                <p>
                  <span>Creator:</span> {item.Creator}
                </p>
                <p>
                  <span>Status: </span>
                  {item.Status}
                </p>

                <p>
                  <span>Tag Name: </span>
                  {item["Tag Name"]}
                </p>

                <p>
                  <span>Usage History:</span> {item["Usage History"]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tags;
