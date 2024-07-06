import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/system';

const HeaderCell = styled(TableCell)({
    backgroundColor: '#0066cc',
    color: 'white',
    fontWeight: 'bold',
    borderBottom: 'none',
    textAlign: 'center'
});


interface RebateTableProps {
    three_percent: number;
    fifeteen_percent: number;
    mill: number;
}


const RebateTable: React.FC<RebateTableProps> = ({ three_percent, fifeteen_percent, mill }) => {


    return (
        <Paper style={{ padding: '16px' }}>
            {/* <Typography variant="h6" align="center" gutterBottom>Rebate</Typography> */}
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <HeaderCell colSpan={2}>4. Rebate</HeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow key='three_percent'>
                            <TableCell>a) 3% of Taxable Income</TableCell><TableCell style={{textAlign:'end'}}>{three_percent.toLocaleString()}</TableCell>
                        </TableRow>
                        <TableRow key='fifeteen_percent'>
                            <TableCell>b) Investments's 15%</TableCell><TableCell style={{textAlign:'end'}}>{fifeteen_percent.toLocaleString()}</TableCell>
                        </TableRow>
                        <TableRow key='mill'>
                            <TableCell>c) 10,00,000 BDT</TableCell><TableCell style={{textAlign:'end'}}>{mill.toLocaleString()}</TableCell>
                        </TableRow>
                        <TableRow key='lowest'>
                            <TableCell>d) Total Rebate [min(a,b,c)]</TableCell><TableCell style={{textAlign:'end'}}>{Math.min(three_percent, fifeteen_percent, mill).toLocaleString()}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default RebateTable;
