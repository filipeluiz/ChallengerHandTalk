import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { useStyles, StyledTableCell, StyledTableRow } from './styles'

interface ITableProps {
  className: string,
  data: {id: string, sendData: string, quanty: number}[]
}

const Tables: React.FC<ITableProps> = ({className, data}) => {
  const classes = useStyles()

  return (
    <TableContainer component={Paper} className={className}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id do Video</StyledTableCell>
            <StyledTableCell align="right">Data de Envio</StyledTableCell>
            <StyledTableCell align="right">Quantidade de Cortes</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.sendData}</StyledTableCell>
              <StyledTableCell align="right">{row.quanty}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Tables
