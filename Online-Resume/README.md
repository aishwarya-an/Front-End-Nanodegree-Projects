# My Interactive Resume  

This resume was initially created as a part of the curriculum of the Udacity FrontEnd NanoDegree Program. The resume created is according to the requirements of the [Project Rubric](https://review.udacity.com/?_ga=1.189245867.12280332.1465333852#!/projects/2962818615/rubric).  

In this project, the goal was to transform a static web page into dynamic applications by using variables, objects, conditional statements, loops, and functions in JavaScript as well as the core features of jQuery to manipulate the DOM.

## Details  

The repository includes the following files:  

* **index.html**: The main HTML document. Contains links to all of the CSS and JS resources needed to render the resume, including resumeBuilder.js.
* **js/helper.js**: Contains helper code needed to format the resume and build the map. It also has a few function shells for additional functionality. More on helper.js further down.
* **js/resumeBuilder.js**: Contains all the JavaScript objects representing different resume sections such as bio, work, projects and education.  
* **js/jQuery.js**: The jQuery library.
* **css/style.css**: Contains all of the CSS needed to style the page.
* **css/bootstrap.min.css**: Contains the minified version of bootstrap styles needed to style the page.
* **README.md**: The GitHub readme file.
* and some images in the images directory.

### js/helper.js
helper.js contains a large collection of strings containing snippets of HTML. These snippets contain placeholder data in the form of `%data%` or `%contact%`. The variables in this file is used in resumeBuilder.js to append the information onto the resume.  
