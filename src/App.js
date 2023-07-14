import Header from './components/Header';
import './css/App.css';
import Books from './pages/Books';

function App() {
  return (
    <div className="App d-flex flex-column vh-100">
      <Header />
      <main className="main flex-grow-1">
        <Books />
      </main>
    </div>
  );
}

export default App;
