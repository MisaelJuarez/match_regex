let expresion = document.getElementById('expresion'), resultado;

const comprobar_expresion = (expresion,texto) => {
    try {
        const regex = new RegExp(expresion), regexCoincidencias = new RegExp(expresion,'g'), coincidencias = texto.match(regexCoincidencias);
        return (regex.test(texto)) ? ["success","Texto es válido",coincidencias] : ["error","Texto no es válido"];
    } catch (e) {
        return ["error","Error en la expresión regular"];
    }
}

document.getElementById('texto').addEventListener('input', (e) => {
    resultado = comprobar_expresion(expresion.value,e.target.value);
    if (resultado[0] == "success") {
        document.getElementById('resultado').innerHTML = `<div class="alert alert-success" role="alert">${resultado[1]}. Coincidencias: ${resultado[2].length}. Valores: ${resultado[2].join(', ')} </div>`;
    } else if(resultado[0] == "error") {
        document.getElementById('resultado').innerHTML = `<div class="alert alert-danger" role="alert">${resultado[1]}</div>`;
    }
});