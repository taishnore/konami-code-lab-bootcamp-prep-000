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

let index = 0

function init() {
  
  document.addEventListener("keydown", function(e) {
    let key = e.key;
    if (key = codes[index]) {
        index++;
        if (index === codes.length) {
            alert("Yeah");
            
            index = 0;
        }
    } else { 
        index = 0;
    }
})
}
