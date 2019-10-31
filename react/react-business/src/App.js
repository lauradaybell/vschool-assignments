import React from 'react';

// My Components
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

// Stylesheet
import './App.css'

const App = () => {
    return (
        <div>
            <Nav />
            <Main />
            <Footer />
        </div>
    )
}

export default App