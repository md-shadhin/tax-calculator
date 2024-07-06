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


interface SummaryTableProps {
    total_earning: number;
    one_third_earning: number;
    max_tax_free_income: number;
    tax_free_income: number;
    taxable_income: number;
    total_investment: number;
}


const SummaryTable: React.FC<SummaryTableProps> = ({ total_earning, one_third_earning, max_tax_free_income,
    tax_free_income, taxable_income, total_investment
 }) => {


    return (
        <Paper style={{ padding: '16px' }}>
            {/* <Typography variant="h6" align="center" gutterBottom>Summary</Typography> */}
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <HeaderCell colSpan={2}>3. Summary</HeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
                        <TableRow key='total_earning'>
                            <TableCell>a) Total Earning</TableCell><TableCell style={{textAlign:'end'}}>{total_earning.toLocaleString()}</TableCell>
                        </TableRow>
                        <TableRow key='one_third_earning'>
                            <TableCell>b) 1/3 of Total Earning</TableCell><TableCell style={{textAlign:'end'}}>{one_third_earning.toLocaleString()}</TableCell>
                        </TableRow>
                        <TableRow key='max_tax_free_income'>
                            <TableCell>c) Max Tax Free Income</TableCell><TableCell style={{textAlign:'end'}}>{max_tax_free_income.toLocaleString()}</TableCell>
                        </TableRow>
                        <TableRow key='tax_free_income'>
                            <TableCell>d) Tax Free Income [min(b,c)]</TableCell><TableCell style={{textAlign:'end'}}>{tax_free_income.toLocaleString()}</TableCell>
                        </TableRow>
                        <TableRow key='taxable_income'>
                            <TableCell>e) Taxable Income [a-d]</TableCell><TableCell style={{textAlign:'end'}}>{taxable_income.toLocaleString()}</TableCell>
                        </TableRow>
                        <TableRow key='total_investment'>
                            <TableCell>f) Total Investment</TableCell><TableCell style={{textAlign:'end'}}>{total_investment.toLocaleString()}</TableCell>
                        </TableRow>
                        
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default SummaryTable;
