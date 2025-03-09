console.log("connected")
const FORM = document.getElementById("form")
const SENT = document.getElementById("sent")

FORM.addEventListener('submit', function(e){
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const subject = e.target.subject.value
    const message = e.target.message.value
    const p = document.getElementById("p")
    p.textContent = `hello ${name} thanks for submitting your message ${message} !`
    SENT.appendChild(p)
    FORM.reset()
})