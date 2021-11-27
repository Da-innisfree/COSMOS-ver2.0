import './App.scss';
import AppRouter from './router/router.jsx';
import Header from "./component/layout/Header.jsx"
import Footer from "./component/layout/Footer.jsx"

function App() {
  return (
    <>
      <Header/>
      <div className = "main_warp">
        <AppRouter/>
      </div>
      <Footer/>
    </>
    );
}

export default App;
