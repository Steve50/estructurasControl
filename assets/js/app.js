const form = document.getElementById('estruc');
var calcU = document.getElementById('calcU');
const formNote = document.getElementById('notes');
function calcuB(){
    if (formNote.style.display === 'none' || formNote.style.display === '') {
        formNote.style.display = 'block'; // Muestra el formulario
    } else {
        formNote.style.display = 'none'; // Oculta el formulario
    }
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    var edad = document.getElementById('edad').value;

    //ejercicio 1
    if (edad < 18) {
        document.getElementById('tuEdad').innerHTML = "Eres menor de edad";
        alert("No puedes continuar con el tramite");
        formNote.style.display = 'none'; 
    } else if (edad >= 60) {
        document.getElementById('tuEdad').innerHTML = "Es jubilado";
        formNote.style.display = 'none'; 
    } else {
        document.getElementById('tuEdad').innerHTML = "Tu edad es de: " + edad;
        calcuB();

        //calificaciones
        formNote.addEventListener('submit', (event) => {
            event.preventDefault();
            var nota = parseInt(document.getElementById('note1').value, 10);
            var resultNote = document.getElementById('resultNote') ;
            switch (nota) {
                case 1:
                    resultNote.innerHTML = "El alumno esta reprobado";
                    break;
                case 5:
                    resultNote.innerHTML = "Repetir examen o entregar trabajos faltantes";
                    break;
                case 7:
                    resultNote.innerHTML = "Paso con la minima";
                    break
                case 10:
                    resultNote.innerHTML = "El alumno paso con nota exelente";
                default:
                    resultNote.innerHTML = "no aplica";
                    break;
            }
        });
    }

    //ejercicio 2
    if (edad < 18) {
        document.getElementById('desc').innerHTML = "";
    } else if (edad >= 18 && edad <=28) {
        document.getElementById('desc').innerHTML = "Tienes un descuento del 25%";
    } else if (edad >= 29 && edad <= 60) {
        document.getElementById('desc').innerHTML = "Tienes un descuento del 30%";
    } else {
        document.getElementById('desc').innerHTML = "Tiene un descuento del 70%";
    }
});