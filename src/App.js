import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHadnler = () => {
        setCartIsShown(true);
    }

    const hideCartHadnler = () => {
        setCartIsShown(false);
    }

    return (
        <React.Fragment>
            {cartIsShown && <Cart onClose={hideCartHadnler}/>}
            <Header onShowCart={showCartHadnler} />
            <main>
                <Meals/>
            </main>
        </React.Fragment>
    );
}

export default App;
