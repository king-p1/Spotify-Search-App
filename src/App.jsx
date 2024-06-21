// Importing necessary libraries and components
import { searchLoader } from "./utils/loaders";
import SearchResults from "./components/SearchResults";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home";
import Layout from "./pages/Layout";

const App = () => {
  // Creating the router with routes and loaders
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/search',
          element: <SearchResults />,
          loader: searchLoader,
        },
      ]
    },
  ]);

  return (
    <>
      {/* Providing the router to the application */}
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
