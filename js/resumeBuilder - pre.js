$("#main").append("Kranthi");

var awesomeThoughts = "I am Kranthi and I am AWESOME";

console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

$("#main").append(funThoughts);
//Trying to replace variables in helperJS
var formattedName = HTMLheaderName.replace("%data%", "Kranthi Kiran");
var formattedRole = HTMLheaderRole.replace("%data%", "Front-end developer");

$("#header").append(formattedRole);
$("#header").prepend(formattedName);

var str = "audacity";
var str1 = str[1].toUpperCase() + str.slice(2);
console.log(str1);

var skills = ["funness", "programming", "learn & share JS"];
console.log(skills.length);

var bio = {
    "name": "Kranthi",
    "age": "32",
    "role": "Front-end developer",
    "contactinfo": {
        "mobile": "9986662017",
        "email": "kranthi.Kiran@ge.com",
        "github": "kranthiGE",
        "city": "Bangalore"
    },
    "picURL": "images/me.jpg",
    "welcomeMessage": "Hello",
    "skills": [
        "Javascript",
        "HTML5",
        "CSS3",
        "jQuery"
    ]
}

var work = {};
work.position = "Web developer";
work.employer = "GE";
work.years = 5;

var education = {};
education["name"] = "Anna university";
education["years"] = "2001-2005";
education["city"] = "Chennai";

$("#main").append(work["position"]);
$("#main").append(education.name);

/*dynamicaly add, remove from JSON object using javascript
    var data= {"locations1": [
    {"name": "","info": ""}
    ]};

    data.locations1.push({"name":"Hyd", "info": "Worked in Innovia"});

    data.locations1.splice(0,1);

    alert(data.locations1[0].name);
*/

$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});