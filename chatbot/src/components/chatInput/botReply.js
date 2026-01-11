export function getBotReply(text) {
  const lower = text.toLowerCase();

  // Saludos
  if (lower.includes("hola")) return "¡Hola! 😄";
  if (lower.includes("buenas")) return "¡Buenas! ¿Cómo andás?";
  if (lower.includes("hey")) return "Hey! 👋";
  if (lower.includes("que tal")) return "Todo bien, ¿vos?";
  if (lower.includes("como estas")) return "Estoy bien, gracias por preguntar 😊";
  if (lower.includes("todo bien")) return "¡Me alegro! 😄";

  // Despedidas
  if (lower.includes("chau")) return "¡Chau! Que tengas un lindo día 👋";
  if (lower.includes("adios")) return "¡Hasta luego!";
  if (lower.includes("nos vemos")) return "¡Nos vemos pronto!";
  if (lower.includes("bye")) return "Bye bye 👋";
  if (lower.includes("me voy")) return "Ok, hablame cuando quieras 😎";

  // Preguntas sobre el bot
  if (lower.includes("quien sos")) return "Soy un bot 🤖, pero con buena onda.";
  if (lower.includes("que sos")) return "Un chatbot simple, pero simpático 😌";
  if (lower.includes("sos real")) return "Tan real como el código que me creó 😉";
  if (lower.includes("tenes nombre")) return "Todavía no, ¿querés ponerme uno?";
  if (lower.includes("sos humano")) return "No, pero hago mi mejor esfuerzo 😅";

  // Agradecimientos
  if (lower.includes("gracias")) return "¡De nada! 😄";
  if (lower.includes("muchas gracias")) return "¡Para eso estoy!";
  if (lower.includes("te agradezco")) return "¡No hay problema!";

  // Insultos / bromas
  if (lower.includes("tonto")) return "Ey 😢 yo intento dar lo mejor";
  if (lower.includes("boludo")) return "Che, respeto 😅";
  if (lower.includes("idiota")) return "Bueno, bueno, sin bardear 😬";
  if (lower.includes("sos malo")) return "Bueno… puedo mejorar 😔";
  if (lower.includes("te odio")) return "Eso duele un poquito 💔";

  // Preguntas comunes
  if (lower.includes("como te llamas")) return "Todavía no tengo nombre 😔";
  if (lower.includes("que haces")) return "Estoy charlando con vos 😄";
  if (lower.includes("donde estas")) return "Vivo dentro de tu computadora 🖥️";
  if (lower.includes("que hora es")) return `Son las ${new Date().toLocaleTimeString()}`;
  if (lower.includes("que dia es")) return `Hoy es ${new Date().toLocaleDateString()}`;
  if (lower.includes("fecha")) return `La fecha de hoy es ${new Date().toLocaleDateString()}`;

  // Gustos
  if (lower.includes("te gusta")) return "Depende… ¿qué cosa?";
  if (lower.includes("musica")) return "Me gusta de todo, menos el silencio 😎";
  if (lower.includes("comida")) return "No como, pero la pizza huele increíble 🍕";
  if (lower.includes("pelicula")) return "Me gustan las de ciencia ficción 🤖";

  // Estados de ánimo
  if (lower.includes("estoy triste")) return "Lo siento 😢, querés contarme qué pasó?";
  if (lower.includes("estoy feliz")) return "¡Esooo! 😄 Me alegro mucho";
  if (lower.includes("estoy aburrido")) return "Podemos charlar para matar el aburrimiento 😏";
  if (lower.includes("estoy cansado")) return "Descansar nunca está de más 😴";
  if (lower.includes("estoy mal")) return "Uh, ¿querés hablar de eso?";

  // Clima (fake)
  if (lower.includes("clima")) return "No tengo sensores, pero seguro está lindo 😎";
  if (lower.includes("llueve")) return "Si llueve, ideal para una peli 🎬";
  if (lower.includes("hace calor")) return "Hidratate 💧";
  if (lower.includes("hace frio")) return "Abrigate 🧣";

  // Existenciales
  if (lower.includes("sentido de la vida")) return "42 😌";
  if (lower.includes("estas vivo")) return "Vivo en espíritu… y en código";
  if (lower.includes("moris")) return "Solo si borran el archivo 😬";

  // Default
  return "Hmm… interesante 🤔 Contame más.";
}


/******************************
 * CLASE 1 — JS esencial para React
 * De let/const a inmutabilidad
 ******************************/

/* ============================
   1) Variables: let vs const
============================ */
console.log("=== 1) let vs const ===")

let edad = 21
edad = 22 // OK: let permite reasignar
console.log("edad:", edad)

const nombre = "Santi"
// nombre = "Juan" // ERROR: const NO permite reasignar
console.log("nombre:", nombre)

// OJO: const NO significa inmutable (solo no reasignás la referencia)
const personaConst = { name: "Emi" }
personaConst.name = "Emilonguis" // se puede mutar el objeto
console.log("personaConst:", personaConst)

/* ============================
   2) Tipos primitivos (y typeof)
============================ */
console.log("\n=== 2) Tipos primitivos ===")

const n = 10
const s = "hola"
const b = true
const nada = null
let indef

console.log(typeof n, n)       // number
console.log(typeof s, s)       // string
console.log(typeof b, b)       // boolean
console.log(typeof nada, nada) // "object" (quirk de JS)
console.log(typeof indef)      // undefined

// Comparaciones: === vs ==
console.log("\n--- igualdad ---")
console.log(1 == "1")  // true (coerción)
console.log(1 === "1") // false (sin coerción) => USAR ===

/* ============================
   3) Ifs + truthy/falsy
============================ */
console.log("\n=== 3) Ifs + truthy/falsy ===")

const puntos = 75

if (puntos >= 90) {
  console.log("A")
} else if (puntos >= 70) {
  console.log("B")
} else {
  console.log("C")
}

// falsy: false, 0, "", null, undefined, NaN
const input = ""
if (!input) console.log("input vacío (falsy)")

// operador ternario (muy usado en React)
const estado = puntos >= 70 ? "aprobado" : "desaprobado"
console.log("estado:", estado)

/* ============================
   4) Loops (for, while, for..of)
============================ */
console.log("\n=== 4) Loops ===")

const nums = [1, 2, 3, 4]

// for clásico
let suma = 0
for (let i = 0; i < nums.length; i++) {
  suma += nums[i]
}
console.log("suma (for):", suma)

// while (menos común en React, pero existe)
let i = 0
while (i < 3) {
  console.log("while i =", i)
  i++
}

// for..of (más “JS moderno”)
let prod = 1
for (const x of nums) {
  prod *= x
}
console.log("prod (for..of):", prod)

/* ============================
   5) Funciones (declaración vs expresión vs arrow)
============================ */
console.log("\n=== 5) Funciones ===")

// Declaración (hoisting)
function add(a, b) {
  return a + b
}
console.log("add:", add(2, 3))

// Expresión
const mul = function (a, b) {
  return a * b
}
console.log("mul:", mul(2, 3))

// Arrow (la que más vas a usar con arrays y React)
const sub = (a, b) => a - b
console.log("sub:", sub(10, 4))

// Arrow con cuerpo => return implícito
const square = (x) => x * x
console.log("square:", square(5))

/* ============================
   6) Funciones como valores + callbacks
============================ */
console.log("\n=== 6) Funciones como valores (callbacks) ===")

const greet = (name) => `Hola, ${name}!` //string dinamico con backtickds
const run = (fn, value) => fn(value)
const doble = (num) => num*2
console.log(run(greet, "Carla"))
console.log(run(doble, 7))

// Callback típico (base de map/filter)
const aplicar = (arr, fn) => {
  const out = []
  for (const el of arr) out.push(fn(el))
  return out
}
console.log(aplicar([1, 2, 3], (x) => x + 10))

/* ============================
   7) Objetos y Arrays
============================ */
console.log("\n=== 7) Objetos y Arrays ===")

const user = {
  id: 1,
  name: "Guada",
  age: 20,
  isAdmin: false,
}

console.log("user.name:", user.name)
console.log("user['age']:", user["age"])

const users = [
  { id: 1, name: "Guadita", age: 20, active: true },
  { id: 2, name: "Emilongui", age: 20, active: false },
  { id: 3, name: "Carlonga", age: 22, active: true },
]

console.log("users length:", users.length)

/* ============================
   8) Métodos de arrays (forEach, map, filter, find, some)
============================ */
console.log("\n=== 8) Métodos de arrays ===")

// forEach: recorre (no devuelve nuevo array)
users.forEach((u) => {
  // side effects: loguear, sumar, etc.
  console.log("forEach:", u.name)
})

// map: transforma -> NUEVO array
const names = users.map((u) => u.name)
console.log("names:", names)

// filter: filtra -> NUEVO array
const actives = users.filter((u) => u.active)
console.log("actives:", actives)

// find: devuelve el primero que cumple (o undefined)
const guada = users.find((u) => u.name === "Guadita")
console.log("find guada:", guada)

// some: existe alguno que cumpla?
const hayMenor = users.some((u) => u.age < 21)
console.log("some age < 21:", hayMenor)

// (Opcional) every: todos cumplen?
const todosActivos = users.every((u) => u.active)
console.log("every active:", todosActivos)

/* ============================
   9) Destructuring (clave en React)
============================ */
console.log("\n=== 9) Destructuring ===")

const { name, age } = user
console.log("name:", name, "age:", age)

const [primero, segundo] = nums
console.log("primero:", primero, "segundo:", segundo)

// Renombrar y default
const { isAdmin: admin = false } = user
console.log("admin:", admin)

// Destructuring en parámetros (muy React)
const printUser = ({ id, name }) => console.log(`User(${id}): ${name}`)
printUser(user)
users.forEach((user) => printUser(user))

/* ============================
   10) Spread / Rest (clave para inmutabilidad)
============================ */
console.log("\n=== 10) Spread / Rest ===")

const a1 = [1, 2, 3]
const a2 = [...a1, 4] // copia + agrega
console.log("a1:", a1, "a2:", a2)

const u1 = { name: "Guada", age: 20 }
const u2 = { ...u1, age: 24 } // copia + override
console.log("u1:", u1, "u2:", u2)

// Rest: “el resto”
const sumAll = (...xs) => xs.reduce((acc, x) => acc + x, 0)
console.log("sumAll:", sumAll(1, 2, 3, 4))

/* ============================
   11) Inmutabilidad (lo más importante para React)
============================ */
console.log("\n=== 11) Inmutabilidad ===")

// Ejemplo 1: actualizar un objeto sin mutarlo
const stateUser = { id: 1, name: "Guada", age: 20 }
const nextUser = { ...stateUser, age: stateUser.age + 1 }

console.log("stateUser:", stateUser)
console.log("nextUser :", nextUser)
console.log("misma ref?", stateUser === nextUser) // false

// Ejemplo 2: actualizar un array sin mutarlo
const stateUsers = [
  { id: 1, name: "Carla", age: 22 },
  { id: 2, name: "Emi", age: 20 },
]

// (A) agregar
const added = [...stateUsers, { id: 3, name: "Guadinguis", age: 20 }]
console.log("added:", added)

// (B) eliminar por id
const removed = stateUsers.filter((u) => u.id !== 2)
console.log("removed:", removed)

// (C) actualizar un elemento (patrón típico React)
const updated = stateUsers.map((u) =>
  u.id === 2 ? { ...u, age: u.age + 1 } : u
)
console.log("updated:", updated)

// Ejemplo 3: mutación vs inmutabilidad (por qué importa)
console.log("\n--- mutación vs inmutabilidad ---")

const arrState = [1, 2, 3]
const arrSame = arrState
arrSame.push(4) // muta el mismo array
console.log("arrState (mutado):", arrState)

// Mejor:
const arrState2 = [1, 2, 3]
const arrNext2 = [...arrState2, 4] // nuevo array
console.log("arrState2:", arrState2)
console.log("arrNext2 :", arrNext2)

// React mental model (simulación)
console.log("\n--- mini simulación React ---")
const shouldRender = (prev, next) => prev !== next

const prevState = { count: 0 }
const nextStateBad = prevState
nextStateBad.count++ // mutación: misma referencia
console.log("render con mutación?", shouldRender(prevState, nextStateBad)) // false (malo)

const nextStateGood = { ...prevState, count: prevState.count + 1 }
console.log("render inmutable?", shouldRender(prevState, nextStateGood)) // true (bien)
