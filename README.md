# BidBay 

Welcome to BidBay! This is a full-stack web application built using Django Rest Framework for the backend and React.js for the frontend. The website allows users to bid on various items and manage their bids efficiently.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User authentication and authorization
- Browse and search for items available for bidding
- Place bids on items
- View bid history and status
- Real-time bid updates
- Admin panel for managing items and bids

## Technologies Used

### Backend
- [Django](https://www.djangoproject.com/)
- [Django Rest Framework](https://www.django-rest-framework.org/)
- [PostgreSQL](https://www.postgresql.org/) (or any other preferred database)

### Frontend
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/) (for state management)
- [Axios](https://axios-http.com/) (for making API requests)
- [Material-UI](https://material-ui.com/) (for UI components)

## Getting Started

### Prerequisites

Make sure you have the following software installed on your machine:
- Python 3.x
- Node.js
- npm or yarn
- PostgreSQL (or any other preferred database)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/bidding-website.git
    cd bidding-website
    ```

2. Set up the backend:
    - Navigate to the backend directory:
      ```sh
      cd backend
      ```
    - Create and activate a virtual environment:
      ```sh
      python -m venv env
      source env/bin/activate  # On Windows use `env\Scripts\activate`
      ```
    - Install the required packages:
      ```sh
      pip install -r requirements.txt
      ```
    - Set up the database and apply migrations:
      ```sh
      python manage.py makemigrations
      python manage.py migrate
      ```
    - Create a superuser to access the admin panel:
      ```sh
      python manage.py createsuperuser
      ```
    - Start the Django development server:
      ```sh
      python manage.py runserver
      ```

3. Set up the frontend:
    - Navigate to the frontend directory:
      ```sh
      cd ../frontend
      ```
    - Install the required packages:
      ```sh
      npm install
      ```
    - Start the React development server:
      ```sh
      npm start
      ```

4. Open your browser and navigate to `http://localhost:3000` to see the application running.

## API Endpoints

The following are the main API endpoints provided by the backend:

- `POST /api/auth/login/` - Log in a user
- `POST /api/auth/register/` - Register a new user
- `GET /api/items/` - List all items available for bidding
- `GET /api/items/:id/` - Retrieve details of a specific item
- `POST /api/items/:id/bid/` - Place a bid on an item
- `GET /api/user/bids/` - Retrieve all bids made by the authenticated user

For detailed API documentation, please refer to the backend `README.md` or use a tool like [Postman](https://www.postman.com/) to explore the endpoints.

## Contributing

We welcome contributions to the project! If you have any ideas, bug reports, or pull requests, feel free to open an issue or submit a pull request. Please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, please feel free to contact us at [your-email@example.com](mailto:your-email@example.com).

---

Thank you for using the Bidding Website! We hope you find it useful and enjoyable. Happy bidding!
