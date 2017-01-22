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
};

bio.display = function(){
  // Variables for the bio details
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);

  // Appending the variables onto the page
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedGithub);
  $("#topContacts").append(formattedLocation);
  $("#header").append(formattedBiopic);

  // Appending the skills
  if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    for(var i = 0; i < bio.skills.length; i++){
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkills);
    }
  }

  // Adding the contacts to the footer of the page
  $("#footerContacts").append(formattedMobile);
  $("#footerContacts").append(formattedEmail);
  $("#footerContacts").append(formattedGithub);
  $("#footerContacts").append(formattedLocation);
};

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
};

work.display = function(){
  // Creating a new div for work section
  $("#workExperience").append(HTMLworkStart);

  // Creating variables necessary to append the work details
  var formattedEmployer = HTMLworkEmployer.replace("%data%", 
    work.jobs[0].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[0].title);
  var formattedDate = HTMLworkDates.replace("%data%", work.jobs[0].date);
  var formattedLocation = HTMLworkLocation.replace("%data%", 
    work.jobs[0].location);
  var formattedDescription = HTMLworkDescription.replace("%data%", 
    work.jobs[0].description);

  // Appending the work details
  $(".work-entry").append(formattedEmployer + formattedTitle);
  $(".work-entry").append(formattedDate);
  $(".work-entry").append(formattedLocation);
  $(".work-entry").append(formattedDescription);
};

var projects = {
  "projects" : [
    {
      "title" : "Online Resume",
      "link" : "#",
      "date" : "2017",
      "description" : "An Online Resume, built on Javascript objects appended " +
        "with new skills and information dynamically via jQuery",
      "image" : "images/resume.png"
    },
    {
      "title" : "Portfolio Website",
      "link" : "https://github.com/aishwarya-an/Portfolio-Website",
      "date" : "2016",
      "description" : "This website features the projects undertaken in the " +
        "field of Algorithms and Front-end Web Development.",
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
      "title" : "Maze Solver",
      "link" : "https://github.com/aishwarya-an/Maze-Solver",
      "date" : "2015",
      "description" : "This is a game which creates a maze for the user to " + 
        "solve it.",
      "image" : "images/maze.jpg"
    },
    {
      "title" : "Spelling Checker",
      "link" : "https://github.com/aishwarya-an/Spelling-Checker",
      "date" : "2015",
      "description" : "This application checks the spelling of words in a " +
        "file, prints words with spelling errors and suggests correct words.",
      "image" : "images/spelling_checker.jpg"
    }
  ]
};

projects.display = function(){
  var projectThumbnail = '<div class="thumbnail"></div>';
  // for each project, create variables necessary to append the project details
  projects.projects.forEach(function(project){
    // Creating a new div for each project
    $("#projects").append(HTMLprojectStart);
    $(".project-entry").addClass("col-md-6 pull-right");
    $(".project-entry:last").append(projectThumbnail);

    var formattedLink = HTMLprojectLink.replace("%data%", project.link);
    var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
    var formattedDate = HTMLprojectDates.replace("%data%", project.date);
    var formattedDescription = HTMLprojectDescription.replace("%data%", 
                                                        project.description);
    var formattedImage = HTMLprojectImage.replace("%data%", project.image);

    $(".thumbnail:last").append(formattedLink + formattedTitle, 
      formattedDate, formattedDescription, formattedImage);
  });
};

var education = {
  "schools" : [
    {
      "name" : "M.S Ramaiah College of Arts, Science and Commerce",
      "location" : "Mathikere, Bangalore",
      "degree" : "BCA",
      "date" : "2016 - 18",
      "majors" : ["CS"],
      "url" : "https://msrcasc.edu.in"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front-end Web Development",
      "school" : "Udacity",
      "date" : "2017",
      "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
      "description" : "Learnt the fundamentals of how the web works, gained " +
       "working knowledge of the three foundational languages that power each " +
       "and every website: HTML, CSS and JavaScript and thus helped in building " +
       "beautiful, responsive websites optimized for mobile and desktop performance."
    },
    {
      "title" : "Algorithmic Thinking: Part 1",
      "school" : "Rice University",
      "date" : "2015",
      "url" : "https://www.coursera.org/learn/algorithmic-thinking-1",
      "description" : "Learnt analysing efficiency of algorithms and graph " +
       "algorithms.Applied the same in analysis of citation graphs and " +
       "computer networks."
    },
    {
      "title" : "Algorithmic Thinking: Part 2",
      "school" : "Rice University",
      "date" : "2015",
      "url" : "https://www.coursera.org/learn/algorithmic-thinking-2",
      "description" : "Learnt divide and conquer and dynamic programming " +
        "techniques. Applied the same in finding closest pair using different " +
        "clustering algorithms and application of sequence alignments in " +
        "genomics and text comparison."
    },
    {
      "title" : "Algorithm: Design and Analysis",
      "school" : "Stanford University",
      "date" : "2014",
      "url" : "http://online.stanford.edu/course/algorithms-design-and-analysis-part-1",
      "description" : "Learnt asymptotic analysis, divide and conquer " +
        "algorithms, sorting and searching, basic randomized algorithms, " + 
        "graph search, shortest paths, heaps, search trees, and hash tables."
    }
  ]
};

education.display = function(){
  var educationThumbnail = '<div class="thumbnail"></div>';
  // Creating a new div for the school
  $("#education").append(HTMLschoolStart);

  var formattedLink = HTMLschoolLink.replace("%data%", education.schools[0].url);
  var formattedName = HTMLschoolName.replace("%data%", 
    education.schools[0].name);
  var formattedDegree = HTMLschoolDegree.replace("%data%", 
    education.schools[0].degree);
  var formattedLocation = HTMLschoolLocation.replace("%data%", 
    education.schools[0].location);
  var formattedDate = HTMLschoolDates.replace("%data%", education.schools[0].date);
  var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[0].majors);
  
  $(".education-entry").append(formattedLink + formattedName + formattedDegree, 
      formattedDate, formattedLocation, formattedMajor);

  // Appending the online course header
  $("#education").append(HTMLonlineClasses);
  $("#education").append(HTMLschoolStart);
  // For each online course undertaken, append the details 
  education.onlineCourses.forEach(function(course){
    // Creating a new div for each course
    $(".education-entry:last").append(educationThumbnail);

    var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
    var formattedDate = HTMLonlineDates.replace("%data%", course.date);
    var formattedUrl = HTMLonlineLink.replace("%data%", course.url);
    var formattedDescription = HTMLonlineDescription.replace("%data%", 
      course.description);

    $(".thumbnail:last").append(formattedUrl + formattedTitle + 
      formattedSchool, formattedDate, formattedDescription);
  });
};

bio.display();
work.display();
projects.display();
education.display();

// Adding the map section
$("#mapDiv").append(googleMap);

$(window).resize(function(){
  if($(window).width() < 780){
    $(".pull-right").removeClass("pull-right");    
  }
});

$(window).load(function(){
  if($(window).width() < 780){
    $(".pull-right").removeClass("pull-right");
  }
});
