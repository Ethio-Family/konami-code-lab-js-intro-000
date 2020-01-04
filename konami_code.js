const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


function init(){
let index = 0;
document.addEventListener('keydown',function(event){
// your code here


if (event.key === codes[index]) {
  index++;

  if (index === codes.length) {
    alert("Congratualtions!");

    index = 0;
  }
} else {
  index = 0;
}


})
}
init()



// function init() {
//   // your code here
//
// // This is the function that would be invoked by the event listener.
// function onKeyDownHandler(e) {
//
//   const input = document.body.querySelector('input');
//   const key = e.key;
//   let index = 0;
// input.addEventListener('keydown', function(e) {
//   if (e.key === codes[index]) {
//     index++;
//
//     if (index === codes.length) {
//       alert("Congratualtions!");
//
//       index = 0;
//     }
//   } else {
//     index = 0;
//   }};
// }
// }
//init()
