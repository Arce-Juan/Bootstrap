<%@ Language=VBScript %>

<%

Response.ContentType = "text/html"
Response.AddHeader "Content-Type", "text/html;charset=UTF-8"
Response.CharSet = "UTF-8"

dim tipoBusqueda
tipoBusqueda = Request.QueryString("op")

if (tipoBusqueda = "agente") then

    dim nombre, dni
    
    ' RECUPERAMOS LOS PARAMETROS Y LUEGO CONSIDERAMOS HACER CON ELLO LO QUE NECESITEMOS
    dni = Request.QueryString("dni")
    nombre = Request.QueryString("nombre")
    '
    ' CREAMOS UNA COLECCION DE "AGENTES"
	Response.Write "{ ""Agentes"": ["
        Response.Write(" { ")
                Response.Write("""dni"" : ")
                Response.Write("""" & "31.123.456" & """")
                Response.Write(" , ")
                Response.Write("""nombres"" : ")
                Response.Write("""" & "ARCE, JUAN" & """")
                Response.Write(" , ")
                Response.Write("""Sexo"" : ")
                Response.Write("""" & "MASCULINO" & """")
        Response.Write(" } ")
        Response.Write(" , ")
        Response.Write(" { ")
                Response.Write("""dni"" : ")
                Response.Write("""" & "32.456.789" & """")
                Response.Write(" , ")
                Response.Write("""nombres"" : ")
                Response.Write("""" & "GUIMENEZ, JESSICA" & """")
                Response.Write(" , ")
                Response.Write("""Sexo"" : ")
                Response.Write("""" & "FEMENINO" & """")
        Response.Write(" } ")
        Response.Write(" , ")
        Response.Write(" { ")
                Response.Write("""dni"" : ")
                Response.Write("""" & "40.987.654" & """")
                Response.Write(" , ")
                Response.Write("""nombres"" : ")
                Response.Write("""" & "GALVAN, JOSE" & """")
                Response.Write(" , ")
                Response.Write("""Sexo"" : ")
                Response.Write("""" & "MASCULINO" & """")
        Response.Write(" } ")

	Response.Write(" ] } ") ' cierre Agente
end if

%>
