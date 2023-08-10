
# Dark_Mode_Project

here's a step-by-step guide on how to create a React app with Tailwind CSS:

### Step 1: Install Node.js
Before you start, make sure you have Node.js installed on your computer. You can download it from the official Node.js website: https://nodejs.org/

### Step 2: Create a New React App
Open your terminal and run the following command to create a new React app using create-react-app:

```bash
npx create-react-app my-tailwind-app

```
Replace my-tailwind-app with your desired project name.

### Step 3: Navigate to the Project Directory
Move into the newly created project directory:

```bash
cd my-tailwind-app
```
### Step 4: Install Tailwind CSS and Dependencies
Install Tailwind CSS and its dependencies using npm:

```bash
npm install tailwindcss postcss autoprefixer
```
### Step 5: Create Tailwind Configuration Files
Generate the necessary configuration files for Tailwind CSS:

```bash
npx tailwindcss init -p
```
This command will create a tailwind.config.js file and a postcss.config.js file.

### Step 6: Configure Tailwind CSS
Open the tailwind.config.js file and configure it. You can customize various aspects of Tailwind CSS here, such as colors, fonts, and more.

### Step 7: Include Tailwind CSS in your CSS
In the src/index.css file, import Tailwind CSS:

```bash
/* src/index.css */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```
### Step 8: Running the App
```bash
npm start
```


## Dark Mode Toggle Component

The DarkModeToggle component is a React functional component that allows users to switch between dark and light modes. It includes two icons, one for each mode, and changes the appearance of the page accordingly. Here's a description of each part of the code:

## Deployment

To deploy this project run

```bash
  import React from "react";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <>
      <button
        className={`${darkMode ? "active" : ""}`}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <BsFillSunFill className="w-7 h-7 hover:scale-110" title="Light Mode"/> : <MdDarkMode className="w-7 h-7 hover:scale-110" title="Dark Mode"/>}
      </button>
    </>
  );
}
export default DarkModeToggle;
```

The DarkModeToggle component takes two props: darkMode (a boolean indicating the current mode) and setDarkMode (a function to toggle the mode).
Inside the component, there's a button element that triggers the mode toggle when clicked.
The button's appearance changes based on the darkMode state. If darkMode is true, it displays a sun icon (indicating light mode), and if false, it displays a moon icon (indicating dark mode).

## CSS Styling

To style the dark and light modes, you've defined CSS classes. Here's a description of the CSS rules you provided:

```bash
/* For the container that holds the entire page content */
.mode-container {
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
}

/* Styling for dark mode */
.dark {
    background-color: black;
    color: white;
}

/* Styling for light mode */
.light {
    background-color: white;
    color: black;
}

```
The .mode-container class defines the base styles for the entire page content. It ensures that the content occupies the full viewport and allows scrolling when needed.
The .dark class sets the background color to black and the text color to white, creating a dark mode appearance.
The .light class sets the background color to white and the text color to black, creating a light mode appearance.

### This is all about Dark_Mode Project

