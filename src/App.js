import React from 'react';
import LandingPage from './components/LandingPage';
import { BrowserRouter } from 'react-router-dom';



class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <LandingPage />
            </BrowserRouter>
        );  
    }
}

export default App;