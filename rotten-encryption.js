// define the alphabet
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// shifts the alphabet over by n, returns resulting array
function shift(n) {
    n = Math.abs(n % alphabet.length);

    return alphabet.slice(n).concat(alphabet.slice(0,n));
}

// remaps a string from one character array to another
function remap(input, from, to) {
  var input_characters = input.split('');
  var remapped_string = [];

  for ( var i = 0; i < input_characters.length; i++ ) {
    var character = input_characters[i].toLowerCase();

    if ( to.indexOf(character) !== -1 ) {
      remapped_string.push(to[from.indexOf(character)]);
    } else {
      remapped_string.push(character);
    }
  }

  return remapped_string.join('');
}

var exports = module.exports = {};

// encode a given string using a give Caesar shift.
exports.encode = function(n, input) {
  var shifted_alphabet = shift(n); 

  return remap(input, alphabet, shifted_alphabet);
};

// decode a given string using a give Caesar shift.
exports.decode = function(n, input) {
  var shifted_alphabet = shift(n); 

  return remap(input, shifted_alphabet, alphabet);
};
