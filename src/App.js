import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { store } from "./redux/store";
import { Provider } from 'react-redux'
import Navbar from "./components/Navbar";
import Title from "./components/Title";

const App = () => {
  return (
    <>


      <Provider store={store}>
        <React.Fragment>
          <Navbar />
          <Title />
          <Layout />
        </React.Fragment>
      </Provider>


    </>
  );
};

export default App;