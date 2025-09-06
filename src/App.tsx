import React, { useCallback, useEffect, useState } from 'react';
import { Container, Box, Grid, CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import TopBar from './components/TopBar';
import IncomeForm from './components/IncomeForm';
import SummaryTable from './components/SummaryTable';
import TaxCalculationTable from './components/TaxCalculationTable';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const [formValues, setFormValues] = useState({
    basic: 0,
    houseRent: 0,
    medicalAllowance: 0,
    conveyance: 0,
    festivalBonus: 0,
    otherAllowance: 0,
    advanceIncomeTax: 0,
  });

  const [summary, setSummary] = useState({
    total_earning: 0,
    one_third_earning: 0,
    max_tax_free_income: 500000,
    tax_free_income: 0,
    taxable_income: 0,
  });

  const resetForm = () => {
    setFormValues({
      basic: 0,
      houseRent: 0,
      medicalAllowance: 0,
      conveyance: 0,
      festivalBonus: 0,
      otherAllowance: 0,
      advanceIncomeTax: 0,
    });
  };

  const handleInputChange = (field: string, value: number) => {
    // console.log(field, value)
    setFormValues(prevState => ({
      ...prevState,
      [field]: value,
    }));


  };

  const calculateGrossPay = useCallback(() => {
    const {
      basic,
      houseRent,
      medicalAllowance,
      conveyance,
      festivalBonus,
      otherAllowance,
    } = formValues;
    return (
      basic +
      houseRent +
      medicalAllowance +
      conveyance +
      festivalBonus +
      otherAllowance
    );
  }, [formValues]);


  useEffect(() => {
    // console.log('gross', calculateGrossPay())

    const grossPay = calculateGrossPay();
    const oneThirdOfTotalEarnings = Math.round(grossPay / 3);
    const taxFreeIncome = Math.min(500000, oneThirdOfTotalEarnings);
    const taxableIncome = grossPay - taxFreeIncome;

    setSummary(prevState => ({
      ...prevState,
      total_earning: grossPay,
      one_third_earning: oneThirdOfTotalEarnings,
      tax_free_income: taxFreeIncome,
      taxable_income: taxableIncome,
    }));


  }, [formValues, calculateGrossPay]);


  const calculateTaxableIncome = () => {
    const grossPay = calculateGrossPay();
    const maxTaxFreeIncome = 500000;
    const oneThirdOfTotalEarnings = grossPay / 3;
    const taxFreeIncome = Math.min(maxTaxFreeIncome, oneThirdOfTotalEarnings);
    return grossPay - taxFreeIncome;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Container style={{ padding: '16px', minHeight: '100vh' }}>
        <Box my={4}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <IncomeForm onChange={handleInputChange} inputData={formValues} onReset={resetForm} />
            </Grid>
            <Grid item xs={12} md={6}>
              <SummaryTable {...summary} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TaxCalculationTable
                taxable_income={calculateTaxableIncome()}
                gender={'Male'} 
                first_slab={350000} />
            </Grid>
            <Grid item xs={12} md={6}>
            <TaxCalculationTable
                taxable_income={calculateTaxableIncome()}
                gender={'Female'} 
                first_slab={400000} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
