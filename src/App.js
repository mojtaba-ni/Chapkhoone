import React from 'react';
import Off from './layout/Off';
import { Navbar,Navside,Landing,InfoL,Title} from './AppIMP';
import { Line,OffPrice,ProductTitle,orderTitle } from './AppIMP';
import './App.css';
import Order from './layout/Order';
import Footer from './layout/Footer';
import Card from './components/card';
import Product from './layout/Product';

function App() {
  return (
    <div className="App">
      <Navbar/>
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
