const dice = document.getElementById("dice");
const advice = document.getElementById("text");
const adviceID = document.getElementById("adviceID");


dice.addEventListener("click", (event) =>{
  event.preventDefault();

  fetch(`https://api.adviceslip.com/advice`)
  .then(response => response.json())
  .then(data => {
    adviceID.textContent = data.slip.id;
    advice.textContent = `"${data.slip.advice}"`;
  })
  .catch(error => {
    console.error(error);
  });
});
