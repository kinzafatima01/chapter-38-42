// N0 1:

function power(a, b) {
    return Math.pow(a, b);
  }
  
  // Test the function
  console.log(power(2, 3));  // Output: 8
  console.log(power(5, 2));  // Output: 25
  document.write(`2^3 = ${power(2, 3)}<br>`);
  document.write(`5^2 = ${power(5, 2)}`);
  
// N0 2:


function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  // Test the function
  var year = prompt("Enter a year:");
  if (isNaN(year) || year < 1) {
    console.log("Invalid input. Please enter a positive integer.");
  } else {
    year = parseInt(year);
    if (isLeapYear(year)) {
      console.log(`${year} is a leap year.`);
    } else {
      console.log(`${year} is not a leap year.`);
    }
  }


// N0 3:

function calculateTriangleArea(a, b, c) {
    var S = (a + b + c) / 2;
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    
    if (isNaN(area) || area === 0) {
      return "Invalid triangle. Please check side lengths.";
    } else {
      return `The area of the triangle is ${area.toFixed(2)}`;
    }
  }
  
  // Test the function
  var a = prompt("Enter side length a:");
  var b = prompt("Enter side length b:");
  var c = prompt("Enter side length c:");
  
  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    console.log("Invalid input. Please enter positive numbers.");
  } else {
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    
    if (a + b <= c || a + c <= b || b + c <= a) {
      console.log("Invalid triangle. Sum of two sides must be greater than the third side.");
    } else {
      console.log(calculateTriangleArea(a, b, c));
    }
  }
  
// N0 4:

// Function to calculate average
function calculateAverage(marks1, marks2, marks3) {
    return (marks1 + marks2 + marks3) / 3;
  }
  
  // Function to calculate percentage
  function calculatePercentage(marks1, marks2, marks3, totalMarks) {
    var totalObtained = marks1 + marks2 + marks3;
    return (totalObtained / totalMarks) * 100;
  }
  
  // Main function
  function mainFunction() {
    var marks1 = parseFloat(prompt("Enter marks in Subject 1:"));
    var marks2 = parseFloat(prompt("Enter marks in Subject 2:"));
    var marks3 = parseFloat(prompt("Enter marks in Subject 3:"));
    var totalMarks = 300; // Assuming total marks per subject is 100
    
    if (isNaN(marks1) || isNaN(marks2) || isNaN(marks3)) {
      console.log("Invalid input. Please enter numbers.");
      return;
    }
    
    var average = calculateAverage(marks1, marks2, marks3);
    var percentage = calculatePercentage(marks1, marks2, marks3, totalMarks);
    
    console.log(`Average marks: ${average.toFixed(2)}`);
    console.log(`Percentage: ${percentage.toFixed(2)}%`);
  }
  
  // Call main function
  mainFunction();
  

// N0 5:


function customIndexOf(string, char) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === char) {
        return i;
      }
    }
    return -1;
  }
  
  // Test the function
  var string = "Hello, World!";
  var char = "W";
  console.log(customIndexOf(string, char));  // Output: 7
  

// N0 6:



function deleteVowels(sentence) {
    const vowels = 'aeiouAEIOU';
    let result = '';
  
    for (let i = 0; i < sentence.length; i++) {
      if (!vowels.includes(sentence[i])) {
        result += sentence[i];
      }
    }
  
    return result;
  }
  
  // Test the function
  const sentence = prompt("Enter a sentence:");
  console.log(deleteVowels(sentence));
  


// N0 7:




function countVowelPairs(text) {
    var count = 0;
    text = text.toLowerCase();
  
    for (let i = 0; i < text.length - 1; i++) {
      switch (text.substring(i, i + 2)) {
        case 'aa':
        case 'ae':
        case 'ai':
        case 'ao':
        case 'au':
        case 'ea':
        case 'ee':
        case 'ei':
        case 'eo':
        case 'eu':
        case 'ia':
        case 'ie':
        case 'ii':
        case 'io':
        case 'iu':
        case 'oa':
        case 'oe':
        case 'oi':
        case 'oo':
        case 'ou':
        case 'ua':
        case 'ue':
        case 'ui':
        case 'uo':
        case 'uu':
          count++;
          break;
        default:
          break;
      }
    }
  
    return count;
  }
  
  // Test the function
  var text = "Pleases read this application and give me gratuity";
  console.log(countVowelPairs(text));  // Output: 3


// N0 8:


  // Function to convert km to meters
function kmToMeters(km) {
    return km * 1000;
  }
  
  // Function to convert km to feet
  function kmToFeet(km) {
    return km * 3280.84;
  }
  
  // Function to convert km to inches
  function kmToInches(km) {
    return km * 39370.1;
  }
  
  // Function to convert km to centimeters
  function kmToCentimeters(km) {
    return km * 100000;
  }
  
  // Main function
  function main() {
    var km = parseFloat(prompt("Enter distance in km:"));
  
    if (isNaN(km) || km < 0) {
      console.log("Invalid input. Please enter a non-negative number.");
      return;
    }
  
    console.log(`Distance in meters: ${kmToMeters(km)}`);
    console.log(`Distance in feet: ${kmToFeet(km).toFixed(2)}`);
    console.log(`Distance in inches: ${kmToInches(km).toFixed(2)}`);
    console.log(`Distance in centimeters: ${kmToCentimeters(km)}`);
  }
  
  // Call main function
  main();
  
  
  
// N0 9:


// Function to calculate overtime pay
function calculateOvertimePay(hoursWorked, hourlyRate) {
    var overtimeRate = 12.00;
     var standardHours = 40;
  
    if (hoursWorked <= standardHours) {
      return 0;
    } else {
      var overtimeHours = hoursWorked - standardHours;
      return overtimeHours * overtimeRate;
    }
  }
  
  // Main function
  function main() {
    var hoursWorked = parseInt(prompt("Enter hours worked:"));
    var hourlyRate = parseFloat(prompt("Enter hourly rate:"));
  
    if (isNaN(hoursWorked) || hoursWorked < 0 || isNaN(hourlyRate) || hourlyRate < 0) {
      console.log("Invalid input. Please enter non-negative numbers.");
      return;
    }
  
    var overtimePay = calculateOvertimePay(hoursWorked, hourlyRate);
    var totalPay = (hoursWorked <= 40) ? hoursWorked * hourlyRate : 40 * hourlyRate + overtimePay;
  
    console.log(`Hours worked: ${hoursWorked}`);
    console.log(`Hourly rate: Rs. ${hourlyRate}`);
    console.log(`Overtime pay: Rs. ${overtimePay}`);
    console.log(`Total pay: Rs. ${totalPay}`);
  }
  
  // Call main function
  main();
  

// N0 10:



// Function to calculate currency notes
function calculateCurrencyNotes(amount) {
    const notes = {
      100: 0,
      50: 0,
      10: 0
    };
  
    // Calculate 100 denomination notes
    notes[100] = Math.floor(amount / 100);
    amount %= 100;
  
    // Calculate 50 denomination notes
    notes[50] = Math.floor(amount / 50);
    amount %= 50;
  
    // Calculate 10 denomination notes
    notes[10] = Math.floor(amount / 10);
  
    return notes;
  }
  
  // Main function
  function main() {
    var amount = parseInt(prompt("Enter amount to withdraw (in hundreds):")) * 100;
  
    if (isNaN(amount) || amount < 0 || amount % 10 !== 0) {
      console.log("Invalid input. Please enter a multiple of 10.");
      return;
    }
  
    var notes = calculateCurrencyNotes(amount);
  
    console.log(`Amount: Rs. ${amount}`);
    console.log(`Currency Notes:`);
    console.log(`  100: ${notes[100]}`);
    console.log(`  50: ${notes[50]}`);
    console.log(`  10: ${notes[10]}`);
  }
  
  // Call main function
  main();
  
  