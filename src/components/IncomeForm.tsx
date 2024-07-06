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

interface IncomeFormProps {
    onChange: (field: string, value: number) => void;
    inputData?: CalculationDataType;
}

const IncomeForm: React.FC<IncomeFormProps> = ({ onChange, inputData }) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(event.target.id)
        onChange(event.target.id, parseFloat(event.target.value) || 0)
    };

    return (
        <Paper style={{ padding: '16px' }}>
            {/* <Typography variant="h6" align="center" gutterBottom>Yearly Income</Typography> */}
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <HeaderCell>1. Yearly Income</HeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow key='basic'>
                            <CustomTableCell>
                                <TextField size='small' id='basic' fullWidth label='Basic Salary' value={inputData?.basic} onChange={handleChange} variant="outlined" />
                            </CustomTableCell>
                        </TableRow>
                        <TableRow key='houseRent'>
                            <CustomTableCell>
                                <TextField size='small' id='houseRent' fullWidth label='House Rent' value={inputData?.houseRent} onChange={handleChange} variant="outlined" />
                            </CustomTableCell>
                        </TableRow>
                        <TableRow key='medicalAllowance'>
                            <CustomTableCell>
                                <TextField size='small' id='medicalAllowance' fullWidth label='Medical Allowance' value={inputData?.medicalAllowance} onChange={handleChange} variant="outlined"  />
                            </CustomTableCell>
                        </TableRow>
                        <TableRow key='conveyance'>
                            <CustomTableCell>
                                <TextField size='small' id='conveyance' fullWidth label='Conveyance' value={inputData?.conveyance} onChange={handleChange} variant="outlined"  />
                            </CustomTableCell>
                        </TableRow>
                        <TableRow key='festivalBonus'>
                            <CustomTableCell>
                                <TextField size='small' id='festivalBonus' fullWidth label='Festival Bonus' value={inputData?.festivalBonus} onChange={handleChange} variant="outlined"  />
                            </CustomTableCell>
                        </TableRow>
                        <TableRow key='otherAllowance'>
                            <CustomTableCell>
                                <TextField size='small' id='otherAllowance' fullWidth label='Other Allowance' value={inputData?.otherAllowance} onChange={handleChange} variant="outlined"  />
                            </CustomTableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default IncomeForm;
