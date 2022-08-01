import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Card } from './components/Card';
import Footer from './components/footer';
import { Header } from './components/Header';
import {Container} from "./components/styles/container.styles";
import GlobalStyles from './components/styles/global';
import content from "./content.js"
const theme={
  colors:{
    headers:"#ebfbff",
    body:"#fff",
    footer:"#003333"
  },
  mobile:"768px"
}


function App() {
  return (
    <ThemeProvider theme={theme} >
    <>
    <GlobalStyles />
     <Header />
     <Container>
   {content.map((item,key)=>{
    return <Card item={item} key={key} />
   })}
  
   </Container>
   <Footer />
    </>
    </ThemeProvider>
  );
}

export default App;