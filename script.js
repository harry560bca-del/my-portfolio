const text = "Aspiring Developer • Java • Python • Web Dev";
let i = 0;
function typeWriter() {
  document.getElementById("typing").innerText = text.slice(0, i) + (i % 2 ? "|" : "");
  i = (i + 1) % (text.length + 1);
  setTimeout(typeWriter, 150);
}
typeWriter();
