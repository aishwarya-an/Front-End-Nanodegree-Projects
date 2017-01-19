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
  "skills" : ["images/logo-html5.svg", "images/logo-css3.svg", "images/logo-javascript.svg", "images/logo-jquery.svg", "images/logo-git.svg"],
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

bio.display();

