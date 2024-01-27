**Project Name: Personal Portfolio Website**

**Description:**
This is a personal portfolio website built using React.js and React Router. It consists of several components, including a home page, an about page, a projects page, a CV page, and a contact page. The website is designed to showcase the developer's skills and experiences, and to provide a way for potential employers or clients to get in touch.

**Getting Started:**

1. **Prerequisites:**

   - Node.js and npm installed on your system.
   - A code editor or IDE of your choice.

2. **Project Setup:**
   - Clone the project repository to your local machine.
   - Open the project folder in your code editor.
   - Run `npm install` to install the project dependencies.

**Project Structure:**

The project is structured as follows:

```
├── src
│   ├── component
│   │   ├── About
│   │   ├── Contact
│   │   ├── Cv
│   │   ├── Home
│   │   ├── Navbar
│   │   └── Projects
│   ├── App.js
│   ├── App.scss
│   ├── index.js
└── package.json
```

**Components:**

The website consists of several React components, each responsible for a specific section of the website.

- **Home:** This component displays the home page of the website, which typically includes a brief introduction to the developer and a summary of their skills and experiences.

- **About:** This component displays the about page, which provides more detailed information about the developer, including their background, education, and work experience.

- **Projects:** This component displays the projects page, which showcases the developer's past projects and provides links to more information about each project.

- **Cv:** This component displays the CV page, which provides a downloadable PDF version of the developer's CV.

- **Contact:** This component displays the contact page, which provides a form for visitors to get in touch with the developer.

**Routing:**

React Router is used to manage the routing of the website. The `Routes` component defines the different routes that the website can navigate to, and the `Route` components specify which component should be rendered for each route.

**Styling:**

The website is styled using CSS, which is included in the `App.scss` file. This file imports the styles for each component and defines the overall
