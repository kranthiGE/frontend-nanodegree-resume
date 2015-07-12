//Work object JSON
var work = {
    "jobs": [
        {
            "employer": "Kosher technologies",
            "title": "Asp.Net developer",
            "location": "Hyderabad",
            "dates": "2005-2006",
            "description": "Worked on various web applications and learned client side, server side coding using HTML, JS, ASP.NET & C#"
        },
        {
            "employer": "Innovia USA",
            "title": "Software developer",
            "location": "Hyderabad",
            "dates": "2006-2006",
            "description": "Worked on building a forum application and online diagnostics medical domain software. Used HTML, ASP.NET UI & Ajax based UI controls"
        },
        {
            "employer": "Infotech Enterprises Ltd",
            "title": "Software Engineer",
            "location": "Hyderabad",
            "dates": "2006-2010",
            "description": "Worked on traditional ASP, Java & J2EE technologies building customer internal web applications & portals"
        },
        {
            "employer": "General Electric",
            "title": "Software Engineer",
            "location": "Bangalore",
            "dates": "2010-2015",
            "description": "Worked on building internal, enterprise web applications using Java, J2EE platforms."
        }

    ]
};
//Bio object JSON
var bio = {
    "name": "Kranthi Kiran",
    "role": "Front-end developer",
    "welcomeMessage": "Hello world",
    "contacts": {
        "mobile": "9986662017",
        "email": "kranthi.kiran@ge.com",
        "github": "kranthiGE",
        "twitter": "kranthi",
        "location": "Bangalore"
    },
    "picURL": "images/me.jpg",
    "skills": [
        "Javascript",
        "HTML5",
        "CSS3",
        "jQuery"
    ]
};
//Display bio: name, role, mobile, email, git, location & skill set details
bio.display = function(){
    if(typeof(bio) == "object" && bio.skills.length > 0){
        var forName = HTMLheaderName.replace("%data%",bio.name);
        var forRole = HTMLheaderRole.replace("%data%",bio.role);

        $("#header").prepend(forRole).prepend(forName);
        var forMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
        var forEmail = HTMLemail.replace("%data%",bio.contacts.email);
        var forGithub = HTMLgithub.replace("%data%",bio.contacts.github);
        var forLocation = HTMLlocation.replace("%data%",bio.contacts.location);

        $("#topContacts").append(forMobile)
            .append(forEmail)
            .append(forGithub)
            .append(forLocation);

        $("#footerContacts").append(forMobile)
            .append(forEmail)
            .append(forGithub)
            .append(forLocation);

        $("#header").append(HTMLbioPic.replace("%data%",bio.picURL));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

        $("#header").append(HTMLskillsStart);
        var skills = bio.skills;
        for(skill in skills){
            $("#skills").append(HTMLskills.replace("%data%", skills[skill]));
        }
        $("#header").append(HTMLskillsEnd);
    }
};
bio.display();
//Display work: job, experience, dates & description details
work.display = function(){
    var jobs = work.jobs;
    for(job in jobs){
        $("#workExperience").append(HTMLworkStart);
        var jobdata = HTMLworkEmployer.replace("%data%", jobs[job].employer) + HTMLworkTitle.replace("%data%", jobs[job].title);
        $(".work-entry:last").append(jobdata);

        var formatttedDates = HTMLworkDates.replace("%data%", jobs[job].dates);
        $(".work-entry:last").append(formatttedDates);

        var formatttedDesc = HTMLworkDescription.replace("%data%", jobs[job].description);
        $(".work-entry:last").append(formatttedDesc);
    }
};
work.display();
//Project object JSON
var projects = {
    "projects": [
        {
            "title": "ECommerce website",
            "dates": "2005",
            "description": "Ecommerce website for Singapore based company",
            "images": ""
        },
        {
            "title": "supplier integration portal",
            "dates": "2006",
            "description": "supplier integration portal",
            "images": ""
        },
        {
            "title": "www.thedrusya.com",
            "dates": "2010",
            "description": "A forum application & automated SMS facility for marriages",
            "images": ["images/personalprojects_small.jpg"]
        },
        {
            "title": "www.gloherbals.com",
            "dates": "2010",
            "description": "Online shopping cart for a herbal company",
            "images": ""
        },
        {
            "title": "Eneterprise web applications & portals",
            "dates": "2010-2015",
            "description": "For internal GE",
            "images": ""
        }
    ]
};
//Display projects: title, dates, description & image details
projects.display = function(){
    var projs = projects.projects;

    for(project in projs){
        $("#projects").append(HTMLprojectStart);

        var title = HTMLprojectTitle.replace("%data%", projs[project].title);
        $(".project-entry:last").append(title);

        var projDt = HTMLprojectDates.replace("%data%", projs[project].dates);
        $(".project-entry:last").append(projDt);

        var projDesc = HTMLprojectDescription.replace("%data%", projs[project].description);
        $(".project-entry:last").append(projDesc);

        if (projs[project].images.length > 0) {
            projs[project].images.forEach(function(image){
                var formattedImage = HTMLprojectImage.replace("%data%",image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    }
};
projects.display();
//Education object JSON
var education = {
    "onlinecourses": [
        {
            "title": "Nano degree",
            "school": "Udacity",
            "dates": "2015",
            "url": "www.Udacity.com"
        }
    ],
    "schools": [
        {
            "name": "Nivedita school",
            "location": "Rajahmundry",
            "degree": "Higher secondary school",
            "majors": [
                "lower",
                "higher"
            ],
            "dates": "1992-2001",
            "url": "www.Niveditaschool.com"
        },
        {
            "name": "Narayana Intermediate College",
            "location": "Vijayawada",
            "degree": "Intermediate college degree",
            "majors": [
                "Junior Intermediate",
                "Senior Intermediate"
            ],
            "dates": "2000,2001",
            "url": "www.NarayanaCollege.com"
        },
        {
            "name": "Kings Engineering College",
            "location": "Chennai",
            "degree": "Bachelor of Engineering",
            "majors": [
                "Computer science",
                "Engineering"
            ],
            "dates": "2001-2005",
            "url": "www.kingscollege.com"
        }
    ]
};

//Display education: schools, degree, location & other details
education.display = function(){
    var schools = education.schools;
    for(var school in schools){
        $("#education").append(HTMLschoolStart);

        var name = HTMLschoolName.replace("%data%", schools[school].name);
        $(".education-entry:last").append(name);

        var degree = HTMLschoolDegree.replace("%data%", schools[school].degree);
        $(".education-entry:last").append(degree);

        var dates = HTMLschoolDates.replace("%data%", schools[school].dates);
        $(".education-entry:last").append(dates);

        var location = HTMLschoolLocation.replace("%data%", schools[school].location);
        $(".education-entry:last").append(location);

        var majors = HTMLschoolMajor.replace("%data%", schools[school].majors);
        $(".education-entry:last").append(majors);

        var url = HTMLschoolURL.replace("%data%", schools[school].url);
        $(".education-entry:last").append(url);
    }
};
education.display();
//Method to push work locations to an array that will be used in helperJS to display on Google maps
function locationizer(workObj){
    var locArray = [];
    if(workObj !== null && typeof(workObj) == "object"){
        var jobs = workObj.jobs;
        for(var job in jobs){
            locArray.push(jobs[job].location);
        }
    }
    return locArray;
}
locationizer(work);

function inName(name){
    var str = name.split(' ');
    return str[0][0].toUpperCase() + str[0].slice(1) + " " + str[1].toUpperCase();
}
//Display google map in map div container
$("#mapDiv").append(googleMap);