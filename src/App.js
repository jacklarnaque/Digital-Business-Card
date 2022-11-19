import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
function App() {
  return (
    <div className="card-container">
      <div className='container'>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
