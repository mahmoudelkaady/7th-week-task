/*
let start = 10;
let end = 100;
let exclude = 40;
for (i = +true; i <= start; i++) {
  if (i * start === exclude) {
    continue;
  }
  document.write(`<h2>${i * start}</h2>`);
}
*/

/*
// Output
10
20
30
50
60
70
80
90
100*/

//////////////////////
/*
let start = 10;
let end = 0;
let stop = 3;

for (let i = start; i > end; i--) {
  if (i === start) {
    console.log(i);
  }
  if (i < start) {
    console.log(`${end}${i}`);
  }
  if (i === stop) {
    break;
  }
}
*/
/*
// Output
10;
09;
08;
07;
06;
05;
04;
03;
*/
//////////////////////////////////
/*
let start = 1;
let end = 6;
let breaker = 2;

for (i = start; i <= end; i++) {
  console.log(i);
  for (j = breaker; j < end; j += breaker) {
    console.log(`--${j}`);
  }
}
*/
/*
// Output
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4
*/
////////////////////////////////

// let index = 10;
// let jump = 2;

// for (;;) {
//   if (index === jump) break;
//   console.log(index);
//   index -= jump;
// }
// for (;;) {
//   let i = index;
//   i > jump;
//   i -= 2;
//   console.log(i);
// }

// Output
// 10;
// 8;
// 6;
// 4;
//////////////////////////////

// let index = 10;
// let jump = 2;

// for (;;) {
//   if (index === jump) break;
//   console.log(index);
//   index -= jump;
// }

// // Output
// 10;
// 8;
// 6;
// 4;
/*
in the loop i can write the code in the for () 
or write it in the pracet {} 
but in this condition the for's variable should be
writen out the for */
////////////////////////

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// // console.log(+false);
// for (i = +false; i < friends.length; i++) {
//   if (friends[i] === "Ahmed") {
//     continue;
//   }
//   if (friends[i] === "Ameer") {
//     continue;
//   }

//   console.log(`${i} => ${friends[i]}`);
// }

// // Output
// ("1 => Sayed");
// ("2 => Eman");
// ("3 => Mahmoud");
// ("4 => Osama");
// ("5 => Sameh");

/////////////////////////

// let start = 0;
// let swappedName = "elZerO";
// for (i = 0; i < swappedName.length; i++) {
//   console.log(swappedName[i].toUpperCase());
// }
// // Output
// ("ELzERo");

///////////////////////////
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (i = 1; i < mix.length; i++) {
  if (typeof mix[i] == typeof "a") {
    continue;
  }
  console.log(mix[i]);
}
// Output
2;
3;
4;
