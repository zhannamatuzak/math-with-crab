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

- [Juliia Konovalova](https://github.com/IuliiaKonovalova) explained me the ways I can shorten my code for better navigation experience.

  ![shorten the java script code](/documentation/shorten-code.png)

- [To validate the user name with the first uppercase letter I used String.prototype.charAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)

- To start a new game the resetTimer function was needed. I looked into the project code of [Alfred](https://github.com/AlfredA93), a student from my cohort in Code Institute. His mentor helped him to understand the syntax of the timer function. Alfred wrote a simple version of it, which I adopted to my code. 

  ![timer credit](/documentation/reset-timer.png)

- Also, I watched the video tutorial from [Mr.Soderquist](https://www.youtube.com/channel/UCoL-30L7NMRNzwiHUqSYCVQ), which assisted me in how to set the timer and to check the answer.

- The log in feature from the [project](https://aleksandracodes.github.io/CI_PP2_SunshineGuessing/index.html) of Aleksandra H. has inspired me. And I used it as a communication method between the crab, the game owner, and the user, who is a child. The crab want to learn more about the child so he asks him to write the name. The name is used then in the game field and in the rules modal window. 

  ![User varification](/documentation/log-in-code.png)

- To understand how to make a modal window I looked into the next projects which realise this feature in a different code manner: [Flash Cards](https://github.com/IuliiaKonovalova/flash_cards), and [Sunshine Guessing Game.](https://aleksandracodes.github.io/CI_PP2_SunshineGuessing/index.html)

### **Helpsheets and learning materials**

- Throughout the start of this website build I relied heavily on the tutorials from the Code Institute JavaScript Essentials part. I am very thankful to Anna Greaves, content developer of the Code Institute.

- My mentor Juliia Konovalova assisted me throughout the project development. She helped me to understand how to improve the user experience of the project. Understanding the confusing Java Script syntax at the beginning of the project was not easy for me. Juliia cheered me up and motivated me to carry on. I appreaciate her contribution to my progress.

- Chosing the design for the buttons I used the next two websites [Codepen](https://codepen.io/) and [Webdeasy.](https://webdeasy.de/top-css-buttons/?utm_content=cmp-true&fbclid=IwAR0_wlgRsKiVloPtwRA7IKqEeEYxZQ31WEMD4tyNR4oiWItjKSKOrfOLh4E)

- [How modal works](https://getbootstrap.com/docs/5.0/components/modal/#live-demo)

- [Background CSS Water Effects](https://freefrontend.com/css-water-effects/)


### **Media**

- [Crab logo image](https://pixabay.com/de/illustrations/krabbe-animation-musik-spielen-7918611/?fbclid=IwAR2OvWkPVaVlLdqZFJ0IVmyrboZSHhJ2SDaS9CNDwVkuklVTwmSalw0QMyo)


### **Technologies used**

- [Favicon](https://favicon.io/favicon-converter/) Generator 
- [Canva Pro](https://www.canva.com/) was used to edit images for documentation and for making Wireframes.
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for fonts
- [Adobe Fresco](https://www.adobe.com/products/fresco.html) for image creation
- [CSS animation](https://www.w3schools.com/css/css3_animations.asp) to style the logo image and logo title.

## Wireframes
------
![Wireframe](/documentation/set-wireframe.png)

