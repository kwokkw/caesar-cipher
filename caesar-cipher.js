/******************************************************************

Foundations Project Part 2: Helping Caesar's Traditional Secret Party 

 ********************************************************************/

// Declare a alphabet variable to store a 26-letter string
const alphabet = "abcdefghijklmnopqrstuvwxyz"

// Create a function that takes a plaintext message and a shift value and return an encrypted string
function encrypt (message, shiftValue)
{
    // Crate a function that takes a alphabet letter and return an encrypted letter
    function encryptedLetter(letter)
    {
        // Create a index variable to store the index of the letter in alphabet string.
        const index = alphabet.indexOf(letter) 

        // Create a newIndex variable to store the new index of a right shifted letter by a given value.
        // Ensuring the shift wraps around the alhabet if it exceeds by using mod operator.
        const newIndex = (index + shiftValue) % alphabet.length 

        // Return a encrypted letter by using bracket notation.
        return alphabet[newIndex]
    }

    // Create a variable to store an empty string
    // Value will be updated accordingly thus, let keyword
    let encryptingMessage = ""
    
    // Loop through each letter in message
    for (letter of message)
    {
        // If the message includes a lowercase character of the alphabet,
        if (alphabet.includes(letter))
        {        
            // Call the encryptedLetter function, assigns the letter to the encryptingMessage variable using addition assignment operator
            encryptingMessage += encryptedLetter(letter)
        }
        
        // If the letter is uppercase, convert it to lowercase
        else if (alphabet.includes(letter.toLowerCase()))
        {
            // Call the encryptedLetter function, convert it back to uppercase, assigns the letter to the encryptingMessage variable using addition assignment operator
            encryptingMessage += encryptedLetter(letter.toLowerCase()).toUpperCase()
        }
            
        // Pass non alphabet character as is to the encrypted message.
        else
        {
            // Assigns the non alphabet character to encryptingMessage variable using addition assignment operator
            encryptingMessage += letter
        }
    }

    /*********************** Introduce Random Letters **********************/
    
    // Create a variable to store an empty string
    // Value will be updated accordingly thus, let keyword
    let encryptedMessage = ""
    let i; //needed for further using
    // Loop through every two letters starting at the first letter 
    for (i = 0; i < encryptingMessage.length-1; i+=2)
    {   
        // Generate a random integer that acts as index
        const randomInt = Math.floor(Math.random() * alphabet.length)
        // Generate a random lowercase letter using bracket notation
        const randomLetter = alphabet[randomInt]
        
        // Update randomEncrytedMsg value by using string.slice() method and randomLetter variable;
        // After every two characters in the encrypted message, insert a random letter.
        encryptedMessage += encryptingMessage.slice(i, i + 2) + randomLetter
    }
    //for remaining 1 or 2 letters
    encryptedMessage += encryptingMessage.slice(i)
    // Return to the randomEncryptedMsg value.
    return encryptedMessage 
}

// Create a function that takes a encrypted string and a shift value and return an decrypted message
function decrypt (encryptedMessage, shiftValue)
{
    function decryptLetter(letter)
    {
        // Create a index variable to store the index of the letter in alphabet string.
        const index = alphabet.indexOf(letter) 
        
        // Create a newIndex variable to store the new index of a right shifted letter by a given value.
        // Ensuring the shift wraps around the alhabet if it exceeds by using mod operator.
        // If shiftValue bigger than alphabet.lenght we need "additional amount of alphabet.length" proportionally
        const newIndex = ((index - shiftValue) + Math.ceil(shiftValue/alphabet.length)*alphabet.length) % alphabet.length      
        // Return a encrypted letter by using bracket notation.       
        return alphabet[newIndex]
    }

    // Create a variable to store an empty string
    // Value will be updated accordingly thus, let keyword
    let decryptingMessage = ""

    // Loop through every two letters starting at the first letter, increment by 3
    for (let i = 0; i < encryptedMessage.length; i += 3)
    {
        // Create a new string using .slice() method
        // Pass the string value to decryptingMessage variable
        // Skip the random letter
        decryptingMessage += encryptedMessage.slice(i, i + 2)
    }
    
    // console.log(decryptingMessage)
    
    let decryptedMessage = ""
    
    for (letter of decryptingMessage)
    {        
        if (alphabet.includes(letter))
        {
            // ERROR
            decryptedMessage += decryptLetter(letter)
        }

       //treat UpperCase
        else if (alphabet.includes(letter.toLowerCase()))
        {
            // Call the encryptedLetter function, convert it back to uppercase, assigns the letter to the encryptingMessage variable using addition assignment operator
            decryptedMessage += decryptLetter(letter.toLowerCase()).toUpperCase()
             // else if statement here to handle uppercase letter
        }else decryptedMessage += letter       
    }

    console.log(decryptedMessage)
    
    
    return decryptedMessage;
}

encrypt("Hello Brutus, meet me at the high gardens.", 42)
//Xubbe Rhkjki, cuuj cu qj jxu xywx wqhtudi

decrypt("Xuobbce eRhakjikiw, gcueujr cfu wqjy jzxul xfywox pwqghtiudri.", 42)
//Hello Brutus, meet me at the high gardens..

/**************************************************************************

ATTRIBUTION

    - Michael Ogu, On-demand Mentor Call.
    I was in a wrong direction and he corrected me. 

    - How to insert a character into a string in JavaScript by Kris Lachance 
    https://www.basedash.com/blog/how-to-insert-a-character-into-a-string-in-javascript
    It gave me the idea of how to inserting a letter into a string.

QUESTIONS 

    - Why is the encryptedLetter function nested inside the encrypt function?
    Because of the shiftValue won't be found if it's outside the encrypt function. 

    - const newIndex = (index - shiftValue + alphabet.length) % alphabet.length
    Why it's subtracting shiftValue instead of adding?
    What is the logic behind?
    

CHALLENGES

    - I headed to a wrong direction in the middle of coding encrypt function.
    - Handling both uppercase and lowercase.
    - Inserting a random letter after everty two letter. 
        - String in js are immutable. To insert a letter, creating a new string is needed.

***************************************************************************/
