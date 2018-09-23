var contador = 0;

function guardar() {
    let nombre = document.getElementById("txt_nombre");
    let tabla = document.getElementById("tbl_registro");

    tabla.innerHTML += "<tr id='tr_nombre" + contador + "'><td>" + nombre.value + "</td><td><button type='button' onclick='eliminar (" + contador + ")'>Eliminar</button></td></tr>";
    contador++;
}

function eliminar(hola) {
    let tr = document.getElementById("tr_nombre" + hola);
    tr.remove();

}