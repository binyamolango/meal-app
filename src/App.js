import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LocationMenu from "./components/LocationMenu";
import NavBar from "./components/Navbar";
import MealList from "./components/MealList";
import MealDetails from "./components/MealDetails";
import MealDisplay from "./components/MealDisplay";
import NotFound from "./components/NotFount";

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
            <Route path="/location/:id" element={<LocationMenu />} />
            <Route path="/location/:id/meal-details/:id" element={<MealDetails />} />
            <Route path="/meal-list/:id/meal-details/:id" element={<MealDetails />} />
            <Route path="/meal-list/:id" element={<MealList />} />
            <Route path="/meal-display/:name" element={<MealDisplay />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;