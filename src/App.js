import React from 'react';
import "./App.css"
import Button from '@material-ui/core/Button'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from "./temaConfig.js"
import NavBar from './components/NavBar';
import Typography from '@material-ui/core/Typography'
import ItemListContainer from './components/ItemListContainer';



function App() {

  return (
    <ThemeProvider  theme ={theme}>
      <div className="App-header">
        <NavBar />
      </div>
      
      <ItemListContainer greeting="Soluciones Digitales"/>
      
    </ThemeProvider>
    
    
  );
}

export default App;