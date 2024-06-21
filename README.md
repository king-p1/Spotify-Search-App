Spotify Search Application
Overview
This project is a web application that allows users to search for various types of media including tracks, albums, artists, genres, and podcasts using Spotify's API. The application is built using React and utilizes several modern libraries and tools such as axios, react-router-dom, mantine/core, and the Spotify API from RapidAPI.

Features
Search Functionality: Users can search for tracks, albums, artists, genres, and podcasts.

Dynamic Results Display: Search results are displayed dynamically with relevant details like artist names, release year, and album information.

Responsive Design: The application is fully responsive, ensuring a seamless user experience on both desktop and mobile devices.

Technologies Used
Frontend :
React: A JavaScript library for building user interfaces.
react-router-dom: A collection of navigational components that compose declaratively with your application. Used for handling routing in the app.
useLoaderData: A hook that provides access to the data returned by a loader function.
Await: A component that allows for handling asynchronous data fetching in a declarative way.
Suspense: A component used to show fallback content while waiting for data to load.
axios: A promise-based HTTP client for making requests to the Spotify API.
mantine/core: A library of React components and hooks for building UI, used here for the Select dropdown component.
react-icons: A library of icons for React, used for the search icon.

API
Spotify API (via RapidAPI): The Spotify API is used to fetch search results. RapidAPI provides a unified endpoint to access the Spotify API.

File Structure
src/components
Search.jsx: Contains the search bar component, which includes an input field, a dropdown for selecting search type, and a submit button.
SearchResults.jsx: Handles displaying the search results. It uses useLoaderData to fetch data and Await to handle asynchronous data loading.
SideBar.jsx: Placeholder for a sidebar component (if needed in future development).

src/pages
Home.jsx: The home page that contains introductory text and the search bar.
Layout.jsx: Defines the layout of the application, including a placeholder for nested routes.

src/utils
loaders.js: Contains the loader function used by react-router-dom to fetch data from the Spotify API.
src/App.jsx: The main entry point of the application, defining the routes and their associated components and loaders.

How to Run
Clone the Repository:

git clone https://github.com/yourusername/spotify-search-app.git
cd spotify-search-app


Install Dependecies:
npm install

Run the Application:
npm run dev

Open the Application:

The application should now be running at http://localhost:5173.

Environment Variables
Ensure you have a .env file in the root of your project with the following variables:

env
Copy code
VITE_RAPID_API_KEY=your_rapidapi_key

Replace your_rapidapi_key with your actual RapidAPI key.

Project Details:
Search Component (Search.jsx)

State Management: Uses React's useState to manage search input and selected search type.
Navigation: Utilizes useNavigate from react-router-dom to handle form submission and navigation to the search results page.

Search Results Component (SearchResults.jsx)

Data Fetching: Uses useLoaderData to fetch search results from the loader function.
Suspense and Await: Uses Suspense and Await to handle asynchronous data loading, displaying a loading state while data is being fetched.

Loader Function (loaders.js)
API Request: Uses axios to send a GET request to the Spotify API via RapidAPI.
Error Handling: Catches and logs errors, throwing an error if the data fetching fails.

Styling
CSS: The application is styled using plain CSS, with media queries to ensure responsiveness on different screen sizes.

Contributing
Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request.


