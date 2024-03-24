import Header from "./Header";
import Navbar from "./NavBar";
import Introduction from "./Introduction";
function App() {
  return (
    <section>
      <Header />
      <Navbar />

      <div className="container mx-auto">
        <Introduction />
      </div>
    </section>
  );
}

export default App;
