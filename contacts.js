//Header
document.getElementById("home").innerHTML = "Home";
document.getElementById("about").innerHTML = "About Me";
document.getElementById("contacts").innerHTML = "Contact Us";

//footer
var header = document.getElementById("socialLinks")
header.innerHTML = "Social Media links";

var links = document.getElementById("links")
links.innerHTML = "<li>"+"<a href='https://web.facebook.com/profile.php?id=100006740205361' target='_blank'>" + "Facebook" + "</a>" + "</li>";
links.innerHTML += "<li>"+"<a href='https://www.instagram.com/michaelkekan/?hl=en' target='_blank'>" + "Instergram" + "</a>" + "</li>"
links.innerHTML +="<li>" + "<a href='https://www.linkedin.com/in/michael-kekana-382719221/' target='_blank'>" + "LinkedIn" +"</a>"+"</li>";
let phone = document.getElementById("phone")
phone.innerHTML = "<b>Phone:</b> 071 645 5956"

var myForm = document.getElementById("myForm");
myForm.innerHTML = '<h2>' + 'Get in touch with us' + '</h2>'
myForm.innerHTML += '<label for="name">'+'Name'+'</label>'+'<br>'+'</br>'
myForm.innerHTML += '<input type="text" id="name" name="name" placeholder="Enter your Name" required>'+'<br>'
myForm.innerHTML += '<label for="surname">'+'Surname'+'</label>'+'<br>'+'</br>'
myForm.innerHTML += '<input type="text" id="surname" name="surname" placeholder="Enter your surname" required>'+'<br>'
myForm.innerHTML += '<label for="email" >'+'Email Address'+'</label>'+'<br>'
myForm.innerHTML += '<input type="email" id="email" name="email" placeholder="Enter your email" required>'+'<br>'
myForm.innerHTML += '<label for="subject">'+'Subject'+'</label>'+'<br>'+'</br>'
myForm.innerHTML += '<input type="text" id="subject" name="subject" placeholder="Subject">'+'<br>'+'</br>'
myForm.innerHTML += '<label for="message">'+'Message'+'</label>'+'<br>'+'</br>'
myForm.innerHTML += '<textarea id="message" name="message" placeholder="Write a message" required>'+'</textarea>'+'<br>'+'</br>'
myForm.innerHTML += '<button type="submit" id="myButton">'+'Send Message'+'</button>'
myForm.innerHTML += '<p id="fStatus">'+'</p>'


function validateForm(){
    let x = document.forms["myForm"]["name"].value;
    if(x = ""){
        alert("enter your name");
        return false;
    }
}

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("fStatus");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: myForm.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      myForm.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)


