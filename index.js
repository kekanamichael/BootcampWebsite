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

//Index.html main
var vid = document.getElementById("video")
vid.innerHTML = "<video width = '100%' height='340' controls>" + "<source src='./assets/videos/10 SECONDS VIDEO.mkv'> type='video'"+ "</video>"
var myName = document.getElementById("myName")
myName.innerHTML = "MICHAEL"
var profile = document.getElementById("profile")
profile.innerHTML = ("A meticulous and organized individual who is interested in web development. I am a hard worker, self-motivated, goal-oriented individual who is always looking for a challenge to enhance my skills and knowledge. I like to interact with other people and adapt easily to different kinds of environment. I have good communication skills and I am also able to work different kinds of shifts and under pressure. <br>  <br>  I am a long-life learner and willing to learn new skills that might be required from me. I enjoy working with people and always willing to learn new skills.")
var myButton = document.getElementById("btn")
myButton.innerHTML = "Click Me"
var photo = document.getElementById("photo")
photo.innerHTML = "<img src='./assets/images/Michael Kekana.jpeg'>"

myButton.addEventListener("click", clickOn);
function clickOn(){
    alert("I am Mike the programmer");
}

