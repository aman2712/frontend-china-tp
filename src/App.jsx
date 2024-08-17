import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Slogan from "./components/slogan";
import Events from "./components/events";
import History from "./components/history";
import Food from "./components/food";
import People from "./components/people";
import Help from "./components/help";
import Footer from "./components/footer";

function App() {
  return (
    <main className="container-special">
      <Navbar />
      <Banner />
      <Slogan />
      <Events />
      <History />
      <Food />
      <People />
      <Help />
      <Footer />
    </main>
  );
}

export default App;
