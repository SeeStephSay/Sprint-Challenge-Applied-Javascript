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

DOM stands for the Document Object Model. The browser creates it as a representation of the website's HTML document. It's considered "live," because as it is modified, the page changes along with it. The DOM is technically language-agnostic, which means that it can be modified with any programming language, not just JavaScript. It's structured like a tree, where each nested element is referred to as a Node, and each node can have its own nested child nodes (children), and then the children can have children, and it can cascade down like this. The node structure is directly correlated to how the HTML document itself is nested. 

2. What is an event?

An event is something that happens inside a browser, like a change of state (i.e. the page has finished loading), or a basic user interaction, like them scrolling down a page, or hovering over an image. 

3. What is an event listener?

An event listener "addEventListener()" is a method that we set to respond somehow when an event happens. For example, we can set an event listener to play a loading animation, and another to stop it when the page is finished loading. If a user scrolls down a page, or hovers over an image, we could set a drop-shadow behind the page text and images. 

4. Why would we convert a NodeList into an Array?

Since a NodeList is only an array-like object, we would want to use the method "Array.from(NodeList)" to create an array out of its data. This way, we have access to all the built-in array methods (.map, .reduce, etc...) we need to be able to parse our data like we want. 

5. What is a component?

Components are similar to functions, in that they are reusable chunks of code, however, components contain HTML, CSS, and JavaScript. We use them to build elements that share functionality and styling, so that we don't have to write the same code with minor differences over and over again. This helps to keep our code DRY, by building styles that don't rely on other elements on the page (so they could be moved at any time, for example), and don't cross over into another component's territory. 


### Git Set up

* [ ] Fork the project into your GitHub user account
* [ ] Clone the forked project into a directory on your machine
* [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
* [ ] You are now ready to build this project with your preferred IDE

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
