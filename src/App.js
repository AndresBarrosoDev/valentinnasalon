import "./App.css";
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./assets/components/NavigationBar/NavigationBar";
import { HomePage } from "./assets/pages/HomePage/HomePage";
import { Barberia } from "./assets/pages/Barberia/Barberia";
import { Peluqueria } from "./assets/pages/Peluqueria/Peluqueria";
import { Estetica } from "./assets/pages/Estetica/Estetica";
import { Salon } from "./assets/pages/Salon/Salon";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Router>
        <div className="App">
          <NavigationBar></NavigationBar>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/peluqueria" element={<Peluqueria />} />
            <Route path="/estetica" element={<Estetica />} />
            <Route path="/salon" element={<Salon />} />
            <Route path="/barberia" element={<Barberia />} />
          </Routes>
        </div>
      </Router>
    </ChakraBaseProvider>
  );
}

export default App;
