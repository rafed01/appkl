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
- [What I've Learned](#what-ive-learned)
- [Why I Chose to Work on This Project](#why-i-chose-to-work-on-this-project)
- [Contributing](#contributing)
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
- [PostgreSQL](https://www.postgresql.org/)

### Frontend
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/) (for state management)
- [Axios](https://axios-http.com/) (for making API requests)
- [Material-UI](https://material-ui.com/) (for UI components)
- [Bootstrap](https://getbootstrap.com/) (for responsive design)

## Getting Started

### Prerequisites

Make sure you have the following software installed on your machine:
- Python 3.10 or above
- Node.js
- npm or yarn
- PostgreSQL 

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/bidding-website.git
    cd bidding-website
    ```

2. Set up the backend:
    - Navigate to the backend directory:
      ```sh
      cd bidong
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
      cd ../frontend/bidbay
      ```
    - Install the required packages:
      ```sh
      npm install
      ```
    - Start the React development server:
      ```sh
      npm run dev
      ```

4. Open your browser and navigate to `http://localhost:5173` to see the application running.

## API Endpoints

The following are the main API endpoints provided by the backend:

- `POST /api/token/` - Log in a user and get a jwt token
- `POST /api/token/refresh/` - Refresh jwt token
- `POST /api/user/register/` - Register a new user
- `GET /api/items/` - List all items available for bidding
- `GET /api/bids/:id/` - Retrieve details of a specific item
- `POST /api/user-bids/:id/` - Place a bid on an item
- `GET /api/user-bids/` - Retrieve all bids made by the authenticated user

For detailed API documentation, please refer to  a tool like [Postman (https://www.postman.com/) to explore the endpoints.

## What I've Learned

Working on this project has taught me several valuable skills and concepts, including:

- **Backend Development**: Gained deeper understanding of Django and Django Rest Framework for building robust APIs.
- **Frontend Development**: Improved my skills in React and Redux for creating dynamic and responsive user interfaces.
- **Database Management**: Learned how to efficiently design and manage a PostgreSQL database.
- **Integration**: Enhanced my ability to integrate frontend and backend technologies to create a seamless user experience.
- **Real-Time Updates**: Implemented real-time bid updates to ensure users have the latest information.
- **Project Management**: Developed better project planning and time management skills.

## Why I Chose to Work on This Project

I chose to work on this project for several reasons:

- **Learning Opportunity**: I wanted to improve my full-stack development skills by working with Django and React.
- **Interest in Auctions**: I have always been fascinated by the dynamics of auctions and bidding systems, and this project allowed me to explore that interest.
- **Real-World Application**: Building a bidding website presents real-world challenges and scenarios, making it a great learning experience.
- **Community Contribution**: I aimed to create a useful application that could be beneficial for users and potentially used in real-world scenarios.
- **Portfolio Development**: This project adds significant value to my portfolio, showcasing my ability to build full-stack applications.

## Contributing

We welcome contributions to the project! If you have any ideas, bug reports, or pull requests, feel free to open an issue or submit a pull request.


## Contact

If you have any questions or suggestions, please feel free to contact us at [rafedriahi.rr@gmail.com](mailto:rafedriahi.rr@gmail.com).

---

Thank you for using BidBay! We hope you find it useful and enjoyable. Happy bidding!
