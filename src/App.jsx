import './App.css';
import Header from './Components/Header/Header'
import Videos from './Components/Videos/Videos'
import SearchBox from './Components/SearchBox/SearchBox'
import Footer from './Components/Footer/Footer'
import ShowMore from './Components/Button/ShowMore';

function App() {
  return (
    <div className="App">
      <Header />
        <SearchBox />
        <Videos />
        <ShowMore />
      <Footer />
    </div>
  );
}

export default App;
