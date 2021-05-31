import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from "./store/CartProvider";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHadnler = () => {
        setCartIsShown(true);
    }

    const hideCartHadnler = () => {
        setCartIsShown(false);
    }

    return (
        <CartProvider>
            {cartIsShown && <Cart onClose={hideCartHadnler}/>}
            <Header onShowCart={showCartHadnler} />
            <main>
                <Meals/>
            </main>
        </CartProvider>
    );
}

export default App;
