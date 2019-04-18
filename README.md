# CBC Listen Fullstack Developer Assessment

This assessment is designed to test a candidate’s abilities to:

- create an API endpoint on the server that consumes an external API.
- consume an API endpoint client side.
- display the response data in the DOM.

## The Task

Your task is to complete a web page that displays the schedule for a selected CBC Radio One region. The schedule is a list of programs that will be airing in the next 24 hours. The page currently has a `select` element that contains different CBC Radio One regions. On page load, the page should initially display the schedule for the selected option (toronto). When the `select` is changed, the schedule should update to the selected region. You will need to do the following to achieve this:

- In `index.js`, complete the `/schedule/:regionID` Express route. It should consume `https://cbc.ca/listen/api/v1/program-queue/1/:regionID` and return a JSON array of `Program` objects. `regionID` is one of the select values.
- In `static/main.js`, complete the `populateSchedule` function. 
- `populateSchedule` should consume the local endpoint `/schedule/{regionID}` where regionID is one of the values of the select (eg. toronto).
- `populateSchedule` should be called on initial load as well as on change of the select element.

This application only needs to support the latest version of Chrome. Feel free to ask us for help or clarification. 

## Project Structure

The project contains the following files:

- `index.js`: contains the Express server of the application.
- `static/main.js`: contains all client side JS.
- `static/index.html`: contains the HTML markup for the application.
- `static/main.css`: contains the CSS rules for the application. No changes will need to be made here.

## Getting Started

This project requires NodeJS

Unzip the folder and run npm install:

```
npm install
```

To start the application, run:

```
npm run start
```

Navigate to http://localhost:3000 and you should see the application running.

## How to Submit

- delete the node_modules folder.
- zip the project folder send it as an attachment to us.

## Tips 

- The server will restart when code is modified.
- `createProgramListItem` in `static/main.js` will create a DOM element for a program list item.
- No additional frameworks or libraries are needed (jQuery is included if you need it).
- Feel free to use any online resources.
- There are additional contextual hints in the code.

## Bonus Points

If you've completed the assessment and would like to demonstrate some additional skills, try the following:

- Modify `createProgramListItem` in `static/main.js` to wrap the list item content in a link that opens a CBC Listen program detail page in a new tab. The url convention for program detail pages is `https://www.cbc.ca/listen/live-radio/1-{showID}-{showSlugTitle}`. For example: https://www.cbc.ca/listen/live-radio/1-63-the-current. You will need to modify the `Program` class and the response of `/schedule/:regionID` in `index.js` to return the additional properties.
