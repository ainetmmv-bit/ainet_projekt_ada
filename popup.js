// Popup fuer Borsch Rezept

const modalBorschR = document.getElementById("popup-r-borsch");
const btnBorschR = document.getElementById("btn-r-borsch");
const modalBorschRClose = document.getElementById("r-borsch-close");

function openModal(modal) {
    modal.style.display = "block";
}

function closeModal(modal) {
    modal.style.display = "none";
}

btnBorschR.addEventListener("click", () => {
    openModal(modalBorschR)
})

modalBorschRClose.addEventListener("click", () => {
    closeModal(modalBorschR)
})

// Popup für Borsch Video

const modalBorschV = document.getElementById("popup-v-borsch");
const btnBorschV = document.getElementById("btn-v-borsch");
const modalBorschVClose = document.getElementById("v-borsch-close");

btnBorschV.addEventListener("click", () => {
    openModal(modalBorschV)
})

modalBorschVClose.addEventListener("click", () => {
    closeModal(modalBorschV)
})

// Popup für Galnash Rezept

const modalGalnashR = document.getElementById("popup-r-galnash");
const btnGalnashR = document.getElementById("btn-r-galnash");
const modalGalnashRClose = document.getElementById("r-galnash-close");

btnGalnashR.addEventListener("click", () => {
    openModal(modalGalnashR)
})

modalGalnashRClose.addEventListener("click", () => {
    closeModal(modalGalnashR)
})

// Popup für Galnash Video

const modalGalnashV = document.getElementById("popup-v-galnash");
const btnGalnashV = document.getElementById("btn-v-galnash");
const modalGalnashVClose = document.getElementById("v-galnash-close");

btnGalnashV.addEventListener("click", () => {
    openModal(modalGalnashV)
})

modalGalnashVClose.addEventListener("click", () => {
    closeModal(modalGalnashV)
})




// Popup für Manti Rezept

const modalMantiR = document.getElementById("popup-r-manti");
const btnMantiR = document.getElementById("btn-r-manti");
const modalMantiRClose = document.getElementById("r-manti-close");

btnMantiR.addEventListener("click", () => {
    openModal(modalMantiR)
})

modalMantiRClose.addEventListener("click", () => {
    closeModal(modalMantiR)
})

// Popup für Manti Video

const modalMantiV = document.getElementById("popup-v-manti");
const btnMantiV = document.getElementById("btn-v-manti");
const modalMantiVClose = document.getElementById("v-manti-close");

btnMantiV.addEventListener("click", () => {
    openModal(modalMantiV)
})

modalMantiVClose.addEventListener("click", () => {
    closeModal(modalMantiV)
})



// Popup für Plov Rezept

const modalPlovR = document.getElementById("popup-r-plov");
const btnPlovR = document.getElementById("btn-r-plov");
const modalPlovRClose = document.getElementById("r-plov-close");

btnPlovR.addEventListener("click", () => {
    openModal(modalPlovR)
})

modalPlovRClose.addEventListener("click", () => {
    closeModal(modalPlovR)
})

// Popup für Plov Video

const modalPlovV = document.getElementById("popup-v-plov");
const btnPlovV = document.getElementById("btn-v-plov");
const modalPlovVClose = document.getElementById("v-plov-close");

btnPlovV.addEventListener("click", () => {
    openModal(modalPlovV)
})

modalPlovVClose.addEventListener("click", () => {
    closeModal(modalPlovV)
})



// Popup für Eclair Rezept

const modalEclairR = document.getElementById("popup-r-eclair");
const btnEclairR = document.getElementById("btn-r-eclair");
const modalEclairRClose = document.getElementById("r-eclair-close");

btnEclairR.addEventListener("click", () => {
    openModal(modalEclairR)
})

modalEclairRClose.addEventListener("click", () => {
    closeModal(modalEclairR)
})