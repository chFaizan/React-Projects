import NetFlixCard from "./components/netflixseries";
import "./components/NetFlix.module.css";


 const App =() =>{
  return(
    <section className="container">
      <h1 className="card-heading">List of netflix Series</h1>
    <NetFlixCard />

    </section>
  )
};

export default App;
