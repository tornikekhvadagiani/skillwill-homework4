// ● დაწერე ფუნქცია, რომელიც მიიღებს სამ
// პარამეტრს (string, valueToReplace,
// valueToReplaceWith), ჩაანაცვლებს
// "valueToReplace"-ს "valueToReplaceWith"
// მნიშვნელობით და დააბრუნებს ახალ stringს
// ● არ გამოიყენო string.replace() ფუნქცია

let replacement = (string, valueToReplace, valueToReplaceWith) => {
  let index = string.indexOf(valueToReplace);
  let newString =
    string.substr(0, index) +
    valueToReplaceWith +
    string.substr(index + valueToReplace.length);
  return newString;
};
console.log(
  replacement("მე მიყვარს ლამბორჯინი მანქანა", "ლამბორჯინი", "ფერარი")
);
// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს string ტიპის მნიშვნელობას
// (წინადადებას), მასში ყოველ სიტყვას
// გადაწერს დიდი ასოთი და დააბრუნებს
// ახალ წინადადებას

const capitalizeWords = (sentence) =>
  sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const originalSentence = "hello world, how are you?";
const capitalizedSentence = capitalizeWords(originalSentence);
console.log(capitalizedSentence);

// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს მომხმარებლების მასივს და
// დააბრუნებს დალაგებულ მასივს
// მომხმარებლების ასაკის ზრდადობის
// მიხედვით
// ● მაგალითად, ჩავთვალოთ, რომ გვაქვს
// [{name: ‘Lasha’, age: 30}, {name: ‘Saba’, age:
// 20}]. ფუნქციამ უნდა დააბრუნოს [{name:
// ‘Saba’, age: 20}, {name: ‘Lasha’, age: 30}]
// ● შეგიძლია გამოიყენო sort() ფუნქცია
const users = [
  { name: "Lasha", age: 30 },
  { name: "Saba", age: 20 },
  { name: "Nino", age: 25 },
];

const sortByAge = (users) => users.slice().sort((a, b) => a.age - b.age);

const sortedUsers = sortByAge(users);
console.log(sortedUsers);
