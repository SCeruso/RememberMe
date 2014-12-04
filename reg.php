<?php
	//conexión con la base de datos y el servidor
	$link = mysql_connect("localhost","root","") or die("<h2>No se encuentra el servidor</h2>");;
	$db = mysql_select_db("usuarios",$link) or die("<h2>Error de conexión</h2>");

	//obtenemos los valores del formulario
	$nombre=$_POST['nombreUsuario'];
	$nick=$_POST['nickUsuario'];
	$email=$_POST['emailUsuario'];
	$passwd=$_POST['emailUsuario'];
	$rPass=$_POST['RpassUsuario'];

	//Obtienela longitud de un string
	$req =(strlen($nombre)*strlen($nick)*strlen($email)*strlen($passwd)*strlen($rPass)) or die("No se ha llenado todos los campos")

	//Se confirma la contraseña
	if($passwd != $rPass)
	{
		die('Las contrase&ntilde;as no coinciden <br><br><a href="Pagina_web.html" >Volver</a>');
	}

	//Se encripta la contraseña
	$contraseñaUsuario = md5($passwd);

	//Ingresar la información a la tabla datos
	mysql_query("INSERT INTO datos VALUES('','$nombre','$nick','$email','$contraseñaUsuario')",$link) or die("<h2>Error en el envío</h2>");
	echo ''
		<h2>Registro completo</h2>
		<h5>Gracias por registrarse en nuestr/a web, ya puede ingresarcomo usuario</h5>
		<a href="login.html">Login</a>
		 ';