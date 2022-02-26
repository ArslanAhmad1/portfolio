const firebaseConfig = {
    apiKey: "AIzaSyDnlNQsNuwHFgSqe6t9tCV57AxyTBDA2Uc",
    authDomain: "github-portfolio-c0be0.firebaseapp.com",
    projectId: "github-portfolio-c0be0",
    storageBucket: "github-portfolio-c0be0.appspot.com",
    messagingSenderId: "796587044513",
    appId: "1:796587044513:web:6d7be7b73b6dc1cb2fcae0",
    measurementId: "G-MQRX92MBKT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const sendMessageForm = document.getElementById("send_message_form");

sendMessageForm.addEventListener('change', function () {
    if (sendMessageForm.name.value === "") {
        sendMessageForm.name.classList.add('boder_red');
    } else {
        sendMessageForm.name.classList.remove('boder_red');
    }
    if (sendMessageForm.email.value === "") {
        sendMessageForm.email.classList.add('boder_red');
    } else {
        sendMessageForm.email.classList.remove('boder_red');
    }
    if (sendMessageForm.phone.value === "") {
        sendMessageForm.phone.classList.add('boder_red');
    } else {
        sendMessageForm.phone.classList.remove('boder_red');
    }
    if (sendMessageForm.subject.value === "") {
        sendMessageForm.subject.classList.add('boder_red');
    } else {
        sendMessageForm.subject.classList.remove('boder_red');
    }
    if (sendMessageForm.message.value === "") {
        sendMessageForm.message.classList.add('boder_red');
    } else {
        sendMessageForm.message.classList.remove('boder_red');
    }
});

function send_message() {
    const name = sendMessageForm.name;
    const email = sendMessageForm.email;
    const phone = sendMessageForm.phone;
    const subject = sendMessageForm.subject;
    const message = sendMessageForm.message;
    if (name.value === "") {
        name.classList.add('boder_red');
    } if (email.value === "") {
        email.classList.add('boder_red');
    } if (phone.value === "") {
        phone.classList.add('boder_red');
    } if (subject.value === "") {
        subject.classList.add('boder_red');
    } if (message.value === "") {
        message.classList.add('boder_red');
    }
    if (name.value != "" && email.value != "" && phone.value != "" && subject.value != "", message.value != "") {
        db.collection("contact").add({ name, email, phone, subject, message })
            .then((docRef) => {
                alert("Successfully Submitted..!");
            })
            .catch((error) => {
                alert("Error..!");
            });
    } else {
        name.classList.add('boder_red');
        email.classList.add('boder_red');
        phone.classList.add('boder_red');
        subject.classList.add('boder_red');
        message.classList.add('boder_red');
    }
}
