// Store the names of your friends in an array called names
let names: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Define the personalized message
let message: string = "Hello, ";

// Print a message to each person, personalized with their name
for (let i = 0; i < names.length; i++) {
    console.log(message + names[i] + "!");
}
