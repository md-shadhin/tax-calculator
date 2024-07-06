import React, { useCallback, useEffect, useState } from 'react';
import { Container, Box, Grid, CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import TopBar from './components/TopBar';
import IncomeForm from './components/IncomeForm';
import InvestmentForm from './components/InvestmentForm';
import SummaryTable from './components/SummaryTable';
import RebateTable from './components/RebateTable';
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
    shanchayPatra: 0,
    dps: 0,
    zakat: 0,
    otherInvestment: 0,
  });

  const [summary, setSummary] = useState({
    total_earning: 0,
    one_third_earning: 0,
    max_tax_free_income: 450000,
    tax_free_income: 0,
    taxable_income: 0,
    total_investment: 0
  });

  const [rebate, setRebate] = useState({
    three_percent: 0,
    fifeteen_percent: 0,
    mill: 1000000
  });

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

  const calculateInvestments = useCallback(() => {
    const {
      shanchayPatra,
      dps,
      zakat,
      otherInvestment
    } = formValues;

    const calculatedShanchayPatra = shanchayPatra >= 500000 ? 500000 : shanchayPatra;
    const calculatedDps = dps >= 120000 ? 120000 : dps;

    return calculatedShanchayPatra + calculatedDps + zakat + otherInvestment;
  }, [formValues]);

  useEffect(() => {
    // console.log('gross', calculateGrossPay())

    const grossPay = calculateGrossPay();
    const oneThirdOfTotalEarnings = Math.round(grossPay / 3);
    const taxFreeIncome = Math.min(450000, oneThirdOfTotalEarnings);
    const taxableIncome = grossPay - taxFreeIncome;
    const totalInvestment = calculateInvestments();

    setSummary(prevState => ({
      ...prevState,
      total_earning: grossPay,
      one_third_earning: oneThirdOfTotalEarnings,
      tax_free_income: taxFreeIncome,
      taxable_income: taxableIncome,
      total_investment: totalInvestment
    }));

    const threePercent = Math.round(taxableIncome * 0.03);
    const fifteenPercent = Math.round(totalInvestment * 0.15);

    setRebate(prevState => ({
      ...prevState,
      three_percent: threePercent,
      fifeteen_percent: fifteenPercent,
    }))

  }, [formValues, calculateGrossPay, calculateInvestments]);


  const calculateTaxableIncome = () => {
    const grossPay = calculateGrossPay();
    const maxTaxFreeIncome = 450000;
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
              <IncomeForm onChange={handleInputChange} inputData={formValues} />
            </Grid>
            <Grid item xs={12} md={6}>
              <InvestmentForm onChange={handleInputChange} inputData={formValues} />
            </Grid>
            <Grid item xs={12} md={6}>
              <SummaryTable {...summary} />
            </Grid>
            <Grid item xs={12} md={6}>
              <RebateTable {...rebate} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TaxCalculationTable
                taxable_income={calculateTaxableIncome()}
                total_rebate={Math.min(rebate.fifeteen_percent, rebate.three_percent, rebate.mill)} 
                gender={'Male'} 
                first_slab={350000} />
            </Grid>
            <Grid item xs={12} md={6}>
            <TaxCalculationTable
                taxable_income={calculateTaxableIncome()}
                total_rebate={Math.min(rebate.fifeteen_percent, rebate.three_percent, rebate.mill)} 
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
