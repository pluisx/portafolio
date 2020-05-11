<?php

    if(isset($_POST['submit'])){
        $name=$_POST['name'];
        $mailFrom=$_POST['email'];
        $message=$_POST['message'];

        $mailTo="hola@pluisx.com";
        $subject='Formulario de Pluisx.com';
        $headers="From: ".$mailFrom;    
        $message="Haz recibido un correo de ".$name.".\n\n".$massage;

        if(mail($mailTo, $subject, $message, $headers)){
            echo "<h1>Mensaje enviado correctamente! Gracias"." ".$name.", te contactaremos lo antes posible.</h1>";
        }
        else{
            echo "Algo salió mal!";
        }
    }