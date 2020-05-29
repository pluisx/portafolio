<?php
    $toEmail = "pluisx@gmail.com";
    $mailHeaders = "Mensaje de " . $_POST["userName"] . " ". $_POST["userEmail"] ."\r\n" . " ". $_POST["content"];
    if(mail($toEmail, $_POST["content"], $mailHeaders)) {
        print "<p class='success'>Mensaje enviado correctamente. <i class='ti-check-box'></i></p>";
    } else {
        print "<p class='Error'>Hubo un problema al enviar tu mensaje.</p>";
    }
?>
