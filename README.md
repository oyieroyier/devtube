# DevTube

## Description

DevTube is a minimalist website made for Developers that that allows users to watch YouTube tutorials and code within the site using the embedded Compiler.

## User Story

- A DevTube user can:
  1.  Sign Up for an account (or Sign In if they are a returning user)
  2.  Search for a YouTube video on the site.
  3.  Watch the YouTube video on the site.
  4.  Code on the site using a provided compiler API.

## Project Setup

This project has been handled using JavaScript programming langage, Hyper Text Markup Language (HTML) and Cascading Style Sheets (CSS).

In order to use the content on this repository ensure you have the following:

- A computer running on either Windows 7+, Linux or Mac OS.

- Mozilla Firefox, Safari or any Chromium-based browser.

## Running application

- Click on the live link [HERE](https://tubedev.netlify.app/) to launch the site with your browser.

- The link takes you to a dummy DevTube authentication page.
  Try out the different options by clicking on either **Sign Up** or **Login Here**.
  Refresh the page if you want to try out the other button.
- Upon signing up/in, the application takes you to the landing page with a welcome message and a brief introduction to what DevTube is about.
- Search any video (preferably a coding tutorial 😉) in the search bar.
- From the results (*I have currently capped the maximum results at 5 to avoid quickly depleting the daily quota of calls to the YouTube API*), click on the video you want to watch.
- Clicking on a video loads the IDE/Compiler at the bottom of the page.
- Select the language from the  your tutorial is in and get coding in the IDE.
- The Standard Output of your code will be displayed on the right of the IDE.


## Technologies

- HTML
- CSS
- JavaScript
  ​

## Author

Project contributed to by:

- [Bob Oyier](https://github.com/oyieroyier)
	Email me at: boboyier92@gmail.com
	Call me at: +254-722-2709-69

### GNU AFFERO GENERAL PUBLIC LICENSE Version 3

[![License: ICL](https://img.shields.io/badge/License-GNU%20Affero%20General%20Public%20License%20version%203-blue)](https://opensource.org/licenses/AGPL-3.0)







## Challenge 1: Student Grade Generator (Toy Problem)

### Description

Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade:

```
- A = 80 to 100
- B = 60 to 79
- C = 50 to 59
- D = 40 to 49
- E = less 40.
```

### Running the application

Running the application is very straight forward. 

- Open the student_grade_generator.html file in Mozilla Firefox, Safari or any Chromium-based browser.

- The browser window will prompt you to enter a score.

- Enter any number between 0 and 100. Or above 100 if you think you passed too well in your exam.

- The browser will return your marks as a grade between A and E.

Refresh the browser window to enter another mark in prompt.

## Challenge 2: Speed Detector (Toy Problem)

### Description

Write a program that takes as input the speed of a car e.g 80.
If the speed is less than 70, it should print “Ok”.
Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

### Running the application
Running the application is very straight forward. You can use the following steps to run the app.

- Install required dependencies from npm

      npm install

- On line 30, replace the parameter *speed* in the function with any number.

- Run the speed_detector.js application

      npm start speed_detector.js

## Challenge 3: Net Salary Calculator (Toy Problem)
### Description

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits.
Calculate the PAYE (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary.

NB: Use KRA, NHIF, and NSSF values provided in the links [HERE](https://www.aren.co.ke/payroll/taxrates.ht "LINK") and [HERE](https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye)

### Project Setup:

Open the _net_salary_calculator.js_ file.
On line 123, passa actual figures as arguments to replace theparemeters _basicPay_ and _benefits_.

### Running the application
Running the application is very straight forward. You can use the following steps to run the app.

- Install required dependencies from npm

      npm install

- On line 120, replace the parameters *basicPay* and *benefits* in the function with any numbe.

- Run the speed_detector.js application

      npm start net_salary_calculator.js
