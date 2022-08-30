import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { useTable, useSortBy } from 'react-table'
import React from 'react'

function DataTable() {
  const data = React.useMemo(
    () => [
      {
        fromUnit: 'inches',
        toUnit: 'millimetres (mm)',
        hora: '08:00',
        factor: 25.4
      },
      {
        fromUnit: 'feet',
        toUnit: 'centimetres (cm)',
        hora: '08:00',
        factor: 30.48
      },
      {
        fromUnit: 'yards',
        toUnit: 'metres (m)',
        hora: '08:00',
        factor: 0.91444
      }
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'NOME',
        accessor: 'fromUnit'
      },
      {
        Header: 'CPF',
        accessor: 'toUnit'
      },
      {
        Header: 'DATA',
        accessor: 'factor',
        isNumeric: true
      },
      {
        Header: 'HORA',
        accessor: 'hora',
        isNumeric: true
      }
    ],
    []
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy)

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup, index) => (
          <Tr key={index} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, index) => (
              <Th
                key={index}
                {...column.getHeaderProps(column.getSortByToggleProps())}
                isNumeric={column.isNumeric}
              >
                {column.render('Header')}
                <chakra.span pl="4">
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <TriangleDownIcon aria-label="sorted descending" />
                    ) : (
                      <TriangleUpIcon aria-label="sorted ascending" />
                    )
                  ) : null}
                </chakra.span>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row)
          return (
            <Tr key={index} {...row.getRowProps()}>
              {row.cells.map((cell, index) => (
                <Td
                  key={index}
                  {...cell.getCellProps()}
                  isNumeric={cell.column.isNumeric}
                >
                  {cell.render('Cell')}
                </Td>
              ))}
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}

export default DataTable
