function cambiarCuerpoPaginaDiv(modulo) {
    //$('#idIframeCuerpo').attr('src','modulos/Principal.html');

    var req = new XMLHttpRequest();
    req.open("GET", "modulos/" + modulo + ".html", true);
    req.onload = function () {
        if (req.status == 200) {
            //console.log(req.response);
            $("#idCuerpo").html(req.response);
        }
        else {
            alert("ocurrio un error: No se encontro la pagina solicitada '" + modulo + ".html'.-");
        }
    }
    req.send();

    //$('#idIframeContenido').attr('src','modulos/QuienesSomos.html');
    /*
    $.get("modulos/Principal.html", function(data) {
        $('#idDivCuerpo').html(data);
    });
    */
   //$("#idDivCuerpo").load("modulos/QuienesSomos.html");
    /*var req = new XMLHttpRequest();
    req.open("GET", "modulos/Principal.html", true);
    req.onload = function () {
        $("#idDivCuerpo").html(req.response);
    }
    req.send();
    */

}

function getXMLHttpRequest() {
    var objetoAjax;
    try {
        objetoAjax = new XMLHttpRequest();
    } catch (err1) {
        try {
            objetoAjax = new ActiveXObject("Msxm12.XMLHTTP");
        } catch (err2) {
            try {
                objetoAjax = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (err3) {
                objetoAjax = false;
            }
        }
    }
    return objetoAjax;
}

var http = new getXMLHttpRequest();

function llamadaAjax() {
    http.open('GET', 'modulos/Principal.html', true);
    http.onreadystatechange = estado;
    http.send(null);
}

function estado() {
    if (http.readyState == 4) {
        if (http.status == 200) {
            var respuesta = http.responseText;
            document.getElementById('idDivCuerpo').innerHTML = respuesta;
        }
    } else {
        document.getElementById('idDivCuerpo').innerHTML = '<img id="im_cargando" src="cargando.gif">';
    }

}

function cambiarCuerpoPagina(modulo) {
    $('#idIframeCuerpo').attr('src','modulos/' + modulo + '.html');
    return false;
    //$('#idIframeContenido').attr('src','modulos/QuienesSomos.html');
}

function cargarFrame(iframeName, url) {
    var $iframe = $('#' + iframeName);
    if ( $iframe.length ) {
        $iframe.attr('src',url);   
        return false;
    }
    return true;
}