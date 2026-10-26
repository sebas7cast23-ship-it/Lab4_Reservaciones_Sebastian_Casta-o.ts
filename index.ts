
/*
Nombre: Tu Nombre y Apellido
Evaluación práctica: Lab 4 - Reservaciones
*/

// 1. Definir la interfaz
interface Reservacion {
    id: number;
    cliente: string;
    personas: number;
    zona: string;
}

// 2. Crear cuatro reservaciones iniciales
const reservaciones: Reservacion[] = [
    { id: 1, cliente: "Carlos", personas: 6, zona: "Terraza" },
    { id: 2, cliente: "María", personas: 2, zona: "Interior" },
    { id: 3, cliente: "José", personas: 5, zona: "Interior" },
    { id: 4, cliente: "Ana", personas: 4, zona: "Terraza" }
];

console.log("RESERVACIONES INICIALES:");
console.log(reservaciones);

// 3. Función tipada para registrar reservaciones
function registrarReservacion(
    lista: Reservacion[],
    nueva: Reservacion,
    prioritaria: boolean
): void {
    if (prioritaria) {
        lista.unshift(nueva);
    } else {
        lista.push(nueva);
    }

    console.log("Reservación registrada:");
    console.log(nueva);
}

// Registrar una normal al final
registrarReservacion(
    reservaciones,
    { id: 5, cliente: "Pedro", personas: 3, zona: "Interior" },
    false
);

// Registrar una prioritaria al inicio
registrarReservacion(
    reservaciones,
    { id: 6, cliente: "Lucía", personas: 7, zona: "Terraza" },
    true
);

console.log("LISTA ANTES DE ATENDER:");
console.log(reservaciones);

// 4. Atender la primera reservación
const atendida: Reservacion | undefined = reservaciones.shift();

if (atendida !== undefined) {
    console.log("Cliente atendido:", atendida.cliente);
    console.log("Personas:", atendida.personas);
} else {
    console.log("No hay reservaciones pendientes.");
}

// 5. Función tipada para buscar por identificador
function buscarReservacion(
    lista: Reservacion[],
    idBuscado: number
): Reservacion | undefined {
    return lista.find(reservacion => reservacion.id === idBuscado);
}

// Caso donde sí existe
const encontrada = buscarReservacion(reservaciones, 1);

if (encontrada !== undefined) {
    console.log("Reservación encontrada:");
    console.log(encontrada);
} else {
    console.log("No se encontró la reservación.");
}

// Caso donde no existe
const inexistente = buscarReservacion(reservaciones, 99);

if (inexistente !== undefined) {
    console.log("Reservación encontrada:");
    console.log(inexistente);
} else {
    console.log("No existe una reservación con ese ID.");
}

// 6. Filtrar terraza con cinco o más personas
const cantidadAntes: number = reservaciones.length;

const filtradas: Reservacion[] = reservaciones.filter(
    reservacion =>
        reservacion.zona === "Terraza" &&
        reservacion.personas >= 5
);

const cantidadDespues: number = reservaciones.length;

console.log("RESERVACIONES DE TERRAZA CON 5 O MÁS PERSONAS:");

if (filtradas.length > 0) {
    console.log(filtradas);
} else {
    console.log("No hay coincidencias.");
}

// 7. Comprobar el estado final
console.log("RESERVACIONES PENDIENTES:");
console.log(reservaciones);

console.log("Cantidad de reservaciones pendientes:", reservaciones.length);
console.log("Cantidad de coincidencias del filtro:", filtradas.length);

console.log("Cantidad antes del filtro:", cantidadAntes);
console.log("Cantidad después del filtro:", cantidadDespues);

console.log(
    "¿El filtro conservó el arreglo original?",
    cantidadAntes === cantidadDespues
);

// 8. Probar la función con un arreglo vacío
const listaVacia: Reservacion[] = [];

const busquedaVacia = buscarReservacion(listaVacia, 1);

if (busquedaVacia !== undefined) {
    console.log(busquedaVacia);
} else {
    console.log("La lista vacía no contiene reservaciones.");
}