import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import darkTheme from "./components/Theme";

function App() {

  //const state variables
  
  return(
    <ThemeProvider theme={darkTheme}>
      <div className="App"> 
        <CssBaseline />
          hello
        
      </div>
    </ThemeProvider>
  )
}

export default App;