const playrName = document.querySelector(".playerName");
const storagePlayerName = localStorage.getItem("@memoryGame:playrName")
playrName.innerHTML = storagePlayerName;

