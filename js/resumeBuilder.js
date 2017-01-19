var bio = {
  "name" : "Aishwarya A N",
  "role" : "Front-end Web Developer",
  "contacts" : {
    "mobile" : "9845578144",
    "email" : "aishwarya.an95@gmail.com",
    "github" : "aishwarya-an",
    "location" : "Rajajinagar, Bengaluru"
  },
  "welcomeMessage" : "",
  "skills" : ["images/logo-html5.svg", "images/logo-css3.svg", 
              "images/logo-javascript.svg", "images/logo-jquery.svg", 
              "images/logo-git.svg"],
  "biopic" : "images/biopic.png"
}

bio.display = function(){
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedGithub);
  $("#topContacts").append(formattedLocation);
  $("#header").append(formattedBiopic);
  if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    for(var i = 0; i < bio.skills.length; i++){
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkills);
    }
  }
  $("#footerContacts").append(formattedMobile);
  $("#footerContacts").append(formattedEmail);
  $("#footerContacts").append(formattedGithub);
  $("#footerContacts").append(formattedLocation);
}

var work = {
  "jobs" : [
    {
      "employer" : "Self",
      "title" : "Student",
      "location" : "Rajajinagar, Bangalore",
      "date" : "In Progress",
      "description" : "Studying web development, data structures and algorithms."
    }
  ]
}

work.display = function(){
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%", 
    work.jobs[0].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[0].title);
  var formattedDate = HTMLworkDates.replace("%data%", work.jobs[0].date);
  var formattedLocation = HTMLworkLocation.replace("%data%", 
    work.jobs[0].location);
  var formattedDescription = HTMLworkDescription.replace("%data%", 
    work.jobs[0].description);
  $(".work-entry").append(formattedEmployer + formattedTitle);
  $(".work-entry").append(formattedDate);
  $(".work-entry").append(formattedLocation);
  $(".work-entry").append(formattedDescription);
}

var projects = {
  "projects" : [
    {
      "title" : "Online Resume",
      "link" : "#",
      "date" : "2017",
      "description" : "An Online Resume, built on Javascript objects appended \
        with new skills and information dynamically via jQuery",
      "image" : "images/resume.png"
    },
    {
      "title" : "Portfolio Website",
      "link" : "https://github.com/aishwarya-an/Portfolio-Website",
      "date" : "2016",
      "description" : "This website features the projects undertaken in the \
        field of Algorithms and Front-end Web Development.",
      "image" : "images/portfolio.png"
    },
    {
      "title" : "Boggle",
      "link" : "https://github.com/aishwarya-an/Boggle-Game",
      "date" : "2015",
      "description" : "This is a game to form words from a grid of letters.",
      "image" : "images/boggle.jpg"
    },
    {
      "title" : "Spelling Checker",
      "link" : "https://github.com/aishwarya-an/Spelling-Checker",
      "date" : "2015",
      "description" : "This application checks the spelling of words in a \
        file, prints words with spelling errors and suggests correct words.",
      "image" : "images/spelling_checker.jpg"
    },
    {
      "title" : "Maze Solver",
      "link" : "https://github.com/aishwarya-an/Maze-Solver",
      "date" : "2015",
      "description" : "This is a game which creates a maze for the user to \
        solve it.",
      "image" : "images/maze.jpg"
    }
  ]
}

projects.display = function(){
  projects.projects.forEach(function(project){
    $("#projects").append(HTMLprojectStart);
    var formattedLink = HTMLprojectLink.replace("%data%", project.link);
    var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
    var formattedDate = HTMLprojectDates.replace("%data%", project.date);
    var formattedDescription = HTMLprojectDescription.replace("%data%", 
                                                        project.description);
    var formattedImage = HTMLprojectImage.replace("%data%", project.image);
    $(".project-entry:last").append(formattedLink + formattedTitle, formattedDate, 
      formattedDescription, formattedImage);
  });
}

bio.display();
work.display();
projects.display();

