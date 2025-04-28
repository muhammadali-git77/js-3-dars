// Boolean1. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni musbat".
// let a = 1;

// if (a > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean2. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni toq son".
// let a = 3;

// if (a % 2 == 1) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean3. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A>2 va B <=3".
// let a = 3;
// let b = 4;

// if (a > 2 && b <= 3) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean4. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A <= B <= C"
// let a = 1;
// let b = 2;
// let c = 3;

// if (a <= b && b <= c) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean5. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarining har ikkalasi ham yoki toq son yoki juft son".
// let a = 5;
// let b = 6;

// if ((a % 2 == 0 && b % 2 == 0) || (a % 2 == 1 && b % 2 == 1)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean6. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning hech bo'lmaganda bittasi musbat".
// let a = 2;
// let b = 45;
// let c = 34;

// if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean7. Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning barcha raqamlari har xil".
// let num = 341;

// let first_num = (num - (num % 100)) / 100;
// let second_num = ((num % 100) - (num % 10)) / 10;
// let last_num = num % 10;

// if (
//   first_num != second_num &&
//   second_num != last_num &&
//   last_num != first_num
// ) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean8. Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bo'lmaganda 2 tasi bir biriga teng".
// let a = 2;
// let b = 45;
// let c = 34;

// if (a == b || b == c || c == a) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean1. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni juft son”.
// let a = 2;

// if (a % 2 == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean2. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A >= 0 yoki B < -2"
// let a = 3;
// let b = -3;

// if (a >= 0 || b < -2) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean3. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "B soni A va C sonlari orasida yotadi".
// let a = 3;
// let b = 4;
// let c = 5;

// if (a < b && b < c) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean4. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlari toq sonlar".
// let a = 3;
// let b = 9;

// if (a % 2 == 1 && b % 2 == 1) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean5. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning hech bo'lmaganda bittasi toq son".
// let a = 3;
// let b = 9;

// if (a % 2 == 1 || b % 2 == 1) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean6. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning faqat bittasi toq son".
// let a = 3;
// let b = 9;

// if (a % 2 == 1 && b % 2 == 0 || a % 2 == 0 && b % 2 == 1 ) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean7. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning har biri musbat".
// let a = 3;
// let b = 9;
// let c = 4

// if (a > 0 && b > 0 && c > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean8. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlaridan faqat bittasi musbat son".
// let a = 3;
// let b = 9;
// let c = 4;

// if (
//   (a > 0 && b < 0 && c < 0) ||
//   (a < 0 && b > 0 && c < 0) ||
//   (a < 0 && b < 0 && c > 0)
// ) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean9. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlardan faqat ikkitasi musbat son".
// let a = -3;
// let b = 9;
// let c = -4;

// if (
//   (a > 0 && b > 0 && c < 0) ||
//   (a < 0 && b > 0 && c > 0) ||
//   (a > 0 && b < 0 && c > 0)
// ) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean10. Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son ikki xonali juft son".
// let num = 22;

// if (100 < num && num > 9 && num % 2 == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean11. Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son uch xonali toq".
// let num = 223;

// if (1000 < num && num > 99 && num % 2 == 1) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean12. Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bo'lmaganda bir jufti o'zaro qarama-qarshi".
// let a = 1;
// let b = -1;
// let c = 3;

// if (a + b == 0 || b + c == 0 || c + a == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean13. Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan".
// let num = 123;

// let first_num = (num - (num % 100)) / 100;
// let second_num = ((num % 100) - (num % 10)) / 10;
// let last_num = num % 10;

// if (first_num == second_num - 1 && second_num == last_num - 1) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean14. Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan yoki kamayuvchi ketma-ketlikka ega".
// let num = 123;

// let first_num = (num - (num % 100)) / 100;
// let second_num = ((num % 100) - (num % 10)) / 10;
// let last_num = num % 10;

// if (first_num == second_num - 1 && second_num == last_num - 1 || first_num == second_num + 1 && second_num == last_num + 1) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean15. Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonni chapdan o'qiganda ham, o'ngdan o'qiganda ham bir xil".
// let num = 123;

// let first_num = (num - (num % 100)) / 100;
// let second_num = ((num % 100) - (num % 10)) / 10;
// let last_num = num % 10;

// if (first_num == last_num) {
//   console.log(true);
// } else {
//   console.log(false);
// }
