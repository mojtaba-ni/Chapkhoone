import React from 'react';
import Off from './layout/Off';
import { Navbar,Navside,Landing,InfoL,Title} from './AppIMP';
import { Line,OffPrice,ProductTitle,orderTitle } from './AppIMP';
import Order from './layout/Order';
import Footer from './layout/Footer';
import Product from './layout/Product';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-themee.css";
import menu from './assets/navbar/menu.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar menu={menu} />
      <Navside/>
      <Landing/>
      <InfoL/>
      <Title line={Line} Main={OffPrice} />
      <Off/>
      <Title line={Line} Main={ProductTitle} />
      <Product/>
      <Title line={Line} Main={orderTitle} />
      <Order/>
      <Footer/>
    </div>
  );
}

export default App;
