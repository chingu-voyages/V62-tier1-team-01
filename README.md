# NEXA - AI Learning Path Generator
> NEXA is a React web application that creates an AI-tailored step-by-step learning path for any user's career goal in the tech industry. It takes a daunting task of deciding what to learn first, and gives a clear answer tailored to the user's experience level, interest and time commitment, making sure they are geared towards success. While also building a useful web application, my team and I are also learning how to collaborate using the Scrum Agile methodology, over our 7 week Chingu voyage. We're excited to show you what we build!

**Live version**: https://nexa-ai-learning-path.netlify.app/

**Staging version**: N/A at the moment

## Features
- ⏰ ***In Progress***: A visually-stunning landing page describing our webapp's mission, features and value
- ⏰ ***In Progress***: An intuitive user form that asks for a user's desired career path, current skills, time commitment as well as desired pace
- ⏰ ***In Progress***: An AI-Generated custom learning path including clearly labeled steps with the name of each skill, a description and estimate time to complete
- ⏰ ***In Progress***: Keyboard and screen-reader accessibility
- ⏰ ***In Progress***: Option for choosing light and dark mode
- ⏰ ***In Progress***: AI Input Validation/Output formatting (@umfrancisco what should I add here?)


## Acceptance Criteria
* [x] Your GitHub repo contains a well-written `README.md` that includes a link
  to your deployed app, a description of the project, and the names/GitHub
  profiles of all team members.
* [ ] The deployed app is accessible and fully usable in a modern web browser
  without any console errors.
* [ ] The form validates required input (e.g., career goal) before submission,
  and displays clear, specific error messages when input is missing or invalid.
* [ ] The generated learning path is displayed in a clear, organized format with
  each step visually distinct and progression/order clearly indicated.
* [ ] A loading state is shown while the AI request is processing, and a clear
  error message is shown if the AI request fails.
* [ ] Users can regenerate a new path with different input, and the old path is
  cleared or replaced rather than left on screen alongside the new one.
* [ ] The UI is responsive and usable on both desktop and mobile screen sizes.
* [ ] App is accessible to keyboard users and via screen readers
* [ ] Users can choose light or dark mode
* [ ] Users can decide what learning pace they'd like, such as Relaxed, Balanced or Intensive(in addition to time commitment field)
* [ ] AI Input Validation/Output Formatting (@umfrancisco, could you add more details here? I'm forgetting what you meant by this feature)

## Getting Started

1. Clone the repo to your local machine.
2. In your file navigator application, navigate to the folder with the git repo inside. Then open the folder in your code editor of choice.
3. Install all the necessary npm dependencies.
4. Open the terminal and start the frontend Vite development environment.
5. Now you can preview the development version of the NEXA web app!

### Prerequisites

The things you need before downloading the web application.

* LTS (long term support) version of Node installed (recommend [v24.21.0 for Mac, Windows and Linux](https://nodejs.org/en/download)).
* A terminal (i.e. Bash, PowerShell, etc.).
* A code editor if you plan on inspecting, editing, or contributing to the code.
* The following dependencies:
    * `react: ^v19.2.8` [Documentation](https://react.dev/)
    * `react-dom: ^v19.2.8` [Documentation](https://react.dev/reference/react-dom)
    * `prettier: ^v3.9.6` [Documentation](https://prettier.io/docs/)
    * `@google/generative-ai: ^v0.24.1` [Documentation](https://www.npmjs.com/package/@google/generative-ai)
  
### Environment Setup

A step by step guide that will tell you how to get the development environment up and running.

First, clone the project from Github:
```
$ git clone https://github.com/chingu-voyages/V62-tier1-team-01.git
$ cd V62-tier1-team-01/
```

Then install all dependencies, create the `.env` file and add the Gemini API key, then run the Vite development server:
```
$ npm install
$ cat .env.def > .env //Add Gemini API Key to this file
$ npm run dev //Runs the Vite dev server
```

Now you should be able to view the full website locally from your machine by typing `http://localhost:5173` into your browser of choice.

To view the code itself, run the following commands:
```
$ cd V62-tier1-team-01/
$ code .
```
> **Note**: The last command works if you have your code editor (i.e. Visual Studio Code) configured to open up your editor from the terminal.

## Team Documents

You may find these helpful as you work together to organize your project.

- [Team Project Ideas](./docs/team_project_ideas.md)
- [Team Decision Log](./docs/team_decision_log.md)

Meeting Agenda templates (located in the `/docs` directory in this repo):

- Meeting - Voyage Kickoff --> ./docs/meeting-voyage_kickoff.docx
- Meeting - App Vision & Feature Planning --> ./docs/meeting-vision_and_feature_planning.docx
- Meeting - Sprint Retrospective, Review, and Planning --> ./docs/meeting-sprint_retrospective_review_and_planning.docx
- Meeting - Sprint Open Topic Session --> ./docs/meeting-sprint_open_topic_session.docx

## Our Team

<!-- 
Everyone on your team should add their name along with a link to their GitHub
& optionally their LinkedIn profiles below. Do this in Sprint #1 to validate
your repo access and to practice PR'ing with your team *before* you start
coding!
-->

- Winona Murphy: [GitHub](https://github.com/wmurphy-collabstar) / [LinkedIn](https://linkedin.com/in/winona-murphy-840048170)
- Francisco Guitler: [GitHub](https://github.com/umfrancisco) / [LinkedIn](https://linkedin.com/in/francisco-guitler)
- Claire Lee: [GitHub](https://github.com/llsy97) / [LinkedIn](https://linkedin.com/in/seungyeon-lee-claire)
- Hany Ragheb: [GitHub](https://github.com/hany2working-dev) / [LinkedIn](https://www.linkedin.com/in/hany-han-909380296/)
- Qusay AlTaslaq: [GitHub](https://github.com/QusayAlTaslaq) / [LinkedIn](https://www.linkedin.com/in/qusay-al-taslaq/)
