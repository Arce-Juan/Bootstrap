function InicializarComponentes() {
    GenericJS_CargarModalAFormulario("Modal_BuscarAgenteGD");
    GenericJS_CargarModalAFormulario("Modal_Alerta");
    GenericJS_CargarModalAFormulario("Modal_Confirmacion");
}

function lanzarModalAgente() {
    $("#idGenericModal_BuscarAgente").modal();
}

function genericModal_BuscarAgenteGD_RecuperarAgente(objAgente) {
    console.log(objAgente);
    var texto = objAgente.dni + " - " + objAgente.nombre
    $("#idImputAgente").val(texto);
}

function lanzarModalAlerta() {
    $("#idGenericModal_Alerta_Label_Title").html($("#idImputTituloAlerta").val());
    $("#Modal_Alerta_divContenido").html($("#idImputMensajeAlerta").val());
    $("#idGenericModal_Alerta").modal();
}

function lanzarModalConfirmacion() {
    $("#Modal_Confirmacion_Label_Title").html($("#idImputTituloConfirmacion").val());
    $("#Modal_Confirmacion_divContenido").html($("#idImputMensajeConfirmacion").val());
    $("#idGenericModal_Confirmacion").modal();
}

function genericModal_Confirmacion_Condicion(condicion) {
    $("#idImputValorConfirmacion").val(condicion);
}

