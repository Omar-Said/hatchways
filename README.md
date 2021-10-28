# Student Profile

A simple app that displays a student's profile that used TypeScript and Redux-Saga.

## Try it out!

[Student Profile](https://student-profile-cards.netlify.app/)

## Install and Run

CLI Commands for Download, Local Installation and Start

```
https://github.com/Omar-Said/hatchways.git

cd hatchways

npm i && npm start
// -> Visit http://localhost:3000

```

## UI Decisions

- <b>Styled Components</b>: I chose to use styled components due to the power that this library contains. It has great reusability and works great with TypeScript. I decided to refrain from using Bootstrap or Material or Tailwind as this is a simple project and I wanted to avoid the boilerplate.

## My Toolbox

Get set up with these very quickly using [create-next-app]

      npx create-react-app student-profiles --template typescript

### :card_file_box: &nbsp;&nbsp;[Redux](https://redux.js.org/)

### :toolbox: &nbsp;&nbsp; [Redux-Saga](https://redux-saga.js.org/) | [Styled Component](https://styled-components.com/) | [Axios](https://axios-http.com/docs/intro)

Created Types for JSON response from the REST. API

## App Configuration & State Management

<b>Constants</b>

- API url

<b>Global State</b>

- `students`: JSON data

<b>Actions</b>

- `FetchStudents`: Get students from the REST API.
- `AddTag`: Adds a tag to a student's profile.

## Would be nice to have:

- Added Jest testing.
- CSS animations for expandable view
- Enhanced loading and error handling
- Data persistence

## Thank You!

Thanks, Mosaic, for this take home challenge.

Roughly, I spent:

- 12 hours create the components and complete the CSS.
- 1 hour of testing
- 30 minutes on documentation
- 10 minutes to deploy
- 1 hour codebase cleanup and minor refactors

Really enjoyed working on this mini project, Cheers!
