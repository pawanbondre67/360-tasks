/*1. Enhancing the UserInput Interface to Include Validation Rules
TypeScript interfaces are used to define the structure of an object, but they don't enforce runtime validation rules, such as checking if an email is valid. For validation, you need to combine TypeScript with a validation library. One such approach is to enhance the UserInput interface by using a validation library like zod, yup, or class-validator.

Here’s an example using zod for both type definition and validation:


 Adding Validation with a Library
 Using zod for runtime validation, we can define a schema for UserInput:

 import { z } from 'zod';

const userInputSchema = z.object({
  name: z.string().min(1, "Name is required"),       // Must have at least 1 character
  email: z.string().email("Invalid email format"),   // Email must be valid
});

// Validate the input using the schema
function processUserInput(input: UserInput) {
  try {
    userInputSchema.parse(input);  // If validation fails, an error will be thrown
    console.log("Validation passed, processing input:", input);
    // Process the input here
  } catch (error) {
    console.error("Validation failed:", error.errors);
  }
}

*/

/* 

2. Strategy for Validating User Input in a TypeScript Application
Step 1: Define the Data Shape with TypeScript Interfaces
You define your data structure using TypeScript interfaces to ensure type safety at compile-time.

interface UserInput {
  name: string;
  email: string;
}
  This guarantees that the input has a name and email, both of which are strings, but this doesn't enforce validation logic like email format checking.


  Step 2: Use a Validation Library for Runtime Validation
For runtime validation, you can use a library like zod, yup, or class-validator. 
These libraries allow you to define validation rules declaratively and check the input at runtime.


 - zod and yup: Schema-based validation, defining the shape and constraints of data.
 - class-validator: Works well with classes, often used in combination with decorators.

Step 3: Perform Validation in the Application
Validate user input before processing it, both on the client and server sides. For example, before submitting a form or when receiving data in an API request:

 - Client-side: Perform validation when the user submits a form, providing immediate feedback.
 - Server-side: Validate input before storing it in a database or using it in further business logic.


Example of client-side validation:
 function processUserInput(input: UserInput) {
  try {
    userInputSchema.parse(input); // Validates the data at runtime
    // Proceed to process input if validation passes
  } catch (error) {
    // Handle validation errors (e.g., display messages to the user)
    console.error("Validation error:", error.errors);
  }
}


Step 4: Error Handling
Ensure you provide meaningful error messages to help users correct their inputs. 
Most validation libraries allow custom error messages, such as "Invalid email format" or "Name is required".

Step 5: Sanitize and Secure Data
After validation, sanitize the data to prevent malicious inputs, such as XSS (Cross-Site Scripting) attacks.
 This is especially important when the input is coming from untrusted sources, 
 such as form submissions or API requests.

 By combining TypeScript’s static type-checking with runtime validation using a library like zod, you get a robust and reliable input validation strategy.
*/


