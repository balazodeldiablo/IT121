/* Pig Latin: a game of words. 

    First, we need to evaluate if the length of the user input is appropiate to proceed with our process. In this case, we will make use of the length method to do so.

    Once appropiate length has been established we can begin to evaluate the first character in our input. We will make use of the '.charAt()'.
    
    If the first character is a consonant, we will need to evaluate the second character in our input, since there will be an extra step in case the second character also is a consonant.
    
    If the length isn't appropiate the page will send an alert with the message: "Input cannot be translated".
    
    Andy Davila.
    
    Jan 15, 2023
*/

let userInput = prompt('Pig Latin: A game of words. Please enter a word.');
if (userInput.length > 1) {
    switch (userInput.charAt(0)) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
            document.write(userInput + "way");
            break;
        default:
            switch (userInput.charAt(1)) {
                case "a":
                case "e":
                case "i":
                case "o":
                case "u":
                case "A":
                case "E":
                case "I":
                case "O":
                case "U":
                    document.write(userInput.substring(1) + userInput.charAt(0) + "ay")
                    break;
                default:
                    document.write(userInput.substring(2) + userInput.substring(0,2) + "ay")
            }
    }
} else {
    alert("Input cannot be translated.")
}
