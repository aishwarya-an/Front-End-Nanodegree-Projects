# Website Performance Optimization project

## Optimizations
### Part 1: Optimize PageSpeed Insights score for index.html

The following techniques were applied to reduce the Critical Rendering Path length:
* Minify CSS and JS files
* Use "print" media query for `print.css`
* Inline critical and small CSS and JS files into HTML file.
* Run all JavaScripts at the end of document's body
* Optimize images.
 
As of 09 February 2017, [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Faishwarya-an.github.io%2Ffrontend-nanodegree-mobile-portfolio%2F) displays a score of:
* 95 / 100 for mobile
* 93 / 100 for desktop

### Part 2: Optimize Frames per Second in pizza.html

#### Issue #1: Frame rate by scrolling the page

The problem was in `updatePositions` function. `document.body.scrollTop` was accessed in every loop iteration to find the position of the pizza in the `updatePositions()`. So, I stored the values(which were previously calculated repeatedly) and used them in the loop. Also, I removed the `logAverageFrame()` which logged the time taken to load every 10 frames.

#### Issue #2: Computational efficiency

The problem was in `resizePizzas()` since, resizing of the pizzas could not be done faster(i.e < 5ms). The following were the issues and were fixed: 
* Unnecessary access ot the element's styles in loops.
* Lot of code duplication.
* Unnecessary creation of functions inside this function. This was taken care by storing the values of the 3 classes of pizzas and using them in this function.
* unnecessary loops to style the resized pizzas. This was taken care by using CSS styles to the 3 classes of pizzas and adding the appropriate class to the apparopriate element on resizing.

Before the fix, it took about 300ms to resize the pizzas. After the fix, it takes about less than 1ms to resize the pizzas on using the slider.

## Install and Run
1. Download the repository.  
2. To run the page,
  * Open the index.html file  
OR  
  * Run the page on a local server by  
    `cd /path/to/your-project-folder`  
    `python -m SimpleHTTPServer 8080`  
    Open a browser and visit localhost:8080



