function calculateTax() {
    const salary = parseFloat(document.getElementById("salary").value);
    const allowance = parseFloat(document.getElementById("allowance").value);

    if (isNaN(salary) || isNaN(allowance)) {
        alert("Please enter valid numbers for Salary and Allowance.");
        return;
    }

    const yearlySalary = salary * 12;
    const bonus = Math.ceil(salary / 2);
    const calculatedBonus = bonus * 2;
    const totalReceived = yearlySalary + (bonus*2) + allowance;

    document.getElementById("calculatedSalary").value = yearlySalary;
    document.getElementById("bonus").value = bonus;
    document.getElementById("calculatedBonus").value = calculatedBonus;
    document.getElementById("totalReceived").value = totalReceived;


    // Calculate the values for the new table
    const basicSalary = Math.ceil((10/16) * (yearlySalary+allowance-30000));

    //const basicSalary = yearlySalary + bonus + allowance - (yearlySalary / 2 + yearlySalary / 10 + 30000);


    const houseRent = basicSalary / 2;
    const medical = basicSalary / 10;
    const conveyance = 30000;
    const festivalBonus = calculatedBonus;
    const total = basicSalary + houseRent + medical + conveyance + festivalBonus;

    // Display the results in the new table
    document.getElementById("basicSalary").value = basicSalary;
    document.getElementById("houseRent").value = houseRent;
    document.getElementById("medical").value = medical;
    document.getElementById("conveyance").value = conveyance;
    document.getElementById("festivalBonus").value = festivalBonus;
    document.getElementById("total").value = total;
}
