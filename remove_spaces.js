// Write a function that removes the spaces from the string, then return the resultant string.

function removeSpaces(str) {
    return str.replace(/\s+/g, '');
  }

  console.log(removeSpaces("I went to the store to buy food"));


function splitStringIntoChars(str) {
    return str.split('');
  }

    const str = "Hello, World!";
    const charsArray = splitStringIntoChars(str);
    console.log(charsArray);

    const rejoin = charsArray.join('');
    console.log(rejoin);