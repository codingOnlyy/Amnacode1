// array.1
let amna = ['amna', 'saher'];
console.log(amna[1]); // Outputs: saher

// array.2
let data = [1, 'amna', 3, 1, 'amna', 3];
for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

// array.3
let entry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let a = 0; a < entry.length; a++) {  // 'a = data.length' to 'a < entry.length'
  console.log(entry[a]);
}

// array.4
let index = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
index.splice(1, 0, 'cherry', 'mango');
for (let i = 0; i < index.length; i++) {
  console.log(index[i]);
}

// array.5
let hello = ['amna', 'lyba', 'aiman', 'memona'];
hello.pop(); // Changed 'Pop()' to 'hello.pop()'
console.log(hello);

// array.6
let arr = [1, 'amna', 3, 1, 'amna', 3];
console.log(arr);

// array.7
let rr1 = [1, 2, 3];
let rr2 = [4, 5, 6];
let combinearr = rr1.concat(rr2);
console.log(combinearr);
console.log(combinearr.toString());

// array.8
let aar1 = [45, 56, 'ali', 89];
let aar2 = ['apple', 'banana', 'grapes', ...aar1];
console.log(aar2);
console.log(aar1.concat(aar2));
console.log(aar1.toString());

// array.9
let ara1 = ['weee!', 'manga', 'allstrings'];
let ara2 = ['memoona', 'amna', 'saher', 'lyba', ...ara1];
console.log(ara2);

// array.10
let pus = ['we', 34, 67, 78];
pus.pop(); 
console.log(pus);



