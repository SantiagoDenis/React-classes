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