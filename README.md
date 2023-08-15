# Math with Crab

Marth with crab is a website game for children to practice adding numbers. In addition to it the user practices to type both the lowercase and uppercase letters. It is aimed at children between 6 and 8 years old. For children who are under this age adult assistance is required. This website hopes to make addition both fun and educational. The website is child-friendly to the ways it interacts with the user. You can visit the site [here](https://)

![am i responsive]()

## Features 

## Testing
------

### **Bugs**

- Problem 1:  When adding timer to start the game the timer interval didn't appear on the screen. Only the hourglass icon war there.
  - *Solution 1: span element was added to the interval.*

- Problem 2: Beim clicking "submit-btn" without user varification, the button led to the game screen.
  - *Solution 2: In the code in checkUsername function "," was used instead od "&&".* 
    ![bug 2](/documentation/bag-two.png)

- Problem 3:  The number of scores in the new game was added to the score number from the previous game.
  - *Solution 3: const currentScore = document.getElementById("current-score"); was changed to global variable let.*

#### **Unfixed Bugs**

- None

## Mistakes
------

I used onclick Event on my buttons in my HTML file.
    
- *Solution: Instead I used addEventListener() in js file, so the whole code is stored only in js file.*


## Credits 
------
### **Code**

- [Juliia Konovalova](https://github.com/IuliiaKonovalova) helped me to shorten my code for better navigation experience.

  ![shorten the java script code](/documentation/shorten-code.png)

- [To validate the user name with the first uppercase letter I used String.prototype.charAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)

- To start a new game the resetTimer function was needed. I looked into the project code of [Alfred](https://github.com/AlfredA93), a student from my cohort in Code Institute. His mentor helped him to understand the syntax of the timer function. Alfred wrote a simple version of it, which I adopted to my code. 

  ![timer credit](/documentation/reset-timer.png)

- Also, I watched the video tutorial from [Mr.Soderquist](https://www.youtube.com/channel/UCoL-30L7NMRNzwiHUqSYCVQ), which assisted me in how to set the timer and to check the answer.

### **Helpsheets and learning materials**

- Throughout the start of this website build I relied heavily on the tutorials from the Code Institute JavaScript Essentials part. I am very thankful to Anna Greaves, content developer of the Code Institute.

- My mentor Juliia Konovalova assisted me throughout the project development. She helped me to understand how to improve the user experience of the project. Understanding the confusing Java Script syntax at the beginning of the project was not easy for me. Juliia cheered me up and motivated me to carry on. I appreaciate her contribution to my progress.

- [Adding CSS Styles using JavaScript](https://www.javascripttutorial.net/dom/css/add-styles-to-an-element/)
- [CSS Buttons](https://www.w3schools.com/css/css3_buttons.asp)
- [Random Arrays in JavaScript](https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array)
- [setTimeout() Function](https://www.tutorialrepublic.com/javascript-tutorial/javascript-timers.php)
- [More setTimeout() explanations](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
- [Removing an attribute](https://www.w3schools.com/jsref/met_element_removeattribute.asp)


### **Media**
All Media was created and owned by the website author - Alfred Ayre.

### **Technologies used**
- [Favicon](https://www.favicon.cc/) Generator 
- Image Converters
    - [EZ Gif](https://ezgif.com/jpg-to-webp/)
    - [Tiny Img](https://tiny-img.com/webp/)
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for fonts
- [Adobe Fresco](https://www.adobe.com/products/fresco.html) for image creation

## Wireframes
------
![wireframe](assets/documentation-webp/wireframe-1.webp)
