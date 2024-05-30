var calificacion;
var asistencias;
var porcentajeAsistencias;

calificacion = parseInt(prompt("Ingrese la nota del alumno"));
asistencias = parseInt(prompt("Ingrese la cantidad total de asistencias del alumno"));


porcentajeAsistencias = (calificacion / asistencias) * 100;

if (calificacion >= 80 && porcentajeAsistencias >= 80) {

    alert("El alumno aprobó.");
} else {
    
    alert("El alumno no aprobó.");
}
