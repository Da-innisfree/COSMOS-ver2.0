import './App.scss';
import { Link } from "react-router-dom";
import Header from "./component/layout/Header.jsx"
import Main from "./view/Main.jsx";
import ProductList from './view/ProductList.jsx'

function App() {
  return (
    <div>
      <Header/>
      <div className="wrap">
        {/* <Main/> */}
        <ProductList/>
      </div>
    </div>
  );
}

export default App;
