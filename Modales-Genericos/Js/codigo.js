function InicializarComponentes() {
    var req = new XMLHttpRequest();
    req.open("GET", "Modales/modal_BuscarAgenteGD.asp", true);
    req.onload = function () {

        console.log(req.response);

        if (req.status == 200) {
            $("#divMisModales").html($("#divMisModales").html() + req.response);
        }
        else {
            alert("ocurrio un error: No se encontro la pagina solicitada 'xcbo_PeriodosAsignadosAEstablecimientoPorCiclo'.-");
        }
    }
    req.send();
}

function lanzarModalAgente() {
    $("#idGenericModal_BuscarAgente").modal();
}

function genericModal_BuscarAgenteGD_RecuperarAgente(objAgente) {
    console.log(objAgente);
}

