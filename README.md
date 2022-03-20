# password-generator

<h2>User Story<h2>

AS AN employee with access to sensitive data

I WANT to randomly generate a password that meets certain criteria

SO THAT I can create a strong password that provides greater security

  
<h2>Acceptance Criteria<h2>
    
* password will be generated using window prompts
* password must be between 8 and 128 characters in length
* user will choose between the inclusion of uppercase or lowercase letters, numbers, and special characters (or any combination thereof)
* user must choose at least one character type in order for password to generate
* password will be generate to page for user to copy

For this assignment I made use of the while loop in two areas; one, to make the user select a number in an appropriate range, and two, to make the user choose at least one character type. As long as either condition were met, the user could keep selecting criteria to build their password

I used declarations so that when a particular character type was confirmed it would enable the declaration. Choosing 'Cancel' would keep the declaration from being included in the password.

Finally, using an empty array I combined and concatenated the confirmed declarations (using 'if' statements to then enable the character type) which formed the information within the password.

A for loop was used to bring that information into a randomizer with the restraint of the previously identified password length to ultimatley generate the requested password.


