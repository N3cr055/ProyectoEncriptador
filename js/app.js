function procesarTexto(accion) {
    let texto = document.getElementById('txtarea-userui').value;
    console.log("El texto fue:");
    console.log(texto);
    let resultado = validarTexto(texto);
    
    if (resultado !== "valido.") {
        document.getElementById("encdecode").innerText = resultado;
    } else {
        let diccionario = {
            "encriptar": {
                "e": "enter",
                "i": "imes",
                "a": "ai",
                "o": "ober",
                "u": "ufat"
            },
            "desencriptar": {
                "enter": "e",
                "imes": "i",
                "ai": "a",
                "ober": "o",
                "ufat": "u"
            }
        };
        
        let diccionarioSeleccionado = diccionario[accion];
        
        for (let caracter in diccionarioSeleccionado) {
            let regex = new RegExp(caracter, 'g');
            texto = texto.replace(regex, diccionarioSeleccionado[caracter]);
        }
        
        document.getElementById("encdecode").innerText = texto;

        // Ocultar elementos
        document.querySelector('.img-muneco').style.display = 'none';
        document.querySelector('.parrafo-titulo').style.display = 'none';
        document.querySelector('.parrafo-texto').style.display = 'none';

        // Mostrar botón "Copiar"
        document.getElementById('btn_copiar').style.display = 'block';
    }
}

function copiarTexto() {
    let texto = document.getElementById('encdecode').innerText;
    navigator.clipboard.writeText(texto)
        .then(() => {
            console.log('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}

function validarTexto(texto) {
    var regex = /^[a-z ]+$/;
    if (texto.trim() === "") {
        console.log("El texto está vacío");
        return "Por favor introduce el mensaje a encriptar";
    }
    
    if (!regex.test(texto)) {
        console.log("El texto debe contener solo letras minúsculas sin acentos ni caracteres especiales.");
        return "El texto debe contener solo letras minúsculas sin acentos ni caracteres especiales.";
    }
    
    console.log("Texto en formato correcto");    
    return "valido.";
}
