/**
 * Prints out the first n multiples of 13.
 *
 * The output should look like:
 *
 *   13 times 1 is 13
 *   13 times 2 is 26
 *   13 times 3 is 39
 *   13 times 4 is 52
 */
function timesTable13(n) {
  let product;
  for (let i = 1; i < n; i ++) {
    product = i * 13
    console.log(`13 times ${i} is ${product}`)
  }
}

if (require.main === module) {
  let input;

  input = 10;
  console.log('The first', input, 'multiples of 13 are:')
  timesTable13(input);
  console.log('----------------');
  console.log();


  input = 5;
  console.log('The first', input, 'multiples of 13 are:')
  timesTable13(input);
  console.log('----------------');
  console.log();
}
