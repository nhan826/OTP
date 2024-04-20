// Function to encrypt the plaintext using the provided key
function encrypt() {
    // Get the plaintext, key, and ciphertext elements from the HTML
    const plaintext = document.getElementById('plaintext').value.toUpperCase();
    const key = document.getElementById('key').value.toUpperCase();

    // Check if the plaintext and key have the same length
    if (plaintext.length !== key.length) {
        alert('Plain text and key must be of the same length.');
        return;
    }

    // Initialize an empty string to store the resulting ciphertext
    let ciphertext = '';

    // Iterate through each character in the plaintext
    for (let i = 0; i < plaintext.length; i++) {
        // Apply the one-time pad encryption formula to each character
        const charCode = ((plaintext.charCodeAt(i) - 65 + key.charCodeAt(i) - 65) % 26) + 65;
        // Convert the resulting character code back to a character and append to the ciphertext
        ciphertext += String.fromCharCode(charCode);
    }

    // Display the encrypted text in the ciphertext textarea
    document.getElementById('ciphertext').value = ciphertext;
}

// Function to decrypt the ciphertext using the provided key
function decrypt() {
    // Get the ciphertext, key, and plaintext elements from the HTML
    const ciphertext = document.getElementById('ciphertext').value.toUpperCase();
    const key = document.getElementById('key').value.toUpperCase();

    // Check if the ciphertext and key have the same length
    if (ciphertext.length !== key.length) {
        alert('Cipher text and key must be of the same length.');
        return;
    }

    // Initialize an empty string to store the resulting plaintext
    let plaintext = '';

    // Iterate through each character in the ciphertext
    for (let i = 0; i < ciphertext.length; i++) {
        // Apply the one-time pad decryption formula to each character
        const charCode = ((ciphertext.charCodeAt(i) - 65 - (key.charCodeAt(i) - 65) + 26) % 26) + 65;
        // Convert the resulting character code back to a character and append to the plaintext
        plaintext += String.fromCharCode(charCode);
    }

    // Display the decrypted text in the plaintext textarea
    document.getElementById('plaintext').value = plaintext;
}

// Function to generate a random key of the specified length
function generateRandomKey(length) {
    // Define the alphabet used for the key
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Initialize an empty string to store the random key
    let key = '';

    // Iterate for the specified length to generate the key
    for (let i = 0; i < length; i++) {
        // Generate a random index within the alphabet
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        // Append the character at the random index to the key
        key += alphabet.charAt(randomIndex);
    }

    // Return the generated random key
    return key;
}

// Function to generate a random key for the length of the entered plaintext
function generateKey() {
    // Get the length of the plaintext
    const plaintextLength = document.getElementById('plaintext').value.length;
    // Generate a random key of the same length and display it in the key textarea
    document.getElementById('key').value = generateRandomKey(plaintextLength);
}