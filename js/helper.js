window.addEventListener("load", function() {
  // googleFont is used to create a link to the googlefont api used.
  var googleFont = document.createElement("link");
  googleFont.href = "//fonts.googleapis.com/css?family=Open+Sans:400,700";
  googleFont.rel = "stylesheet";
  document.head.appendChild(googleFont);
  // googleAnalytics is used to create a script containing the google analytics.
  var googleAnalytics = document.createElement("script");;
  googleAnalytics.src = "http://www.google-analytics.com/analytics.js";
  document.head.appendChild(googleAnalytics);
  
  // Copied and pasted the script code written in index.html.
  (function(w, g){
    w['GoogleAnalyticsObject'] = g;
	w[g] = w[g] || function(){
      (w[g].q=w[g].q || []).push(arguments)};
    w[g].l = 1 * new Date();})(window,'ga');
	ga('create', 'UA-XXXX-Y');
	ga('send', 'pageview');
});
