// Importing necessary libraries
import axios from "axios";
import { defer } from "react-router-dom";

// Loader function to fetch search results from Spotify API
export const searchLoader = async ({ request }) => {
  // Extracting query parameters from the request URL
  const url = new URL(request.url);
  const searchValue = url.searchParams.get('searchValue');
  const searchValueType = url.searchParams.get('searchValueType');

  try {
    // Making a GET request to the Spotify API
    const { data } = await axios.get('https://spotify23.p.rapidapi.com/search/', {
      params: {
        q: searchValue,
        type: searchValueType,
        offset: '0',
        limit: '10',
        numberOfTopResults: '6'
      },
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
        'x-rapidapi-host': 'spotify23.p.rapidapi.com'
      }
    });
    console.log(data)

    // Extracting necessary data from the API response
    const searchResultsTypeName = Object.keys(data)[1];
    const searchResultsTypeValue = data[searchResultsTypeName];

    // Returning the data as a deferred object
    return defer({
      searchResults: data,
      searchResultsTypeName,
      searchResultsTypeValue
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch search results");
  }
};
