/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed in the allFeeds object and 
         * ensures it has a URL defined and that the URL is not empty.
         */
        it('url is defined and not empty', function() {
          allFeeds.forEach(function(feeds) {
            expect(feeds.url).toBeDefined();
            expect(feeds.url.length).not.toBe(0);
            });
          });

        /* This test loops through each feed in the allFeeds object and 
         * ensures it has a name defined and that the name is not empty.
         */
        it('name is defined and not empty', function() {
            allFeeds.forEach(function(feed) {
              expect(feed.name).toBeDefined();
              expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* A new test suite named "The menu" */
    describe('The menu', function() {

        // This test ensures the menu element is hidden by default.
        it('contains hidden menu', function(){
          expect($('body').hasClass('menu-hidden')).toBeTruthy();
          });

         /* This test ensures the menu changes visibility when the menu icon 
          * is clicked. This test has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('menu changes visibility when menu icon is clicked', function(){
          $('.menu-icon-link').trigger('click');
          expect($('body').hasClass('menu-hidden')).toBeFalsy();
          $('.menu-icon-link').trigger('click');
          expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

    });

    /* A new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* This test ensures when the loadFeed function is called and 
         * completes its work, there is at least a single .entry element 
         * within the .feed container. Since, loadFeed() is asynchronous 
         * this test will require the use of Jasmine's beforeEach and 
         * asynchronous done() function.
         */
        beforeEach(function(done) {
          loadFeed(0, done);
        });

        it('at least one feed is present', function() {
          expect($('.feed .entry').length).not.toBe(0);
        });
    });

    /* A new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* This test ensures that when a new feed is loaded by the loadFeed 
         * function that the content actually changes. Since, loadFeed() is 
         * asynchronous, beforeEach() is used. The variables first and second
         * are used to store the content of the feed headings inorder to
         * compare them in the test.
         */
        var first, second;

        beforeEach(function(done) {
          // Since, atleast 2 feeds are required to run the test.
          if(allFeeds.length > 2){
            loadFeed(0, function() {
              first = $('.entry').text();
              loadFeed(1, function() {
                second = $('.entry').text();
                done();
              });
            });
          }
        });

        it('new feed loaded', function() {
          // Comparison can be done only when there are atleast two feeds.
          expect(allFeeds.length).toBeGreaterThan(2);
          expect(first).not.toEqual(second);
        });
    });
}());
