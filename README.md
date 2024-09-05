
# MedNova OralHealth Frontend

![GitHub package.json version](https://img.shields.io/github/package-json/v/LoordhuJeyakumar/mednova-oralhealth-fe)
![GitHub License](https://img.shields.io/github/license/LoordhuJeyakumar/mednova-oralhealth-fe)
![GitHub last commit](https://img.shields.io/github/last-commit/LoordhuJeyakumar/mednova-oralhealth-fe)
[![Netlify Status](https://api.netlify.com/api/v1/badges/5f9bd0ba-c3d2-4298-94cb-2fda271635a1/deploy-status)](https://app.netlify.com/sites/mednova-oralhealth/deploys)

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Prerequisites](#prerequisites)
6. [Installation](#installation)
7. [Configuration](#configuration)
8. [Running the Application](#running-the-application)
9. [API Integration](#api-integration)
10. [Testing](#testing)
11. [Deployment](#deployment)
12. [Contributing](#contributing)
13. [License](#license)
14. [Contact](#contact)

## Introduction

The **MedNova OralHealth Frontend** is a React-based web application that allows users to assess and track their oral health through a series of questions and responses. The app provides a seamless user experience for creating profiles, submitting health responses, and receiving personalized feedback.

### Backend Repo:
[MedNova OralHealth Backend GitHub Repository](https://github.com/LoordhuJeyakumar/mednova-oralhealth-be)

### Deployed Links:
- Frontend App: [https://mednova-oralhealth.netlify.app/](https://mednova-oralhealth.netlify.app/)
- Backend API: [https://mednova-oralhealth-be.onrender.com/](https://mednova-oralhealth-be.onrender.com/)

## Features

- **User Authentication**: Signup and login with email verification (JWT-based).
- **Dynamic Questionnaires**: Users can answer health-related questions.
- **User Profile Management**: Edit user details and manage personal health information.
- **Customizable Responses**: Submit and track responses over time.
- **Health Assessment**: Get an overview of personal oral health via visual graphs.
- **Responsive Design**: Fully responsive design optimized for mobile and desktop devices.
  
## Tech Stack

**Frontend:**
- React.js (with hooks)
- React Router DOM for routing
- Bootstrap for UI styling
- Axios for API requests
- Context API for state management
- Formik and Yup for form validation
- React Router: For routing and navigation

**Other Dependencies:**
- `react-toastify`: To display success and error messages.
- `react-icons`: For adding icons throughout the application.
- `dotenv`: For environment variables.
  
## Project Structure

```sh
mednova-oralhealth-fe/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/              # Static assets like images
│   ├── components/          # Reusable components (Navbar, Footer, etc.)
│   ├── context/             # Context for global state management
│   ├── layout/             # layout for protected and public layout 
│   ├── pages/               # Pages for routing (Login, Dashboard, etc.)
│   ├── routes/               # routes for managing application routes Route configurations
│   ├── services/            # Axios service for API calls
│   ├── App.js               # Main app component
│   └── main.js            # Entry point for the React app
├── .env                     # Environment variables
├── .gitignore                # Git ignored files
├── index.html                
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation
```

## Prerequisites

Before running the project, ensure that you have the following installed:

- **Node.js** (v14.0.0 or later)
- **npm** (v6.0.0 or later)
  
## Installation

1. Clone the frontend repository:
   ```sh
   git clone https://github.com/LoordhuJeyakumar/mednova-oralhealth-fe.git
   ```

2. Navigate to the project directory:
   ```sh
   cd mednova-oralhealth-fe
   ```

3. Install the required dependencies:
   ```sh
   npm install
   ```

## Configuration

Create a `.env` file in the root directory of the project and add the following environment variables:

```sh
VITE_BASE_URL=https://exampleapiurl.com/api/v1/ # or the production API URL
```

Ensure to replace the values with your actual API base URL.

## Running the Application

To start the React development server:

```sh
npm run dev
```

The app will be accessible at `http://localhost:5173`.

## API Integration

The frontend communicates with the backend API using Axios. All API calls are organized within the `services` directory for easy management.

### Key API Endpoints:

- **User Authentication**:
  - `POST /user/signup`: Register a new user.
  - `POST /user/login`: Log in to the application.
  - `GET /user/profile`: Retrieve user profile details.
  - `PUT /user/update`: Update user profile.

- **Questions**:
  - `GET /question/all`: Fetch all available health-related questions.
  - `POST /user-response/submit`: Submit user responses to the questions.


## Services Overview

### API Instances

Axios is used to handle all HTTP requests. Two instances are created:
- **authInstance**: For authentication-related requests such as login and signup.
- **protectedInstance**: For requests requiring user authentication (JWT token is sent in headers).

### Base URL Configuration

The base URL for the API is dynamically set using the Vite environment variables:

```js
const baseURL = import.meta.env.VITE_BASE_URL;
```

### Questions Service

Handles all operations related to fetching questions:

```js
const questionsService = {
  getAllQuestions: async () => {
    try {
      const response = await instanceService.protectedInstance.get("/question/all");
      return { success: true, data: response };
    } catch (error) {
      handleError(error);
      return { success: false, error: error };
    }
  },
};
```

### User Response Service

Handles submitting user responses and fetching user statistics:

```js
const userResponseService = {
  submitResponse: async (data) => {
    try {
      const response = await instanceService.protectedInstance.post("user-response/submit", data);
      return { success: true, data: response };
    } catch (error) {
      handleError(error);
      return { success: false, error: error };
    }
  },
  getUserStats: async () => {
    try {
      const response = await instanceService.protectedInstance.get("user-response/stats");
      return { success: true, data: response };
    } catch (error) {
      handleError(error);
      return { success: false, error: error };
    }
  },
};
```

### User Service

Manages user authentication (signup, login, verification, etc.) and profile fetching:

```js
const userService = {
  signup: async (userData) => {
    try {
      const response = await instanceService.authInstance.post("user/signup", userData);
      return { success: true, data: response };
    } catch (error) {
      handleError(error);
      return { success: false, error: error };
    }
  },
  login: async (userData) => {
    try {
      const response = await instanceService.authInstance.post("user/login", userData);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return { success: true, data: response };
    } catch (error) {
      handleError(error);
      return { success: false, error: error };
    }
  },
  verify: async (token, userId) => {
    try {
      const response = await instanceService.authInstance.get(`user/verify/${userId}/${token}`);
      return { success: true, data: response };
    } catch (error) {
      handleError(error);
      return { success: false, error: error };
    }
  },
  getUser: async () => {
    try {
      const response = await instanceService.protectedInstance.get("user/profile");
      return { success: true, data: response };
    } catch (error) {
      handleError(error);
      return { success: false, error: error };
    }
  },
};
```

## Testing

Currently, there are no automated tests set up for the project, but testing is a future improvement area. You can write tests using tools like **Jest** and **React Testing Library**.

## Deployment

This application is deployed on **Netlify**. To deploy the application yourself:

1. Build the production-ready app:
   ```sh
   npm run build
   ```

2. Deploy the `build/` folder to a hosting service like **Netlify** or **Vercel** or any other platforms.

The app is currently live at: [https://mednova-oralhealth.netlify.app/](https://mednova-oralhealth.netlify.app/)

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## License

This project is licensed under the ISC License.

## Contact

For any questions or support, feel free to contact me:

- **Email**: [loordhujeyakumar@gmail.com](mailto:loordhujeyakumar@gmail.com)
- **Phone**: +91 9600693684

For issues, please open a ticket on the [GitHub issues page](https://github.com/LoordhuJeyakumar/mednova-oralhealth-fe/issues).
