function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "arslan7980655@gmail.com",
        Password: "AY267622",
        To: 'arslandev.py@gmail.com',
        From: "arslandev.py@gmail.com",
        Subject: "Hi",
        Body: "How r u",
    }).then(
        message => alert("mail sent successfully")
    );
}