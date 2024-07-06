import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { CalculationDataType } from '../models/model';


const HeaderCell = styled(TableCell)({
    backgroundColor: '#0066cc',
    color: 'white',
    fontWeight: 'bold',
});
const CustomTableCell = styled(TableCell)({
    borderBottom: 'none',  // Hide body cell border
});

interface InvestmentFormProps {
    onChange: (field: string, value: number) => void;
    inputData?: CalculationDataType;
}

const InvestmentForm: React.FC<InvestmentFormProps> = ({ onChange, inputData }) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(event.target.id)
        onChange(event.target.id, parseFloat(event.target.value) || 0)
    };

    return (
        <Paper style={{ padding: '16px' }}>
            {/* <Typography variant="h6" align="center" gutterBottom>Investments</Typography> */}
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <HeaderCell>2. Investments & Donations</HeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow key='shanchayPatra'>
                            <CustomTableCell>
                                <TextField size='small' id='shanchayPatra' fullWidth label='Shanchay Patra (maximum 5,00,000)' value={inputData?.shanchayPatra} onChange={handleChange} variant="outlined" />
                            </CustomTableCell>
                        </TableRow>
                        <TableRow key='dps'>
                            <CustomTableCell>
                                <TextField size='small' id='dps' fullWidth label='DPS (maximum 1,20,000)' value={inputData?.dps} onChange={handleChange} variant="outlined" />
                            </CustomTableCell>
                        </TableRow>
                        <TableRow key='zakat'>
                            <CustomTableCell>
                                <TextField size='small' id='zakat' fullWidth label='Zakat' value={inputData?.zakat} onChange={handleChange} variant="outlined" />
                            </CustomTableCell>
                        </TableRow>
                        <TableRow key='otherInvestment'>
                            <CustomTableCell>
                                <TextField size='small' id='otherInvestment' fullWidth label='Other Investment or Donation' value={inputData?.otherInvestment} onChange={handleChange} variant="outlined" />
                            </CustomTableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default InvestmentForm;
