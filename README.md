# Rotten Encryption

Node package to encode/decode text using a Caesar Shift (or ROT-n) cipher.

## Background

I recently discovered a renewed interest in basic encryption. In an effort
to continue my node.js education, I decided to write a simple package to 
encrypt/decrypt strings using a ROT-n cipher (also commonly known as a [Caesar
Shift](https://en.wikipedia.org/wiki/Caesar_cipher)).

![Caesar Shift](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Caesar_cipher_left_shift_of_3.svg/320px-Caesar_cipher_left_shift_of_3.svg.png)

**Note: This is an incredibly rudimentary cipher. Please do not use this package
for any serious encryption needs.**

## Installation

```
npm install rotten-encryption
```

## Usage

```
var rotten = require('rotten-encryption');

// number of steps to shift the resulting alphabet
var shift = 6;

// encrypt an input string
rotten.encrypt(shift, 'string to encrypt');

// decrypt an input string
rotten.decrypt(shift, 'string to decrypt');
```
