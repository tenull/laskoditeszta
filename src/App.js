import * as React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingScreen from "./screens/LandingScreen";
import Tesztaink from "./screens/Tesztaink";
import Teszta from "./screens/Teszta";
import Bemutatkozas from "./screens/Bemutatkozas";
import Kapcsolat from "./screens/Kapcsolat";
import Footer from "./components/Footer";
import TesztaDetail from "./screens/TesztaDetail";
function App() {
  return (
    <ChakraProvider>
    <Router>
      <Header />
      <main className="mainapp">
        <Routes>
          <Route path="/" element={<LandingScreen />} />
         <Route path="/termekeink" element={<Tesztaink />} />
         <Route path="/termekeink/:category" element={<TesztaDetail />} />
         <Route path="/teszta/:name" element={<Teszta />} />
          <Route path="/bemutatkozas" element={<Bemutatkozas />} />
          <Route path="/kapcsolat" element={<Kapcsolat />} />
        </Routes>
      </main>
      {/* <Contacts/> */}
      <Footer/>
    </Router>
  </ChakraProvider>
  );
}

export default App;
