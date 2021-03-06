import React from "react";
import Header from '../../Components/Header/Header';
import Main from '../../Components/Main/Main';
import Portfolio from '../../Components/Portfolio/Portfolio';
import Skills from '../../Components/Skills/Skills';
import About from '../../Components/About/About';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';

const PageLayout = () => {
    return (
        <div>
            <Header elevation={0} />
            <Main />
            <Portfolio/>
            <Skills />
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default PageLayout;