// Code your solutions in this file
function writeCards(names, event) {
    // Initialize an empty array to hold the thank you messages
    let thankYouMessages = [];

    // Loop through each name in the array
    for (let i = 0; i < names.length; i++) {
      // Create a thank you message for the current name and event
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;

      // Add the thank you message to the array
      thankYouMessages.push(message);
    }

    // Return the array of thank you messages
    return thankYouMessages;
  }

  // Example usage:
  let names = ["Alice", "Bob", "Charlie"];
  let event = "birthday";
  let messages = writeCards(names, event);
  console.log(messages);


  function countDown(number) {
    // Loop from the provided number down to 0
    for (let i = number; i >= 0; i--) {
      // Log the current number to the console
      console.log(i);
    }
  }

  // Example usage:
  countDown(10)