/* ----------------------- */
/*      padStart()         */
/* ----------------------- */
'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, 'foo');  // "foofoofabc"
'abc'.padStart(6, '123456') // "123abc"

const str = '5';
console.log(str.padStart(2, '0')); // "05"

// Ejemplo enmascarar un numero
const fullNumber = '2035408560212109'
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*')
console.log(maskedNumber); // "************2109"



/* ----------------------- */
/*      padEnd()         */
/* ----------------------- */
'abc'.padEnd(10);         // "abc       "
'abc'.padEnd(10, 'foo');  // "abcfoofoof"
'abc'.padEnd(6, '123456') // "abc123"

const str1 = 'Nils';
console.log(str1.padEnd(str1.length, ' Frahm')); // "Nils Frahm"
