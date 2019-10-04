# Sprint-Challenge Applied Javascript - Lambda Times

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored the DOM and the concept of components. During this Sprint, you studied the DOM, DOM Events, and Components, as well as HTTP GET requests, and the axios library. In your challenge this week, you will demonstrate proficiency by creating an online Lambda newspaper called "Lambda Times."

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your Tead Lead and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Applied JavaScript.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your Team Lead.

## Description

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page. You will do this at first with static data, then you will request data from a server to create dynamic components.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. What is the DOM?

"DOM" stands for Document Object Model. It's an API (application programming interface) for HTML. A browser's Developer Tools option shows a visual representation of the layout and styling of a web page. Here, we can manipulate the site with JavaScript. The DOM is, however, actually language-agnostic, meaning we could use any programming language with it. Programmers can build documents, navigate their structure, and add, modify, or delete elements and content, such as text. 

2. What is an event?

An event is anything that can happen to an HTML element, by either something the browser or a user does (i.e. A webpage finishing loading, someone typed their name into a form, or a button was clicked). JavaScript allows you to run code when it detects an event. 

3. What is an event listener?

The event listener is the method that actually specifies which code to run when it detects an event (listens for it, essentially). Event listeners can be added to any DOM object, not just HTML elements (i.e. the window object). Several can be added to each element, including more than one of the same type (i.e. two "click" events). The syntax is: element.addEventListener(event *i.e. "click*, function(){ alert("Alerts are the worst!");}, useCapture *true*); This would make a click event issue an alert, and the order of execution would be the outermost element's event, and then the innermost element's event, even if it was the innermost function that was actually clicked in the first place. Using a *false* value would mean that bubbling would happen, and the innermost element's event would be handled first, and then it would go outward. 

4. Why would we convert a NodeList into an Array?

A NodeList already has a forEach method available for it, but if you're wanting to use more methods that are available in ES6, you would need to convert it to an array, instead of it just being an "array-like object." Array.filter is one example of additional methods you could use. You would use the Array.from() method to create a new array from the NodeList. 
For example: 
var btns = document.querySelectorAll('button');
var btnsArr = Array.from(btns);

5. What is a component?

Components are chunks of reusable code that you can use to build your website. Similar to the idea of constructing something with Lego bricks. They help developers to be able to break their website into smaller, more manageable pieces. This makes it easier to just focus on more specific sections that might need to be reworked, instead of having to sift through a bunch of anonymous functions that are hard-coded to do specific things. 

### Git Set up

* [x] Fork the project into your GitHub user account
* [x] Clone the forked project into a directory on your machine
* [x] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
* [x] You are now ready to build this project with your preferred IDE

## Minimum Viable Product

Your finished project must include all of the following requirements:

* [ ] Look through the HTML code and familiarize yourself with the different sections. Some of them already exist, but some need to be filled in. DO NOT add any code to the HTML file itself.

* [ ] Following the instructions in the `Header/index.js` file, create the Header component. 

* [ ] Following the instructions in the `Tabs/index.js` file, create individual Tabs components.

* [ ] Following the instructions in the `Cards/index.js` file, create individual Cards components.

## Stretch Problems

Your stretch challenge is to write the functionality of a `Carousel` component. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. This is going to be a bit different because you are going to need to create some advanced functionality for the carousel. There is no need to request data for this exercise.

* [ ] Complete the carousel functionality in `Carousel.js`

* [ ] If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.

* [ ] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.

* [ ] If you have finished the above, research `data attributes`. Implement data attributes within your tabs as well as your cards. Give the tabs functionality so that when they are clicked they filter the cards to only display the cards that contain that topic.
