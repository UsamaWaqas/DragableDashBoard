import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Pagination,
  Stack,
  Radio,
} from "@mui/material";

const Tables = ({ data = [], columns = [], enableSelection = false, renderCell, onSelectionChange }) => {
  const [page, setPage] = useState(1);
  const [selectedValue, setSelectedValue] = useState(null);
  const [hoveredRow, setHoveredRow] = useState(null);
  const itemsPerPage = 5;

  // if (!Array.isArray(data)) {
  //   console.error("Tables component error: `data` must be an array. Received:", data);
  //   return null;
  // }

  const totalPages = Math.ceil(data.length / itemsPerPage) || 1;
  const currentItems = data.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handlePageChange = (event, value) => setPage(value);

  const handleRowClick = (id) => {
    if (!enableSelection) return;
    

    setSelectedValue(id);
    if (onSelectionChange) {
      onSelectionChange([id]); // Parent component ko notify karega
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <TableContainer component="div" className="p-0">
        <Table>
          <TableBody>
            {currentItems.length > 0 ? (
              currentItems.map((row, index) => (
                <TableRow
                  key={index}
                  onClick={() => handleRowClick(row.id)}
                  onMouseEnter={() => setHoveredRow(index)}
                  onMouseLeave={() => setHoveredRow(null)}
                  style={{
                    backgroundColor: selectedValue === row.id ? "#f3f4f6" : hoveredRow === index ? "#f9fafb" : "white",
                    cursor: enableSelection ? "pointer" : "default",
                    transition: "background-color 0.2s ease-in-out",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  {enableSelection && (
                    <TableCell className="p-2">
                      <Radio
                        checked={selectedValue === row.id}
                        onChange={() => handleRowClick(row.id)}
                      />
                    </TableCell>
                  )}
                  {columns.map((column, colIndex) => (
                    <TableCell key={colIndex} className="p-2">
                      {renderCell ? renderCell(row[column.field], column, row) : row[column.field]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length + (enableSelection ? 1 : 0)} className="text-center p-4">
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {data.length > itemsPerPage && (
        <Stack spacing={2} alignItems="center" className="mt-4">
          <Pagination count={totalPages} page={page} onChange={handlePageChange} size="large" />
        </Stack>
      )}
    </div>
  );
};

export default Tables;
