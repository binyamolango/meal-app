import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LocationMenu from "./components/LocationMenu";
import Search from "./components/Search";
import NavBar from "./components/Navbar";
import MealList from "./components/MealList";
import MealDetails from "./components/MealDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <section className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/location" element={<LocationMenu />} />
            <Route path="/search" element={<Search />} />
            <Route path="/meal-details" element={<MealDetails />} />
            <Route path="/meal-list/:id" element={<MealList />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;