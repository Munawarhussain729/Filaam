import "./App.css";
import ActorDetails from "./components/ActorDetail/ActorDetails";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <MovieDetails />
      <ActorDetails />
    </div>
  );
}

export default App;
