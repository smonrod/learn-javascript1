const temperatura = 76

function transFormarACelsius(fahrenheit){
    return (fahrenheit-32) * (5/9);
}

const respuesta = transFormarACelsius(temperatura)

console.log(`La temperatura en grados Celsius es de`, parseInt(respuesta));