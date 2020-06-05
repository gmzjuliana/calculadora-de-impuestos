const TASA = 3261;
let pension;
let health;
let solidarity;

function convertFromUSDtoCOP(dollarValue) {
  return dollarValue * TASA;
}

function testConvertFromUSDtoCOP() {
  const result = convertFromUSDtoCOP(5000);
  const expectedResult = 16305000;

  if (result === expectedResult) {
    console.log("convertFromUSDtoCO - passed");
  } else {
    console.log("convertFromUSDtoCO - fail");
  }
}

testConvertFromUSDtoCOP();

function get40Percent(pesosValue) {
  return pesosValue * 0.4;
}

function testGet40Percent() {
  const result = get40Percent(16305000);
  const expectedResult = 6522000;

  if (result === expectedResult) {
    console.log("get40Percent - passed");
  } else {
    console.log("get40Percent - fail");
  }
}

testGet40Percent();

function calculateContribution(deductableValue, percent) {
  const percentInDecimals = percent / 100;
  return deductableValue * percentInDecimals;
}

function testCalculateContribution() {
  const resultPension = calculateContribution(6522000, 12.5);
  const expectedResultPension = 815250;

  if (resultPension === expectedResultPension) {
    console.log("calculatePension - passed");
  } else {
    console.log("calculatePension - fail");
  }
}

testCalculateContribution();

function getSalaryAfterContributions(pesosValue) {
  const deductable = get40Percent(pesosValue);
  const pension = calculateContribution(deductable, 16);
  const health = calculateContribution(deductable, 12.5);
  const solidarity = calculateContribution(deductable, 1);
  const totalDeducted = pension + health + solidarity;

  return pesosValue - totalDeducted;
}

function testGetSalaryAfterContributions() {
  const result = getSalaryAfterContributions(16305000);
  const expectedResult = 14381010;

  if (result === expectedResult) {
    console.log("GetSalaryAfterContribution - passed");
  } else {
    console.log("GetSalaryAfterContribution - fail");
  }
}

testGetSalaryAfterContributions()
