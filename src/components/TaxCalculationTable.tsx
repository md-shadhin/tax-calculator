import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableFooter } from '@mui/material';
import { styled } from '@mui/system';


const HeaderCell = styled(TableCell)({
    backgroundColor: '#0066cc',
    color: 'white',
    fontWeight: 'bold',
});

const CustomTableCell = styled(TableCell)({
    backgroundColor: '#0066cc',
    borderBottom: 'none',
    color: 'white',
    fontWeight: 'bold',
    // margin: 0,
    paddingTop: 5,
    paddingBottom: 5
});

interface TaxCalculationTableProps {
    taxable_income: number;
    total_rebate: number;
    gender: string;
    first_slab: number;
}

const TaxCalculationTable: React.FC<TaxCalculationTableProps> = ({ taxable_income, total_rebate, gender, first_slab }) => {

    let newAmount = 0;
    let tempRest = 0;
    let totalTax = 0;
    let taxOn1st = 0;
    let taxOn2nd = 0;
    let taxOn3rd = 0;
    let taxOn4th = 0;
    let taxOn5th = 0;
    let taxOnRest = 0;


    return (
        <Paper style={{ padding: '16px', }}>
            <Typography variant="h6" align="center" gutterBottom>Tax Calculation for {gender}</Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <HeaderCell>Slab</HeaderCell>
                            <HeaderCell align="right">Tax</HeaderCell>
                            <HeaderCell align="right">Rest</HeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow key='1st'>
                            <TableCell>First {first_slab.toLocaleString()} (0%)</TableCell>
                            <TableCell align="right">{taxOn1st = 0}</TableCell>
                            <TableCell align="right">{first_slab > taxable_income ? newAmount = 0 : newAmount = (taxable_income - first_slab)}</TableCell>
                        </TableRow>

                        <TableRow key='2nd'>
                            <TableCell>Next 100,000 (5%)</TableCell>
                            <TableCell align="right">{(taxOn2nd = Math.round(newAmount > 100000 ? 100000 * 0.05 : newAmount * 0.05)).toLocaleString()}</TableCell>
                            <TableCell align="right">{(newAmount = Math.max(0, (newAmount - 100000))).toLocaleString()}</TableCell>
                        </TableRow>

                        <TableRow key='3rd'>
                            <TableCell>Next 400,000 (10%)</TableCell>
                            <TableCell align="right">{(taxOn3rd = Math.round(newAmount > 400000 ? 400000 * 0.1 : newAmount * 0.1)).toLocaleString()}</TableCell>
                            <TableCell align="right">{(newAmount = Math.max(0, (newAmount - 400000))).toLocaleString()}</TableCell>
                        </TableRow>

                        <TableRow key='4th'>
                            <TableCell>Next 500,000 (15%)</TableCell>
                            <TableCell align="right">{(taxOn4th = Math.round(newAmount > 500000 ? 500000 * 0.15 : newAmount * 0.15)).toLocaleString()}</TableCell>
                            <TableCell align="right">{(newAmount = Math.max(0, (newAmount - 500000))).toLocaleString()}</TableCell>
                        </TableRow>

                        <TableRow key='5th'>
                            <TableCell>Next 500,000 (20%)</TableCell>
                            <TableCell align="right">{(taxOn5th = Math.round(newAmount > 500000 ? 500000 * 0.2 : newAmount * 0.2)).toLocaleString()}</TableCell>
                            <TableCell align="right">{(newAmount = Math.max(0, (newAmount - 500000))).toLocaleString()}</TableCell>
                        </TableRow>

                        <TableRow key='rest'>
                            <TableCell>Rest {(tempRest = Math.max((taxable_income - (1500000 + first_slab)), 0)).toLocaleString()} (25%)</TableCell>
                            <TableCell align="right">{(taxOnRest = Math.round(newAmount > tempRest ? tempRest * 0.25 : newAmount * 0.25)).toLocaleString()}</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>

                    </TableBody>

                    <TableFooter>
                        <TableRow key='total_tax'>
                            <CustomTableCell>Total Tax</CustomTableCell>
                            <CustomTableCell align="right"></CustomTableCell>
                            <CustomTableCell align="right">{(totalTax = taxOn1st + taxOn2nd + taxOn3rd + taxOn4th + taxOn5th + taxOnRest).toLocaleString()}</CustomTableCell>
                        </TableRow>

                        <TableRow key='total_rebate'>
                            <CustomTableCell>Total Rebate</CustomTableCell>
                            <CustomTableCell align="right"></CustomTableCell>
                            <CustomTableCell align="right">{total_rebate.toLocaleString()}</CustomTableCell>
                        </TableRow>

                        <TableRow key='net_tax'>
                            <CustomTableCell>Net Tax</CustomTableCell>
                            <CustomTableCell align="right"></CustomTableCell>
                            <CustomTableCell align="right">{(totalTax - total_rebate).toLocaleString()}</CustomTableCell>
                        </TableRow>

                    </TableFooter>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default TaxCalculationTable;
