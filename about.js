document.getElementById("home").innerHTML = "Home";
document.getElementById("about").innerHTML = "About Me";
document.getElementById("contacts").innerHTML = "Contact Us";

var personalDetails = document.getElementById("myTable")
personalDetails.innerHTML = "<tr>" + "<td>" + "<h3>" + "Personal details" + "</h3>" + "</td>" + "<td>" + "</td>" + "</tr>"
personalDetails.innerHTML += "<tr>" + "<td>" + "Name" + "</td>" + "<td>" + "Michael Kekana" + "</td>" + "</tr>"
personalDetails.innerHTML += "<tr>" + "<td>" + "Gender" + "</td>" + "<td>" + "Male" + "</td>" + "</tr>"
personalDetails.innerHTML +="<tr>" + "<td>" + "Mobile" + "</td>" + "<td>" + "0716455956" + "</td>" + "</tr>"
personalDetails.innerHTML += "<tr>" + "<td>" + "Resedential Adress" + "</td>" + "<td>" + "Matlelerekeng 1092, Marble Hall, 0450" + "</td>" + "</tr>"
personalDetails.innerHTML += "<tr>" + "<td>" + "ID No" + "</td>" + "<td>" + "9902135562088" + "</td>" + "</tr>"
personalDetails.innerHTML += "<tr>" + "<td>" + "Email" + "</td>" + "<td>" + "kekanamichael1999@gmail.com" + "</td>" + "</tr>"
personalDetails.innerHTML += "<tr>" + "<td>" + "Date Of Birth" + "</td>" + "<td>" + "1999-02-13" + "</td>" + "</tr>"

var education = document.getElementById("edu")
education.innerHTML = "<tr>" + "<td>" + "<b>" + "Course" + "</b>" + "</td>" + "<td>" + "<b>" + "Institude" + "</b>" + "</td>" + "<td>" + "<b>" + "Percentage/Grade" + "</b>" + "</td>" + "<td>" + "<b>" + "Year of Passing" + "</b>" + "</td>" + "</tr>"
education.innerHTML += "<tr>" + "<td>" + "National Diploma in Information Technology" + "</td>" + "<td>" + "Tshwane University of Technology" + "</td>" + "<td>" + "68%" + "</td>" + "<td>" + "In Progress" + "</td>" + "</tr>"
education.innerHTML += "<tr>" + "<td>" + "National Senior Certificate" + "</td>" + "<td>" + "Tlhakanang Secondary School" + "</td>" + "<td>" + "55.14%" + "</td>" + "<td>" + "2016" + "</td>" + "</tr>"

var eduTUT = document.getElementById("eduTUT")
eduTUT.innerHTML = "I am a final-year student, completing my National Diploma in Information Technology (Software Development) at Tshwane University of Technology. I hope to graduate with the average of over 70% later this year. One of the requirements for completion of the diploma is that I undergo six months experiential learning in the workplace."

var gradWork = document.getElementById("project")
gradWork.innerHTML = "While I was still at school, I worked on a system called grad work. This was a most valuable experience for me as I did Unified Modeling Language, Web development and database design and implementation. The system was to help graduates find jobs based on their qualification. This gave me the opportunity to enhance my programming skills and learn more. One of my special interests in the field is coding and data-base design."

var mySkills = document.getElementById("skills")
mySkills.innerHTML = "<li>" + "Programming Skills" + "</li>"
mySkills.innerHTML += "<li>" + "C++, Oracle SQL, Linux" + "</li>"
mySkills.innerHTML += "<li>" + "Database design and implementation skills using Oracle" + "</li>"
mySkills.innerHTML += "<li>" + "System analysis and design" + "</li>"
mySkills.innerHTML += "<li>" + "Planning skills" + "</li>"
mySkills.innerHTML += "<li>" + "Problem solving skills" + "</li>"
mySkills.innerHTML += "<li>" + "Communication skills" + "</li>"
mySkills.innerHTML += "<li>" + "Project management skills" + "</li>"

var header = document.getElementById("socialLinks")
header.innerHTML = "Social Media links";

var links = document.getElementById("links")
links.innerHTML = "<li>"+"<a href='https://web.facebook.com/profile.php?id=100006740205361' target='_blank'>" + "Facebook" + "</a>" + "</li>";
links.innerHTML += "<li>"+"<a href='https://www.instagram.com/michaelkekan/?hl=en' target='_blank'>" + "Instergram" + "</a>" + "</li>"
links.innerHTML +="<li>" + "<a href='https://www.linkedin.com/in/michael-kekana-382719221/' target='_blank'>" + "LinkedIn" +"</a>"+"</li>";
let phone = document.getElementById("phone")
phone.innerHTML = "<b>Phone:</b> 071 645 5956"