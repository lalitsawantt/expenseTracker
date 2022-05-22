# expenseTracker

## Introduction
  This is a front-end only Expense Tracker app created using [ReactJS](https://reactjs.org/). It supports basic one-time functionality for adding an expense/income, viewing the transaction history and downloading the transaction history as an excel (.xlsx) file. The session lasts till the user is on the page, the transactions and the total balance is not stored anywhere, so they will reset to empty as soon as the page refreshes/reloads. This app is currently live on [expenseTracker](https://expensetrackerlalit.netlify.app/).

## Motivation
  The motivation behind this project was to get back to implementing projects from scratch and learning new concepts as I go forward. This does not solve any current problems, it's just a demo project that I created by myself, taking the inspiration for the ui from a video by [traversy media on youtube](https://www.youtube.com/watch?v=XuFDcZABiDQ). Although in the video, the app is made using context API, I have purely used react hooks and prop drilling to build this app. 

## Problem
  Building an expense tracker where the user can add their expenses and incomes and the balance is calculated by adding each income and subtracting each expense from the balance. The user should be able to download their current transaction history in a human readable way. 

## Solution
### Balance
The balance functionality is built into the parent component, and is passed down to the display component where the markup for the balance is present. Every time a transaction is added, a useEffect hook is triggered which re-calculates the balance and adds the transaction to the transaction history. A toast notification is triggered on the successful addition of the transaction.

### History
The transaction history is an array in which each transaction is stored as soon as it occurs in the form of an object with the value, description and type of the transaction. No transaction id is present as of now. These transactions are displayed on the screen with a right border indicating whether the transaction is an expense or an income. 

### Adding Transaction
There is a form present to add the transactions. The form consists of a description field and an amount field. These are controlled elements, the values of these elements are stored in the state using the useState hook. A positive value in the amount field indicates an income, and a negative value indicates an expense with the default value being an income unless specified by a negative sign before the amount. After each transaction is added, based on the sign of the amount, it's either considered as an income in case of a positive amount and added to the "Income" tab and added to the total balance, or in the case of a negative sign, it's added to the "Expense" tab and subtracted from the total balance.

### Downloading Transaction History
A third party library was used to implement this functionality where the csv data of the transaction history array was passed on to the library which then generates an excel file of the transaction history. The format of the excel is pretty basic and does not serve any actual purpose other than helping me learn how to add such a functionality. The excel file has the type of expense, the description and the amount. It does not calculate the total value, however that is a feature that's in my mind that I may implement in the future.

## Future Scope
  There are some issues and features that I have taken into consideration while building this app, but I do not consider them as priority since this is not a production grade application and I feel that the things I wanted to achieve through this project are already achieved, but just in case I or anyone else reading this wants to implement some of them, here are the ideas that may be helpful.
  * The addition of an expense might seem cumbersome given that the user has to add a negative sign before the amount and since no delete functionality is present, in case of a mistake, it will be troublesome to add an expense. Another way of adding an expense can be to have another dropdown/button which specifies whether the transaction is an expense/income
  * The transaction history can be improved by adding a date field to specify when the transaction had occured. 
  * The excel file for transactions can also specify the date of the transaction and also the total balance, the total income and the total expenses occured.
  * A database can be implemented to support persistent data storage so that this app can actually be used, but that would also require user configurations to be added.
  * A graph based on the weekly/monthly/yearly spendings and incomes to help the user identify their transaction patterns.

## Installation
To install this project:
1. Clone the repo into your local machine by using `git clone https://github.com/lalitsawantt/expenseTracker.git`.
2. Open a terminal/command prompt window in the cloned repo.
3. Use `npm install` to install all the packages and libraries.
4. Use `npm start` or `npm run start` to start the project on localhost:3000
5. Have fun
