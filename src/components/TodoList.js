import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import { FILTER } from "../constant";
import { Table } from "reactstrap";
import { Pagination } from "react-bootstrap";
import EditProduct from "./EditProduct"


function TodoList() {
  const productData = useSelector((state) => {
    switch (state.filter) {
      case FILTER.COMPLETED:
        return state.todos.filter((todo) => todo.completed);

      case FILTER.ACTIVE:
        return state.todos.filter((todo) => !todo.completed);

      default:
        return state.todos;
    }
  });

  useEffect(() => {
    setFilteredRecords(productData);
  }, [productData]);
  const [pageNumber, setPageNumber] = useState(1);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [sortModelAcs, setSortModelAcs] = useState(true);
  const [sortDescriptionAcs, setSortDescriptionAcs] = useState(true);
  const [sortPriceAcs, setSortPriceAcs] = useState(true);
  const [sortNoAcs, setSortNoAcs] = useState(true);
  const [showEditProduct, setShowEditProduct] = useState(false);


  const onChangeFilter = (text) => {
    const filterTextInput = text.target.value;
    setFilteredRecords(
      productData.filter(
        (rec) =>
          rec.model.indexOf(filterTextInput) >= 0 ||
          rec.content.indexOf(filterTextInput) >= 0 ||
          rec.price.indexOf(filterTextInput) >= 0
      )
    );
  };

  console.log("filteredRecords", filteredRecords);

  let startItem = 5 * (pageNumber - 1);
  let endItem = 5 * pageNumber;

  let temp = filteredRecords.slice(startItem, endItem);
  let totalPages = Math.ceil(filteredRecords.length / 5);

  let active = pageNumber;
  let items = [];
  if (totalPages >= 1) {
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === active}
          onClick={() => setPageNumber(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
  }

  return (
    <>
      <h1>Search by Model or Description or Price</h1>
      <input onChange={(text) => onChangeFilter(text)} />
      <Pagination>{items}</Pagination>
      <Table bordered>
        <thead>
          <tr>
            <th
              onClick={() => {
                if (sortNoAcs)
                  setFilteredRecords(
                    filteredRecords.sort((a, b) => a.id - b.id)
                  );
                else
                  setFilteredRecords(
                    filteredRecords.sort((a, b) => b.id - a.id)
                  );
                setSortNoAcs(!sortNoAcs);
              }}
              width={45}
            >
              #
            </th>
            <th width={300}>Image</th>
            <th
              onClick={() => {
                if (sortModelAcs)
                  setFilteredRecords(
                    filteredRecords.sort((a, b) =>
                      a.model.localeCompare(b.model)
                    )
                  );
                else
                  setFilteredRecords(
                    filteredRecords.sort((a, b) =>
                      b.model.localeCompare(a.model)
                    )
                  );
                setSortModelAcs(!sortModelAcs);
              }}
              width={350}
            >
              Model
            </th>
            <th
              onClick={() => {
                if (sortDescriptionAcs)
                  setFilteredRecords(
                    filteredRecords.sort((a, b) =>
                      a.content.localeCompare(b.content)
                    )
                  );
                else
                  setFilteredRecords(
                    filteredRecords.sort((a, b) =>
                      b.content.localeCompare(a.content)
                    )
                  );
                setSortDescriptionAcs(!sortDescriptionAcs);
              }}
              width={500}
            >
              Description
            </th>
            <th
              onClick={() => {
                if (sortPriceAcs)
                  setFilteredRecords(
                    filteredRecords.sort(
                      (a, b) =>
                        parseInt(a.price.replace(",", "")) -
                        parseInt(b.price.replace(",", ""))
                    )
                  );
                else
                  setFilteredRecords(
                    filteredRecords.sort(
                      (a, b) =>
                        parseInt(b.price.replace(",", "")) -
                        parseInt(a.price.replace(",", ""))
                    )
                  );
                setSortPriceAcs(!sortPriceAcs);
              }}
              width={100}
            >
              Price
            </th>

            <th width={100}>Price</th>
          </tr>
        </thead>
        <tbody>
          {temp.map((todo, index) => (
            <Todo key={todo.id} todo={todo} index={index} />
          ))}
        </tbody>
      </Table>
      {/* {showEditProduct ? <div></div> : <EditProduct/>} */}
    </>
  );
}

export default TodoList;
