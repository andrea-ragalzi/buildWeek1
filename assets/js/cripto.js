const plaintext = "Il mio messaggio segreto";
const password = "TOYT079n+sH8GO8T2XsD7bt5Cs4LoLILPIX+S73rUIl7wMTNdSidRtis5wK3pnjg";

// Crittografia
const ciphertext = CryptoJS.AES.encrypt(plaintext, password).toString();

// Decrittografia
const bytes = CryptoJS.AES.decrypt(ciphertext, password);
const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

console.log(ciphertext); // Mostra il testo crittografato
console.log(decryptedData); // Mostra il testo decrittato
