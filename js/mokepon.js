const sectionRestart = document.getElementById("restart")
const buttonPet = document.getElementById("btn-pet")
const sectionAttackSelection = document.getElementById("attack-selection")
const btnRestart = document.getElementById("btn-restart")
const sectionPetSelection = document.getElementById("pet-selection")
const spanPetPlayer = document.getElementById("pet-player")
const spanPetEnemy = document.getElementById("pet-enemy")

const spanPlayerLife = document.getElementById("player-life")
const spanEnemyLife = document.getElementById("enemy-life")

const sectionMensajes = document.getElementById("resultado")
const sectionAtaquesJugador = document.getElementById("ataques-jugador")
const sectionAtaquesEnemigo = document.getElementById("ataques-enemigo")
const cardContainer = document.getElementById("cardContainer")
const attackContainer = document.getElementById("attackContainer")

const sectionMap = document.getElementById("map-selection")
const map = document.getElementById("map")



let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let mokeponOptions
let inputHipodoge
let inputCapipepo
let inputRatigueya
let inputLangostelvis
let inputTucapalma
let inputPydos
let playerPet
let playerPetObject
let mokeponAttacks
let enemyMokeponAttacks
let btnFire
let btnWater
let btnEarth
let btns = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let playerVictory = 0
let enemyVictory = 0
let lifePlayer = 3
let lifeEnemy = 3
let lienzo = map.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "./images/mokemap.png"


class Mokepon {
    constructor(nombre, foto, vida,fotoMapa, x = 10, y = 10) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x = x
        this.y = y
        this.ancho = 120
        this.alto = 65
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
    )
    }
}
// Instancias de Mokepones
let hipodoge = new Mokepon("Hipodoge", "./images/hipodoge.png", 5, "./images/hipodoge.png")
let capipepo = new Mokepon("Capipepo", "./images/capipepo.png", 5, "./images/capipepo.png")
let ratigueya = new Mokepon("Ratigueya", "./images/ratigueya.png", 5, "./images/ratigueya.png")
let langostelvis = new Mokepon("Langostelvis", "./images/langostelvis.png", 5, "./images/langostelvis.png")
let tucapalma = new Mokepon("Tucapalma", "./images/tucapalma.png", 5, "./images/tucapalma.png")
let pydos = new Mokepon("Pydos", "./images/pydos.png", 5, "./images/pydos.png")
// Instancias de Mokepones enemigos
let hipodogeEnemy = new Mokepon("Hipodoge", "./images/hipodoge.png", 5, "./images/hipodoge.png", 400, 40)
let capipepoEnemy = new Mokepon("Capipepo", "./images/capipepo.png", 5, "./images/capipepo.png", 100, 250)
let ratigueyaEnemy = new Mokepon("Ratigueya", "./images/ratigueya.png", 5, "./images/ratigueya.png", 550, 250)
let langostelvisEnemy = new Mokepon("Langostelvis", "./images/langostelvis.png", 5, "./images/langostelvis.png", 320, 420)
let tucapalmaEnemy = new Mokepon("Tucapalma", "./images/tucapalma.png", 5, "./images/tucapalma.png", 60, 470)
let pydosEnemy = new Mokepon("Pydos", "./images/pydos.png", 5, "./images/pydos.png", 590, 460)

hipodoge.ataques.push(
    { nombre: "💧", id: "btn-water" },
    { nombre: "💧", id: "btn-water" },
    { nombre: "💧", id: "btn-water" },
    { nombre: "🔥", id: "btn-fire" },
    { nombre: "🌱", id: "btn-earth" }
)
hipodogeEnemy.ataques.push(
    { nombre: "💧", id: "btn-water" },
    { nombre: "💧", id: "btn-water" },
    { nombre: "💧", id: "btn-water" },
    { nombre: "🔥", id: "btn-fire" },
    { nombre: "🌱", id: "btn-earth" }
)
capipepo.ataques.push(
    { nombre: "🌱", id: "btn-earth" },
    { nombre: "🌱", id: "btn-earth" },
    { nombre: "🌱", id: "btn-earth" },
    { nombre: "💧", id: "btn-water" },
    { nombre: "🔥", id: "btn-fire" }
)
capipepoEnemy.ataques.push(
    { nombre: "🌱", id: "btn-earth" },
    { nombre: "🌱", id: "btn-earth" },
    { nombre: "🌱", id: "btn-earth" },
    { nombre: "💧", id: "btn-water" },
    { nombre: "🔥", id: "btn-fire" }
)
ratigueya.ataques.push(
    { nombre: "🔥", id: "btn-fire" },
    { nombre: "🔥", id: "btn-fire" },
    { nombre: "🔥", id: "btn-fire" },
    { nombre: "💧", id: "btn-water" },
    { nombre: "🌱", id: "btn-earth" }
)
ratigueyaEnemy.ataques.push(
    { nombre: "🔥", id: "btn-fire" },
    { nombre: "🔥", id: "btn-fire" },
    { nombre: "🔥", id: "btn-fire" },
    { nombre: "💧", id: "btn-water" },
    { nombre: "🌱", id: "btn-earth" }
)
langostelvis.ataques.push(
    { nombre: "💧", id: "btn-water" },
    { nombre: "🔥", id: "btn-fire" },
    { nombre: "💧", id: "btn-water" },
    { nombre: "🔥", id: "btn-fire" },
    { nombre: "🌱", id: "btn-earth" },
)
langostelvisEnemy.ataques.push(
    { nombre: "💧", id: "btn-water" },
    { nombre: "🔥", id: "btn-fire" },
    { nombre: "💧", id: "btn-water" },
    { nombre: "🔥", id: "btn-fire" },
    { nombre: "🌱", id: "btn-earth" },
)
tucapalma.ataques.push(
    { nombre: "🌱", id: "btn-earth" },
    { nombre: "💧", id: "btn-water" },
    { nombre: "🌱", id: "btn-earth" },
    { nombre: "💧", id: "btn-water" },
    { nombre: "🔥", id: "btn-fire" }
)
tucapalmaEnemy.ataques.push(
    { nombre: "🌱", id: "btn-earth" },
    { nombre: "💧", id: "btn-water" },
    { nombre: "🌱", id: "btn-earth" },
    { nombre: "💧", id: "btn-water" },
    { nombre: "🔥", id: "btn-fire" }
)
pydos.ataques.push(
    { nombre: "🔥", id: "btn-fire" },
    { nombre: "🌱", id: "btn-earth" },
    { nombre: "🔥", id: "btn-fire" },
    { nombre: "🌱", id: "btn-earth" },
    { nombre: "💧", id: "btn-water" }
)
pydosEnemy.ataques.push(
    { nombre: "🔥", id: "btn-fire" },
    { nombre: "🌱", id: "btn-earth" },
    { nombre: "🔥", id: "btn-fire" },
    { nombre: "🌱", id: "btn-earth" },
    { nombre: "💧", id: "btn-water" }
)
mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma, pydos)

function iniciarJuego() {
    sectionAttackSelection.style.display = "none"
    sectionMap.style.display = "none"

    mokepones.forEach((mokepon) => {
        mokeponOptions = `
        <input type="radio" name="mokepon" id="${mokepon.nombre}"/>
        <label class="mokepon-card" for="${mokepon.nombre}">
            <img src="${mokepon.foto}" alt="${mokepon.nombre}"/>
            ${mokepon.nombre}
        </label>
        `
        cardContainer.innerHTML += mokeponOptions
        inputHipodoge = document.getElementById("Hipodoge")
        inputCapipepo = document.getElementById("Capipepo")
        inputRatigueya = document.getElementById("Ratigueya")
        inputLangostelvis = document.getElementById("Langostelvis")
        inputTucapalma = document.getElementById("Tucapalma")
        inputPydos = document.getElementById("Pydos")
    })
    sectionRestart.style.display = "none"
    buttonPet.addEventListener("click", seleccionarMascotaJugador)
    btnRestart.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador() {
    sectionMap.style.display = "flex"
    sectionPetSelection.style.display = "none"
    if (inputHipodoge.checked == true) {
        spanPetPlayer.innerHTML = inputHipodoge.id
        playerPet = inputHipodoge.id
    }   else if (inputCapipepo.checked == true) {
        spanPetPlayer.innerHTML = inputCapipepo.id
        playerPet = inputCapipepo.id
    }   else if (inputRatigueya.checked == true) {
        spanPetPlayer.innerHTML = inputRatigueya.id
        playerPet = inputRatigueya.id
    }   else if (inputLangostelvis.checked == true) {
        spanPetPlayer.innerHTML = inputLangostelvis.id
        playerPet = inputLangostelvis.id
    }   else if (inputTucapalma.checked == true) {
        spanPetPlayer.innerHTML = inputTucapalma.id
        playerPet = inputTucapalma.id
    }   else if (inputPydos.checked == true) {
        spanPetPlayer.innerHTML = inputPydos.id
        playerPet = inputPydos.id
    }   else {
        alert("Selecciona una mascota")
    }
    iniciarMapa()
    extraerAtaques(playerPet)
    
}

function extraerAtaques(playerPet) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (playerPet === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        mokeponAttacks = `
        <button class="BAtaque" id="${ataque.id}">${ataque.nombre}</button>
        `
        attackContainer.innerHTML += mokeponAttacks
    })
    btnFire = document.getElementById("btn-fire")
    btnWater = document.getElementById("btn-water")
    btnEarth = document.getElementById("btn-earth")
    btns = document.querySelectorAll(".BAtaque")
}

function attackSequency() {
    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            if (e.target.textContent === "🔥") {
                ataqueJugador.push("FUEGO")
                console.log(ataqueJugador)
                btn.style.background = "rgb(194, 210, 212)"
                btn.disabled = true
            } else if (e.target.textContent === "💧") {
                ataqueJugador.push("AGUA")
                console.log(ataqueJugador)
                btn.style.background = "rgb(194, 210, 212)"
                btn.disabled = true
            } else if (e.target.textContent === "🌱") {
                ataqueJugador.push("TIERRA")
                console.log(ataqueJugador)
                btn.style.background = "rgb(194, 210, 212)"
                btn.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
    
}

function seleccionarMascotaEnemigo() {
    let petRandom = aleatorio(0, mokepones.length - 1)
    spanPetEnemy.innerHTML = mokepones[petRandom].nombre
    enemyMokeponAttacks = mokepones[petRandom].ataques
    attackSequency()
}

function ataqueAleatorioEnemigo() {
    console.log("Ataques del enemigo:")
    let ataqueAleatorio = aleatorio(0, enemyMokeponAttacks.length - 1)
    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push("FUEGO")
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push("AGUA")
    } else if (ataqueAleatorio == 5) {
        ataqueEnemigo.push("TIERRA")
    }
    startFight()
}

function startFight() {
    if (ataqueJugador.length === 5) {
        fight()
    }
}

function indexBothOpponents(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function fight() {
    for (let i = 0; i < ataqueJugador.length; i++) {
        if(ataqueJugador[i] === ataqueEnemigo[i]) {
            indexBothOpponents(i, i)
            crearMensaje("¡Empate!⚔️")
        } else if (ataqueJugador[i] === "FUEGO" && ataqueEnemigo[i] === "TIERRA" || ataqueJugador[i] === "AGUA" && ataqueEnemigo[i] === "FUEGO" || ataqueJugador[i] === "TIERRA" && ataqueEnemigo[i] === "AGUA") {
            indexBothOpponents(i, i)
            crearMensaje("¡Ganaste!🥳")
            playerVictory++
            spanPlayerLife.innerHTML = playerVictory
        } else {
            indexBothOpponents(i, i)
            crearMensaje("¡Perdiste!😭")
            enemyVictory++
            spanEnemyLife.innerHTML = enemyVictory
        }
    }

    checkVictories()
}

function checkVictories() {
    if (playerVictory === enemyVictory) {
        crearMensajeFinal("Esto fue un empate, ¡intenta de nuevo!")
    }   else if (playerVictory > enemyVictory) {
        crearMensajeFinal("¡Felicitaciones! Ganaste el combate 🏆")
    }   else {
        crearMensajeFinal("¡Lo siento! Perdiste el combate 😢")
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueJugador = document.createElement("p")
    let nuevoAtaqueEnemigo = document.createElement("p")
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo
    sectionAtaquesJugador.appendChild(nuevoAtaqueJugador)
    sectionAtaquesEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    let parrafo = document.createElement("p")
    sectionMensajes.innerHTML = resultadoFinal
    sectionRestart.style.display = "block"
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
        }
function pintarMapa() {  
    playerPetObject.x = playerPetObject.x + playerPetObject.velocidadX
    playerPetObject.y = playerPetObject.y + playerPetObject.velocidadY
    lienzo.clearRect(0, 0, map.width, map.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        map.width,
        map.height
    )
    playerPetObject.pintarMokepon()
    hipodogeEnemy.pintarMokepon()
    capipepoEnemy.pintarMokepon()
    ratigueyaEnemy.pintarMokepon()
    langostelvisEnemy.pintarMokepon()
    tucapalmaEnemy.pintarMokepon()
    pydosEnemy.pintarMokepon()
    if (playerPetObject.velocidadX !== 0 || playerPetObject.velocidadY !== 0) {
        revisarColision(hipodogeEnemy)
        revisarColision(capipepoEnemy)
        revisarColision(ratigueyaEnemy)
        revisarColision(langostelvisEnemy)
        revisarColision(tucapalmaEnemy)
        revisarColision(pydosEnemy)
    }

}

function moverDerecha() {
    playerPetObject.velocidadX = 5
}
function moverIzquierda() {
    playerPetObject.velocidadX = -5
}
function moverAbajo() {
    playerPetObject.velocidadY = 5
}
function moverArriba() {
    playerPetObject.velocidadY = -5
}

function detenerMovimiento() {
    playerPetObject.velocidadX = 0
    playerPetObject.velocidadY = 0
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case "a":
        case "ArrowLeft":
            moverIzquierda()
            break
        case "d":
        case "ArrowRight":
            moverDerecha()
            break
        case "w":
        case "ArrowUp":
            moverArriba()
            break
        case "s":
        case "ArrowDown":
            moverAbajo()
            break
        default:
            break
    }
}

function iniciarMapa() {
    map.width = 800
    map.height = 600
    playerPetObject = obtenerObjetoMascota(playerPet)
    intervalo = setInterval(pintarMapa, 50)
    window.addEventListener("keydown", sePresionoUnaTecla)
    window.addEventListener("keyup", detenerMovimiento)
    console.log(playerPetObject)
}

function obtenerObjetoMascota(playerPet) {
    for (let i = 0; i < mokepones.length; i++) {
        if (playerPet === mokepones[i].nombre) {
            return mokepones[i]
        }
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = playerPetObject.y
    const abajoMascota = playerPetObject.y + playerPetObject.alto
    const derechaMascota = playerPetObject.x + playerPetObject.ancho
    const izquierdaMascota = playerPetObject.x

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)
    sectionAttackSelection.style.display = "flex"
    sectionMap.style.display = "none"
    seleccionarMascotaEnemigo(enemigo)
}

window.addEventListener("load", iniciarJuego)