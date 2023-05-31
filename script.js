function decimalToBinary(decimalNumber) {
  // Check if the input is 0
  if (decimalNumber === 0) {
    return '0';
  }

  // Create an empty array to store the binary digits
  const binaryArray = [];

  // Convert the decimal number to binary
  while (decimalNumber > 0) {
    // Get the remainder of division by 2
    const remainder = decimalNumber % 2;

    // Add the remainder to the binary array
    binaryArray.unshift(remainder);

    // Update the decimal number by dividing it by 2
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  // Join the binary digits into a string and return it
  return binaryArray.join('');
}
