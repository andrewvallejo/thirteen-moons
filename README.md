
# <h1 align="center">Thirteen Moons 🌙</h1>

<div align="center">  

An actionable self-improvement app for spiritual souls to practice routine! Seek betterment over at [Thirteen Moons](https://thirteen-moons.netlify.app/).
  
Curious about my wireframe? Check it out on [Figma](https://www.figma.com/file/uHVglY9n41qDzZRELkm0LB/Thirteen-Moons)!
  
</div>

  <div align='left'>


## Features

> - 52 Cards with their image, points, and activities.
> - Ability to edit certain face cards for a custom challenges.
> - 13 Rounds in total, Each round user has presented 4 cards, they choose one thing to do. When they do it, points are added to the board.


## Installation & Start

Clone the project and install dependencies

```szh
git clone git@github.com:andrewvallejo/thirteen-moons.git
cd thirteen-moons
npm install 
npm start
```

## Roadmap  
    
> - Score Board adding up the total values of the cards chosen.
> - User profile that contains their cards and scores
> - Backend server to host user data
> - More dialog for the moon
> - The intro (which was drawn in the wireframe) 
     
  </div>

  
  
## Screenshots
    
![Demo Website launch](https://user-images.githubusercontent.com/17935770/128804326-c361e8e5-7fd0-46a3-8005-144c8a556cf8.png)

![Demo fill out form](https://user-images.githubusercontent.com/17935770/128804333-4ac2b5af-fd5f-44d6-8988-0ca52fb3fd53.png)

![Demo view cards](https://user-images.githubusercontent.com/17935770/128804340-753b06f5-b415-464c-af9e-3bdae70df8f5.png)

  

## <h2 align="center">  About the Author - **Andrew Vallejo**  </h2>

<div align="center">

#### **Learning Goals:** 
  Routing ins-and-outs, React hooks, implementing custom art pieces from wireframe into the project

#### **Challenges & Reflections:** 
  This project spanned over seven days. I wish I had five extra days so I could've had 13 moons in total to complete this project to satisfaction. The main challenge that presented itself was myself for I am always misgauging the difficulty of a challenge. I like to code how I imagine a test mouse would methodically go through a labyrinth with multiple paths each day, trying to find the shortest way to the goal possible, even if it means risking taking the long route. 
 <details>
  <summary>
Click below to read more
  </summary>
  <br> 
  <div align='left'>

  Thirteen Moons was supposed to be a project to flex what we knew to do in React. I tend to be over-ambitious and miscalculated, so I chose a simple API with only GET calls that drew playing cards. I ran into trouble with all aspects of this project, mainly due to the constraint of time. I am the kind of someone who tries to find ten different solutions to one problem that would work with one. This approach led to some remarkable discoveries, such as figuring out how to add a hover element to the playing cards, which had five layers stacked upon each other—or learning how to mutate state by using React's useReducer for the first time.
    
  I aspire to evolve my current project from everyone prior, but that gravitates in creating an 'over-engineered aspect of my projects. Unfortunately, since I'm not a super genius who codes at 200 words per minute, the lack of time led to delays in error handling and testing Cypress. I could not successfully create intercepts with stubs from my fixtures nor create any sad paths for my website since Router's redirect was invoked no matter the URL path. 
    
  Another challenge arose from how modular I made everything. Once I learned to access Match's path to render the components state without passing down Props conditionally. I directed my focus in making my components operate as isolated as they could from each other.My components inherited unpredictable behaviors, and since everything operating primarily on its own, it made troubleshooting take a lot longer. For example, having the card update the URL upon being clicked while keeping everything else in sync was challenging since it meant the cards themselves had more control of the game than App did. The effects from this decision did not bubble up until later when trying to implement error handling based on redirecting the URL whenever the user wandered astray.
    
  These challenges always bring up a different perspective, yet the following stress could always have been alleviated by taking fewer risks.  It's ironic since one of my strengths is that I am pretty good at reprioritizing, but unfortunately, my goals shift frequently. The Next attempt I want is to create issues on my project and never do anything more than what is on that ticket until I am done with all of the "need to be done" tasks. 
For me, I have a hard time flexing what I do know since I find the most value in showing off in my desire to explore new concepts and apply those. I need to learn to slow down and strengthen my foundation before moving on to the next exciting thing.



</details>
  
   </div>
  
   ---
  
<div align="center">  
<img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat-square" alt="React Badge">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat-square" alt="JavaScript Badge">
<img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=flat-square" alt="HTML5 Badge">
<img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat-square" alt="CSS3 Badge">
<img src="https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff&style=flat-square" alt="Sass Badge">
<img src="https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=fff&style=flat-square" alt="Netlify Badge" Badge">
</div>


                                                                                                                       
                                                                                                                     

<br>

<div align="center">

Follow me on [Github](https://www.github.com/andrewvallejo)!

Or find me on [Linkedin](https://www.linkedin.com/in/andrewvallejo/)!

</div>



