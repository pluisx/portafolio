<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "hola@pluisx.com";
    $headers = "From: ".$mailFrom;
    $txt = "Haz recibido un correo de ".$name.".\n\n".$massage;

    mail($mailTo, $txt, $headers);
    header("Location: index.php?mailsend");
}