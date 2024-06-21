// Importing necessary hooks and components from React and React Router
import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
import Search from "./Search";

const SearchResults = () => {
  // Using loader data to get the search results and related information
  const { searchResults, searchResultsTypeName, searchResultsTypeValue } = useLoaderData();

  return (
    <>
      <Search/>
      {/* Suspense component to show fallback content while data is loading */}
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={searchResults}>
          {(data) => (
            <>
              <div className="searched-text">
                <h1 style={{
                  fontSize:'22px',
                  marginBottom:'8px',
                  marginTop:'8px',
                }}>
                  Showing results for {data.query} in {searchResultsTypeName} :
                </h1>
              </div>
              <div className="search-card-container">
                {searchResultsTypeValue && searchResultsTypeValue.items.length > 0 ? (
                  searchResultsTypeValue.items.map((item, index) => {
                    // Destructuring necessary properties from the item data
                    const { name, 
                      publisher, 
                      type, 
                      coverArt, 
                      artists, 
                      date, 
                      profile, 
                      visuals, 
                      uri: artistURI,
                      albumOfTrack,
                      image,
                    } = item.data;

                    // Selecting the appropriate URL for the image
                    const url = coverArt?.sources?.[0]?.url || visuals?.avatarImage?.sources?.[0]?.url 
                      || albumOfTrack?.coverArt?.sources?.[0]?.url || image?.sources?.[0]?.url;

                    return (
                      <div key={index} className="search-card">
                        {url ? <img src={url} alt={name} className="img"/> : <p className="img">No image available</p>}
                        <h1>{name}</h1>
                        {publisher && <p>Publisher: {publisher.name}</p>}
                        {artists?.items?.[0]?.profile && (
                          <p>
                            Artist: <a href={artists.items[0].uri} target="_blank" rel="noopener noreferrer">{artists.items[0].profile.name}</a>
                          </p>
                        )}
                        {date && <p>Release year: {date.year}</p>}
                        {type && <p>Type: {type}</p>}
                        {profile && (
                          <p>
                            Artist: <a href={artistURI} target="_blank" rel="noopener noreferrer">{profile.name}</a>
                          </p>
                        )}
                        {albumOfTrack && <p>Album: <a href={albumOfTrack.sharingInfo.shareUrl} target="_blank" rel="noopener noreferrer">
                          {albumOfTrack.name}
                          </a>
                        </p>}
                      </div>
                    );
                  })
                ) : (
                  <div>No results match</div>
                )}
              </div>
            </>
          )}
        </Await>
      </Suspense>
    </>
  );
};

export default SearchResults;
