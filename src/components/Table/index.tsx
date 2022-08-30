import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { useTable, useSortBy } from 'react-table'
import React from 'react'
import Modal from 'components/Modal'

function DataTable() {
  const data = React.useMemo(
    () => [
      {
        createdAt: '2022-08-30T10:53:31.752Z',
        name: 'Joe',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/324.jpg',
        datein: '2022-08-29T22:25:59.263Z',
        dateout: '2022-08-29T21:10:28.947Z',
        sobrenome: 'Weimann',
        cpf: '925.030.180-41',
        id: '1'
      },
      {
        createdAt: '2022-08-30T16:11:45.823Z',
        name: 'Moises',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/108.jpg',
        datein: '2022-08-30T17:02:08.313Z',
        dateout: '2022-08-29T20:24:46.212Z',
        sobrenome: 'Stoltenberg',
        cpf: '925.030.180-41',
        id: '2'
      },
      {
        createdAt: '2022-08-30T05:06:19.906Z',
        name: 'Nicole',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/519.jpg',
        datein: '2022-08-29T19:18:35.730Z',
        dateout: '2022-08-29T20:42:35.463Z',
        sobrenome: 'Wiegand',
        cpf: '925.030.180-41',
        id: '3'
      },
      {
        createdAt: '2022-08-30T08:40:00.724Z',
        name: 'Hal',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/642.jpg',
        datein: '2022-08-29T23:52:12.587Z',
        dateout: '2022-08-29T18:40:34.037Z',
        sobrenome: 'Bednar',
        cpf: '925.030.180-41',
        id: '4'
      }
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'NOME',
        accessor: 'name'
      },
      {
        Header: 'CPF',
        accessor: 'cpf'
      },
      {
        Header: 'DATA-Entrada',
        accessor: 'datein',
        Cell: (row) => {
          const d = new Date(row.row.original.datein)
          return <p>{d.toLocaleString()}</p>
        }

        // <Button onClick={(e) => console.log(row.row.original)}>Edit</Button>
      },
      {
        Header: 'DATA-SAIDA',
        accessor: 'dateout',
        Cell: (row) => {
          const d = new Date(row.row.original.dateout)
          return <p>{d.toLocaleString()}</p>
        }
      },
      {
        Header: 'Action',
        accessor: 'action',
        Cell: (row) => (
          <Modal data={row.row.original} />

          // <Button onClick={(e) => console.log(row.row.original)}>Edit</Button>
        )
      }
    ],
    []
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy)

  return (
    <>
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
    </>
  )
}

export default DataTable
