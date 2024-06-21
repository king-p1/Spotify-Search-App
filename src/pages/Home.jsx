// Importing the Search component from the components directory
import { Search } from '../components';

const Home = () => {
  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection:'column',
        alignItems:"center"
      }}>
        <div
          style={{
            marginTop:'15%',
            padding:'15px',
            textAlign:'center'
          }}
        >
          <h3>Look up Artists, Songs, Albums, Podcasts etc</h3>
          <p>All with the help of Spotify&apos;s API</p>
        </div>
        <Search/>
      </div>
    </>
  );
}

export default Home;
