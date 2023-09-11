function calculateTax() {
    const salary = parseFloat(document.getElementById("salary").value);
    var allowance = parseFloat(document.getElementById("allowance").value);

    if (isNaN(salary)) {
        resetValues();
        return;
    }

    if (isNaN(allowance)) {
        allowance = 4000;
    }

    const yearlySalary = salary * 12;
    const yearlyAllowance = allowance * 12
    const bonus = Math.ceil(salary / 2);
    const calculatedBonus = bonus * 2;
    const totalReceived = yearlySalary + (bonus*2) + yearlyAllowance;

    document.getElementById("stepForCalculatedSalary").value = salary + " x 12";
    document.getElementById("calculatedSalary").value = yearlySalary;
    document.getElementById("stepForCalculatedAllowance").value = allowance + " x 12";
    document.getElementById("calculatedAllowance").value = yearlyAllowance;
    // document.getElementById("bonus").value = bonus;
    document.getElementById("stepForCalculatedBonus").value = bonus + " x 2";
    document.getElementById("calculatedBonus").value = calculatedBonus;
    document.getElementById("totalReceived").value = totalReceived;


    // Calculate the values for the new table
    const basicSalary = Math.ceil((10/16) * (yearlySalary+yearlyAllowance-30000));


    const houseRent = Math.ceil(basicSalary / 2);
    const medical = Math.ceil(basicSalary / 10);
    const conveyance = 30000;
    const festivalBonus = calculatedBonus;
    const total = basicSalary + houseRent + medical + conveyance + festivalBonus;


    const allowableExpenses = Math.min(total / 3, 450000);
    const totalTaxableIncome = total - allowableExpenses;

    // Display the results in the new table
    document.getElementById("basicSalary").value = basicSalary;
    document.getElementById("houseRent").value = houseRent;
    document.getElementById("medical").value = medical;
    document.getElementById("conveyance").value = conveyance;
    document.getElementById("festivalBonus").value = festivalBonus;
    document.getElementById("total").value = total;

    document.getElementById("allowableExpenses").value = allowableExpenses;
    document.getElementById("totalTaxableIncome").value = totalTaxableIncome;

    calculateIncomeTax(totalTaxableIncome);
    
}


function calculateIncomeTax(income) {

    var tax0 = 0;
    var tax5 = 0;
    var tax10 = 0;
    var tax15 = 0;
    var tax20 = 0;
    var tax25 = 0;

    if (income <= 350000) {
        tax0 = 0; // No tax on the first Tk 3.5 lakh
    } 
    
    else if (income <= 450000) {
        tax5 = (income - 350000) * 0.05; // 5% tax on the next Tk 1 lakh
    } 
    
    else if (income <= 750000) {
        tax5 = 5000 // 5% tax on the first Tk 1 lakh

        tax10 = (income - 450000) * 0.10;
    } 
    
    else if (income <= 1150000) {
        tax5 = 5000 // 5% tax on the first Tk 1 lakh
        tax10 = 30000 // 10% tax on the next Tk 3 lakh

        tax15 = (income - 750000) * 0.15;
    } 
    
    else if (income <= 1650000) {
        tax5 = 5000 // 5% tax on the first Tk 1 lakh
        tax10 = 30000 // 10% tax on the next Tk 3 lakh
        tax15 = 60000 // 15% tax on the next Tk 4 lakh

        tax20 = (income - 1150000) * 0.20;
    } 
    
    else {
        tax5 = 5000 // 5% tax on the first Tk 1 lakh
        tax10 = 30000 // 10% tax on the next Tk 3 lakh
        tax15 = 60000 // 15% tax on the next Tk 4 lakh
        tax20 = 80000 // 20% tax on the next Tk 5 lakh

        tax25 = tax5 + tax10 + tax15 + tax20 + (income - 1650000) * 0.25;
    }

    const totalTax = Math.ceil(tax0 + tax5 + tax10 + tax15 + tax20 + tax25);
    const taxDeductiblePerMonth = Math.floor(totalTax / 12);

    document.getElementById("tax0").value = tax0.toFixed(2);
    document.getElementById("tax5").value = tax5.toFixed(2);
    document.getElementById("tax10").value = tax10.toFixed(2);
    document.getElementById("tax15").value = tax15.toFixed(2);
    document.getElementById("tax20").value = tax20.toFixed(2);
    document.getElementById("tax25").value = tax25.toFixed(2);
    document.getElementById("totalTax").value = totalTax.toFixed(2);
    document.getElementById("taxDeductiblePerMonth").value = taxDeductiblePerMonth.toFixed(2);
}


function resetValues() {
    const inputFields = document.querySelectorAll('input[type="number"], input[type="text"], label');

    inputFields.forEach(field => {
        field.value = "";
    });

    // Set cursor focus to the Salary input field
    document.getElementById("salary").focus();
}

