---
path: "/cash&card"
cover: "./card.jpg"
date: "2020-12-20"
title: "Cash&Card"
published: true

---
#Cash & Card
<hr>

A wallet app that uses phone numbers to save balances for different accounts and is able to do normal account transactions such as transfer, withdraw, and  deposit. It is written in swift using Xcode.

View Controllers:
Login page, Verification Page, Account Overview, Transition Page

<img src = "https://i.ibb.co/Q7gx033/home.jpg">

<br>

###Functionalities

- Recognize correct phone number format
- Send verification code to verify number is valid
- Use API to save phone number, username, and account details
- Add or remove accounts
- Deposit or withdraw money from each account
- Allow transfer of money from one account to another

<br>

###Login

Cash & Card will use the phone number for authentication. To be more specific, Cash & Card will take a phone number from the user and send a verification code to this phone number by text message. Cash & Card will then ask the user to enter the code and verify the user's identity. If the user was the previous user logged in, the verification process will be skipped and will transition into wallet view.

<br>

###Verification

From the login screen, the app will send out the verification code to the phone number that the user entered. After that, you need to instruct users to enter the verification code that they received; verify if the code is correct. My app uses an API to send the verification code to the entered phone number, and verify the entered code. Here is a short snippet of code that displays how the API is being used. Partial entering and partial deletion is supported. A delegate is also used to fix the deletion bug.

<img src="https://i.ibb.co/HrVvH8r/veri.png">

<br>

###Class.swift

<br>

####Storage
This structure stores two variables locally on the device (or simulator). This struct redefined the set and get of these two variables. As a result, whenever the variables are set or are obtained from them, additional steps will be made. And the value that is passed to the variables will be saved to the device, or when reading from the variables, the value will be read from the device. The usage is provided as comments in the file

####Wallet and Account	
This class defined a wallet that contains all the information related to the logged in user. It contains a user name, a phone number, a total amount, and a list of accounts. For each account, there is a unique ID, a name and an amount.	

<br>

###Api.swift

After the `Api.verifyCode` is used and successfully verified by the user without any error, the `response` contains the information that is related to the phone number that is sent back from the server.

<img src ="https://i.ibb.co/VQh8RB5/api.png">

###Account View

Contains all the accounts information of the user presented using UITable. When an account is selected, there will be four account actions the user can perform: Deposit, Withdraw, Transfer, and Delete. All of the actions will be saved to the API under the user’s account. User can also add or delete accounts in the account view.

<img src="https://i.ibb.co/By64CwZ/account.png">
 

###Account Actions API Reference
<img src ="https://i.ibb.co/VWy7qbf/account-Actions.png">