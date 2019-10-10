
function GenericJS_IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function GenericJS_BloquearBody(condicion) {
    if (document.getElementById("divContenedor")) {
        var divCont = $("#divContenedor");
        if (condicion == true) {
            divCont.html('<div aling="center" id="_evidon-background" style="background: rgb(151, 151, 151); opacity: 0.5; position: fixed; top: 0px; left: 0px; bottom: 0px; width: 100%;height:100%; "><img id="miCarga" style="position: fixed;top: 50%;left: 50%;margin-top: -50px;margin-left: -50px;" class="imgr" src="/pregase/images/favicon.ico"></div>');
        }
        else {
            divCont.html("");
        }
    }
    else {
        alert("El elemento divContenedor no existe..Debe agregarlo para bloquear la pantalla.");
    }
}

function GenericJS_ObtenerColeccion(op, controlador, element, itemSelected) {
    controlarSessionDeUsuario();
    var req = new XMLHttpRequest();
    req.open("GET", controlador + "?op=" + op, true);
    req.onload = function () {
        if (req.status == 200) {
            //console.log(req.response);
            if (GenericJS_IsJsonString(req.response)) {
                data = JSON.parse(req.response);
                var elem = $("#" + element);
                elem.empty(); // Limpiamos el contenedor
                var s = "<option value=''>-elija-</option>";
                $.each(data.Coleccion, function (i, item) {
                    s += "<option value='" + item.id + "'>" + item.descripcion + "</option>";
                });
                elem.html(s);
                if (itemSelected != '' && itemSelected != null) {
                    elem.val(itemSelected);
                }
            }
            else {
                alert("El Json no es valido.-");
            }
        }
        else {
            alert("ocurrio un error: No se encontró la pagina solicitada. 'lua_AltaDeAlumnosOmitidosOnline_Controlador' -");
        }
    }
    req.send();
}

function GenericJS_GetParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/*agregado el 17-09-19*/
function GenericJS_CargarModalAFormulario(modal) {
    var req = new XMLHttpRequest();
    req.open("GET", "Modales/" + modal + ".html", true);
    req.onload = function () {
        if (req.status == 200) {
            $("#divMisModales").html($("#divMisModales").html() + req.response);
        }
        else {
            alert("ocurrio un error: No se encontro la pagina solicitada '" + modal + "'.-");
        }
    }
    req.send();
}
