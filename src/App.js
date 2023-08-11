// import logo from './logo.svg';
import './App.scss';
import Header1 from './Components/Header1/Header1';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Page2 from './Components/Page2/Page2'
import Page3 from './Components/Page3/Page3';
import Page4 from './Components/Page4/Page4';
import SignUp from './Components/Signup/SignUp';
import Footer  from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <div className="nav_box">
        <Header1/>
        <Header />
        <Intro/>
        <Page2/>
        <Page3/>
        <Page4/>
        <SignUp/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
