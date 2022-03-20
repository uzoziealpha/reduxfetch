import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { store } from "./redux/store";
import {Provider} from 'react-redux'
import Navbar from "./components/Navbar";


const App = () => {
  return (  
    
<Provider store={store}>
      <React.Fragment> 
        <Navbar/>
        <Layout/>
      </React.Fragment>
</Provider>

  

  );
};

export default App;