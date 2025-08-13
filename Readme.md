# Yatra - A Ride-Sharing Platform

Yatra is a full-stack ride-sharing application. It includes a backend API for managing users, captains, rides, and map services, along with a frontend built with React and Vite.

---

## Backend API Documentation

### `/users/register` Endpoint

* **Description**: Registers a new user.
* **HTTP Method**: `POST`
* **Request Body**:
    * `fullname` (object):
        * `firstname` (string, required, min 3 chars)
        * `lastname` (string, optional, min 3 chars)
    * `email` (string, required, valid email)
    * `password` (string, required, min 6 chars)
* **Example Response**:
    ```json
    {
      "user": {
        "fullname": {
          "firstname": "Yash",
          "lastname": "Verma"
        },
        "email": "yashu@example.com"
      },
      "token": "JWT_TOKEN"
    }
    ```

### `/users/login` Endpoint

* **Description**: Authenticates a user and returns a JWT token.
* **HTTP Method**: `POST`
* **Request Body**:
    * `email` (string, required)
    * `password` (string, required)
* **Example Response**:
    ```json
    {
      "user": {
        "fullname": {
          "firstname": "Ayush",
          "lastname": "Kumar"
        },
        "email": "Ayush@example.com"
      },
      "token": "JWT_TOKEN"
    }
    ```

### `/users/profile` Endpoint

* **Description**: Retrieves the authenticated user's profile.
* **HTTP Method**: `GET`
* **Authentication**: `Authorization: Bearer <token>`
* **Example Response**:
    ```json
    {
      "user": {
        "fullname": {
          "firstname": "Ayush",
          "lastname": "Kumar"
        },
        "email": "Ayush@example.com"
      }
    }
    ```

### `/users/logout` Endpoint

* **Description**: Logs out the current user.
* **HTTP Method**: `GET`
* **Authentication**: `Authorization: Bearer <token>` or via cookie.
* **Example Response**:
    ```json
    {
      "message": "Logout successful"
    }
    ```

---

### `/driver/register` Endpoint

* **Description**: Registers a new captain.
* **HTTP Method**: `POST`
* **Request Body**:
    * `fullname` (object):
        * `firstname` (string, required, min 3 chars)
        * `lastname` (string, optional, min 3 chars)
    * `email` (string, required, valid email)
    * `password` (string, required, min 6 chars)
    * `vehicle` (object):
        * `color` (string, required, min 3 chars)
        * `plate` (string, required, min 3 chars)
        * `capacity` (number, required, min 1)
        * `vehicleType` (string, required, one of 'car', 'motorcycle', 'auto')
* **Example Response**:
    ```json
    {
      "captain": {
        "fullname": { "firstname": "Yash", "lastname": "Verma" },
        "email": "yash@example.com",
        "vehicle": { "color": "Blue", "plate": "ABC-123", "capacity": 4, "vehicleType": "car" }
      },
      "token": "JWT_TOKEN"
    }
    ```

### `/driver/login` Endpoint

* **Description**: Authenticates a captain and returns a JWT token.
* **HTTP Method**: `POST`
* **Request Body**:
    * `email` (string, required)
    * `password` (string, required)
* **Example Response**:
    ```json
    {
      "captain": {
        "fullname": { "firstname": "Yash", "lastname": "Verma" },
        "email": "yash@example.com",
        "vehicle": { "color": "Blue", "plate": "ABC-123", "capacity": 4, "vehicleType": "car" }
      },
      "token": "JWT_TOKEN"
    }
    ```

### `/driver/profile` Endpoint

* **Description**: Retrieves the authenticated captain's profile.
* **HTTP Method**: `GET`
* **Authentication**: `Authorization: Bearer <token>`
* **Example Response**:
    ```json
    {
      "captain": {
        "fullname": { "firstname": "Yash", "lastname": "Verma" },
        "email": "yash@example.com",
        "vehicle": { "color": "Blue", "plate": "ABC-123", "capacity": 4, "vehicleType": "car" }
      }
    }
    ```

### `/driver/logout` Endpoint

* **Description**: Logs out the current captain.
* **HTTP Method**: `GET`
* **Authentication**: `Authorization: Bearer <token>` or via cookie.
* **Example Response**:
    ```json
    {
      "message": "Logout successful"
    }
    ```

---

### `/maps/get-coordinates` Endpoint

* **Description**: Get coordinates for an address.
* **HTTP Method**: `GET`
* **Request Parameters**:
    * `address` (string, required)
* **Example Response**:
    ```json
    {
      "ltd": 37.4224764,
      "lng": -122.0842499
    }
    ```

### `/maps/get-distance-time` Endpoint

* **Description**: Get distance and travel time between two locations.
* **HTTP Method**: `GET`
* **Request Parameters**:
    * `origin` (string, required)
    * `destination` (string, required)
* **Example Response**:
    ```json
    {
      "distance": { "text": "2,789 miles", "value": 4486540 },
      "duration": { "text": "1 day 18 hours", "value": 154800 }
    }
    ```

### `/maps/get-suggestions` Endpoint

* **Description**: Get autocomplete suggestions for an address.
* **HTTP Method**: `GET`
* **Request Parameters**:
    * `input` (string, required)
* **Example Response**:
    ```json
    [
      "1600 Amphitheatre Parkway, Mountain View, CA, USA"
    ]
    ```

---

### `/rides/create` Endpoint

* **Description**: Creates a new ride.
* **HTTP Method**: `POST`
* **Authentication**: `Authorization: Bearer <token>`
* **Request Body**:
    * `pickup` (string, required, min 3 chars)
    * `destination` (string, required, min 3 chars)
    * `vehicleType` (string, required, one of 'auto', 'car', 'moto')
* **Example Response**:
    ```json
    {
      "ride": {
        "user": "USER_ID",
        "pickup": "Pickup Address",
        "destination": "Destination Address",
        "fare": 150.50,
        "status": "pending",
        "duration": 900,
        "distance": 5000,
        "otp": "1234"
      }
    }
    ```

### `/rides/get-fare` Endpoint

* **Description**: Retrieves a fare estimate.
* **HTTP Method**: `GET`
* **Authentication**: `Authorization: Bearer <token>`
* **Request Parameters**:
    * `pickup` (string, required)
    * `destination` (string, required)
* **Example Response**:
    ```json
    {
      "auto": 50.0,
      "car": 75.0,
      "moto": 40.0
    }
    ```

---

## Frontend

The frontend is built using **React + Vite**.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
