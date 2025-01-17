# Personal Website - Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/ecadc6ff-30f3-4f06-af50-1a7cef4f7e50/deploy-status)](https://app.netlify.com/sites/diogomatos/deploys)

## Overview

This project is my personal website, which serves as an online portfolio to showcase my work, skills, and experiences. It was designed in **Figma** and developed using **React** for the front-end and **CSS** for styling. The website includes sections such as **About**, **Experience**, and **Contact**, and is fully responsive, making it accessible on both desktop and mobile devices.

## Technologies Used

- **Figma**: Used for designing the website layout and user interface. The design focuses on a clean, modern look with user-friendly navigation.
- **React**: A JavaScript framework used to build the front-end. React allows for a dynamic and interactive user experience.
- **CSS**: Used for styling and layout. The styles are organized for both desktop and mobile devices using responsive design principles.
- **Visual Studio Code**: The integrated development environment (IDE) used for coding, debugging, and testing.
- **GitHub Actions**: Continuous Integration (CI) workflow is configured to ensure that code is always built, tested, and deployed efficiently.

## Features

- **Responsive design**: The website adapts to different screen sizes (mobile, tablet, and desktop).
- **Dark Mode**: A toggle to switch between light and dark themes.
- **Language Switch**: Support for multiple languages (English and Portuguese).
- **Interactive Navigation**: Smooth scroll and responsive navigation menu that adapts to mobile screens.

## Installation

To run this project locally, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/DiogoMatos10/portfolio.git
```

### 2. Navigate to the project directory:

```bash
cd portfolio
```

### 3. Install the dependencies:

```bash
npm install
```

### 4. Run the application locally:

```bash
npm run dev
```

This will start a development server, and you can open the website in your browser by navigating to `http://localhost:5173/`.

## Project Structure

- **src/**: Contains the source code for the React components, including components for header, footer, and content sections.
- **public/**: Contains static files such as images.
- **translations/**: Contains all translations of the website, in English and Portuguese.

## Continuous Integration (CI) with GitHub Actions

This project uses **GitHub Actions** for Continuous Integration (CI). The CI workflow is set up to run on every pull request to ensure that the code is built correctly before being merged.

### Workflow Overview

The CI workflow includes the following steps:

1. **Checkout repository**: Retrieves the latest code from the repository.
2. **Setup Node.js**: Installs Node.js (version 18.x) on the runner.
3. **Install dependencies**: Installs the required npm dependencies listed in the `package.json`.
4. **Build the project**: Runs the build command to generate the production build of the website.


### Explanation of Workflow Steps

1. **`actions/checkout@v3`**: This action checks out the repository, making it available for the next steps in the pipeline.
2. **`actions/setup-node@v2`**: This action sets up Node.js on the runner. The `node-version` is set to `18.x`, which is compatible with the dependencies in the project.
3. **`npm install`**: This command installs the dependencies listed in the `package.json` file. It ensures that all required packages are available for building the project.
4. **`npm run build`**: This command runs the build script defined in `package.json`. It generates the production build of the website in the `build/` directory, ready for deployment.

## Copyright

All rights reserved. This project is copyrighted by **Diogo Matos**. 

### Copyright Notice

```
Copyright (c) 2025 Diogo Matos. All rights reserved.
```

### Usage Restrictions

This project is protected by copyright law, and you may not use, copy, modify, or distribute the code without permission. If you wish to use parts of the code, please contact me directly for permission.

## License

This project is **NOT** licensed under the MIT License. All rights are reserved under copyright law.



