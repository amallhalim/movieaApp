import React from "react";
import Pagination from "react-bootstrap/Pagination";
let active = 1;
let items = [1, 2, 3, 4];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}
export default function Paginationcompnant() {
  return (
    <div>
      <Pagination size="sm">{items}</Pagination>
    </div>
  );
}
