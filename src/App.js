import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import MainTop from "./components/MainTop";
import MainContent from "./components/MainContent";
library.add(faPlusCircle, faMinusCircle);

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://andromeda22-deliveroo-backend.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>Chargement en cours...</span>
  ) : (
    <div className="page">
      <Header />
      <main>
        <MainTop data={data} />
        <MainContent data={data} />
      </main>
    </div>
  );
}

export default App;
