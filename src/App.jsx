import './App.css';
import Header from './Components/Header/Header'
import Videos from './Components/Videos/Videos'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='bg-gray text-black'>
        <Videos />
      </div>
    </div>
  );
}

export default App;
