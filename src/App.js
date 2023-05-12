import React from "react"
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Experiences from "./components/experience/Experience"
import Portofolio from "./components/portofolio/Portofolio"
import Contacts from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experiences/>
      <Portofolio/>
      <Contacts/>
      <Footer/>
    </>
  )
}

export default App