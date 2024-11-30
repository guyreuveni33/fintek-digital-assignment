# Weather Forecast Application

This project is a weather forecast application that provides real-time weather data, including temperature, precipitation, humidity, and a 5-hour hourly forecast, for a user-specified city. It consists of a **client-side** React application and a **server-side** Node.js backend.
![image](https://github.com/user-attachments/assets/d02b1d55-aea3-4071-aed2-8acc40b00e18)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
---

## Features

- Fetch and display real-time weather information for any city.
- Hourly weather forecast for the next 5 hours.
- Responsive design for mobile and desktop views.

---

## Technologies Used

### Client (Frontend)
- **React**: Frontend library for building the user interface.
- **Axios**: For making API requests.
- **CSS**: Styling the weather cards and layout.

### Server (Backend)
- **Node.js**: Runtime environment for the server.
- **Express.js**: Web framework for creating RESTful API endpoints.
- **WeatherAPI**: Third-party weather API for fetching weather data.
- **Axios**: HTTP client for interacting with the WeatherAPI.


---

## Setup and Installation

### Step 1: Clone the Repository
```bash
git clone https://github.com/guyreuveni33/fintek-digital-assignment.git
cd fintek-digital-assignment
```

### Step 2: Setup the Server
1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

### Step 3: Setup the Client
1. Navigate to the `client` directory:
   ```bash
   cd ../client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

The application should now be running at [http://localhost:3000](http://localhost:3000).
