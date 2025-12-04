function openModal(modal) {
    modal.style.display = "block";
}

function closeModal(modal) {
    modal.style.display = "none";
}

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

// Popup für Eclair Video

const modalEclairV = document.getElementById("popup-v-eclair");
const btnEclairV = document.getElementById("btn-v-eclair");
const modalEclairVClose = document.getElementById("v-eclair-close");

btnEclairV.addEventListener("click", () => {
    openModal(modalEclairV)
})

modalEclairVClose.addEventListener("click", () => {
    closeModal(modalEclairV)
})


// Popup für General Rezept

const modalGeneralR = document.getElementById("popup-r-general");
const btnGeneralR = document.getElementById("btn-r-general");
const modalGeneralRClose = document.getElementById("r-general-close");

btnGeneralR.addEventListener("click", () => {
    openModal(modalGeneralR)
})

modalGeneralRClose.addEventListener("click", () => {
    closeModal(modalGeneralR)
})

// Popup für General Video

const modalGeneralV = document.getElementById("popup-v-general");
const btnGeneralV = document.getElementById("btn-v-general");
const modalGeneralVClose = document.getElementById("v-general-close");

btnGeneralV.addEventListener("click", () => {
    openModal(modalGeneralV)
})

modalGeneralVClose.addEventListener("click", () => {
    closeModal(modalGeneralV)
})



// Popup für Medovik Rezept

const modalMedovikR = document.getElementById("popup-r-medovik");
const btnMedovikR = document.getElementById("btn-r-medovik");
const modalMedovikRClose = document.getElementById("r-medovik-close");

btnMedovikR.addEventListener("click", () => {
    openModal(modalMedovikR)
})

modalMedovikRClose.addEventListener("click", () => {
    closeModal(modalMedovikR)
})

// Popup für General Video

const modalMedovikV = document.getElementById("popup-v-medovik");
const btnMedovikV = document.getElementById("btn-v-medovik");
const modalMedovikVClose = document.getElementById("v-medovik-close");

btnMedovikV.addEventListener("click", () => {
    openModal(modalMedovikV)
})

modalMedovikVClose.addEventListener("click", () => {
    closeModal(modalMedovikV)
})




// Popup für Nopaleon Rezept

const modalNopaleonR = document.getElementById("popup-r-nopaleon");
const btnNopaleonR = document.getElementById("btn-r-nopaleon");
const modalNopaleonRClose = document.getElementById("r-nopaleon-close");

btnNopaleonR.addEventListener("click", () => {
    openModal(modalNopaleonR)
})

modalNopaleonRClose.addEventListener("click", () => {
    closeModal(modalNopaleonR)
})

// Popup für General Video

const modalNopaleonV = document.getElementById("popup-v-nopaleon");
const btnNopaleonV = document.getElementById("btn-v-nopaleon");
const modalNopaleonVClose = document.getElementById("v-nopaleon-close");

btnNopaleonV.addEventListener("click", () => {
    openModal(modalNopaleonV)
})

modalNopaleonVClose.addEventListener("click", () => {
    closeModal(modalNopaleonV)
})