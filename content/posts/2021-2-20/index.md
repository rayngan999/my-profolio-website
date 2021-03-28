---
path: "/PopMatch"
cover: "./logo.png"
date: "2021-01-20"
title: "PopMatch"
published: true

---
#PopMatch
<hr>

<img src="https://user-images.githubusercontent.com/52867931/110848697-3ce5d300-8263-11eb-90bb-ad46beca2aee.png" width="100">  is a video chatting app that allows users to have 1 on 1 meetings with new people and like minded thinkers. It's a way to create social bonds and network for university students. 



##Description

Our app aims to mitigate the lack of social interaction as a result of the pandemic and having everything go virtual. With PopMatch, users are able to create a profile with a short personalized interest form. Based on the availablity of current users online, they will get match with someone they have the most in common with. Once they both accept the match, they can have an extendable 5 minute video chat filled with fun ice-breaker questions to keep the conversation going. If they want to extend this further, they can also exchange social medias with a press of a button that leads right them to the other's social media profile. PopMatch combines the well-liked features of being able to meet new people like Omelge while giving them the choice in who they actually talk to similarly to Tinder, but with a touch of personalized mutual interest matching.

## App Flow
<img src="https://i.ibb.co/MVWsyyT/Apple-i-Phone-11-Pro-Max-Space-Grey-2.jpg"> <br>

 <img src="https://i.ibb.co/3FFBkTC/Apple-i-Phone-11-Pro-Max-Space-Grey-3.jpg"> <br>

<img src="https://i.ibb.co/sKTppym/Apple-i-Phone-11-Pro-Max-Space-Grey-4.jpg">



<br>

### Login VC & Sign Up VC
Here, returning users can login again if they have previously logged out. This will lead them to the profile view controller upon successful login. For the first time users, they can start by signing up and starting their PopMatch profile. This will lead them to the friend view controller.

### Friend VC 
For the first time users, here is where they will be first navigated to so that they can fill out a questionnaire regarding their basic demographic and some interests which will used in our algorithm. However, if you are a returning user, you can always revisit here from the profile view controller and make changes your selections.

### Profile VC
This is like the home page where users are redirected upon login and is the source of navigation to the others such as joining the lobby for a match, signing out, or the personal interest questionnaire. Here, users can make changes regarding their account info and profile picture.

### Lobby VC
Here is where the users will be waiting to get a match with other currently online users. They'll be shown a loading bubble animation while our matching algorithm runs in the background. Once a match has been found, a larger bubble will be displayed on the screen.

### Matching and Pre-Meeting VC
With a match found, this is where the users will be shown the profile of their match along the options to accept or reject the call and a countdown timer for them to make their choice. They can also press on bubble with the matched user's profile picture to view a more detailed description with their selections from the questionnaire. Upon an acceptance, the user will be directed to the loading pre-meeting view controller to wait while the matched user makes their choice to accept or not.

### Meeting VC
Here lies the core of our app - the video chatting. After both the matched users accept, this is where they can begin to chat and (hopefully) be the start of a new friendship :) They can discuss some fun and debatable ice-breaker questions to get a conversation going, and even extend the call time to keep chatting. This is also where can take this conversation a step furthur and share social medias with each other now that they've made a new friend.


## My Roles & Contribution:
  * Created MeetingViewController for video chatting
  * Implemented Twilio Video API for the video chat
  * Created Twilio video user authentication tokens generation flow
  * Added timer model to video room using firebase's Realtime database
  * Implemented basic video functionalities (Such as add time, turn on/off camera, turn on/off mic, inbox, and end call)
  * Added Icebreaker quiestions for the video room
  * Improved sending and receiving social media user experince for the video chat
  * Created accept/reject flow logic in MatchingViewController with firebase's Realtime database
  * Created PreMeetingViewController to act as waiting room 


<br>

<a style="font-weight:bold" href="https://github.com/rayngan999/PopMatch">Github Link</a>

<br>

<img src="https://user-images.githubusercontent.com/52867931/110848697-3ce5d300-8263-11eb-90bb-ad46beca2aee.png" width="200"> 