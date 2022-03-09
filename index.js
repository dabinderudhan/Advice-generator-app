const dice = document.querySelector(".advice-dice");
const adviceId = document.querySelector(".advice-id");
const adviceQuote = document.querySelector(".advice-quote--msg");

const fetchAPI = async function () {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  return data;
};

async function loadData() {
  try {
    const data = await fetchAPI();
    const { id, advice } = { ...data.slip };

    adviceId.innerText = id;
    adviceQuote.innerText = advice;
  } catch (error) {
    console.log(error);
  }
}

dice.addEventListener("click", async function () {
  loadData();
});

window.addEventListener("DOMContentLoaded", async function () {
  loadData();
});
