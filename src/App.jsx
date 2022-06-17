import './App.css';
import Header from './Components/Header/Header'
import Videos from './Components/Videos/Videos'
import SearchBox from './Components/SearchBox/SearchBox'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='bg-gray text-black'>
        <SearchBox />
        <Videos />
      </div>
    </div>
  );
}

export default App;
