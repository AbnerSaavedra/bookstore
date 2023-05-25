import './App.css';
import Nav from './components/Nav';
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Nav />

      <h1>Learn React Router</h1>

      <br/>
      <Link to="/">Home</Link> {" | "}
      <Link to="/routes/books">Books</Link> {" | "}
      <Link to="/routes/users">Users</Link>
      <br/>
      <Outlet />

    </div>
  );
}

export default App;
