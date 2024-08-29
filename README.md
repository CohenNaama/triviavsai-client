# Trivia VS AI - Client Side

## Table of Contents
- [Current Development Status](#current-development-status)
- [Description](#description)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Development Progress](#development-progress)
- [Future Enhancements](#future-enhancements)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [License](#license)

## Current Development Status

**Note**: This application is currently in the development stages, with several functionalities fully operational, including user authentication, route management, and theming. Continuous improvements are being made to enhance the user experience and extend the application's features.

## Description

*Trivia VS AI* is a cutting-edge trivia game application built with a modern and dynamic user interface. The client side of this application is developed using React, featuring responsive design elements and interactive components to provide an engaging gameplay experience.

## Features

- **User Authentication**: Secure login and sign-up functionality with JWT-based authentication.
- **Dynamic Theming**: Neon-inspired themes with support for dark mode, implemented using Material-UI.
- **Reusable Components**: Custom styled components for consistent UI across the application.
- **Protected Routes**: Ensuring that only authenticated users can access certain parts of the application.
- **Responsive Design**: Built with responsiveness in mind to ensure a seamless experience across devices.

## Technology Stack

- **Frontend**: React, Material-UI (MUI)
- **State Management**: React Context API
- **Routing**: React Router
- **Styling**: CSS-in-JS (Emotion)
- **HTTP Client**: Axios

## Development Progress

The client-side application is currently in active development. The following key features have been implemented:

- **User authentication and profile management**: Secure user login, registration, and profile management functionalities.
- **Dynamic UI components with consistent theming**: Utilization of custom Material UI themes and reusable styled components for a cohesive look and feel.
- **Secure routing and navigation**: Protected routes and navigation management for both authenticated and non-authenticated users.
- **Integration with server-side AI models**: Real-time gameplay adjustments based on AI models integrated from the server side.

### Future Enhancements

- **Full leaderboard and social sharing functionalities**: Track player scores, display leaderboards, and enable social sharing to enhance user engagement.
- **Advanced game modes and multiplayer capabilities**: Introduce various game modes and support for multiplayer gameplay to enrich the user experience.
- **Comprehensive test coverage and CI/CD pipeline setup**: Ensure robust test coverage and establish a continuous integration and deployment pipeline for streamlined development and deployment.

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/CohenNaama/triviavsai-client.git
    cd triviavsai-client
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up environment variables**:

    Create a `.env` file in the root directory and add the following:

    ```plaintext
    REACT_APP_API_URL=http://127.0.0.1:5000
    ```

### Usage

To start the development server and begin developing the client-side application:

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
