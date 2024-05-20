import "./App.css";
import { AboutUs } from "./assets/components/AboutUs/AboutUs";
import { HomeImages } from "./assets/components/HomeImages/HomeImages";
import { NavigationBar } from "./assets/components/NavigationBar/NavigationBar";
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from "@chakra-ui/react";
import { Location } from "./assets/components/Location/Location";
import { Footer } from "./assets/components/Footer/Footer";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <div className="App">
        <NavigationBar></NavigationBar>
        <HomeImages></HomeImages>
        <AboutUs></AboutUs>
        <Location></Location>
        <Footer></Footer>
      </div>
    </ChakraBaseProvider>
  );
}

export default App;
