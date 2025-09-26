import './CheckoutHeader.css';
import { NavLink } from 'react-router';
import Logo from '/src/assets/images/logo.png'
import MobileLogo from '/src/assets/images/mobile-logo.png'
import CheckoutLock from '/src/assets/images/icons/checkout-lock-icon.png'
export function CheckoutHeader(){
<title>Checkout</title>
        
        return(
            <>
            <div className="checkout-header">
                <div className="header-content">
                    <div className="checkout-header-left-section">
                        <NavLink to="/">
                            <img className="logo" src={Logo} />
                            <img className="mobile-logo" src={MobileLogo} />
                        </NavLink>
                    </div>

                    <div className="checkout-header-middle-section">
                        Checkout (<NavLink className="return-to-home-link"
                            to="/">3 items</NavLink>)
                    </div>

                    <div className="checkout-header-right-section">
                        <img src={CheckoutLock} />
                    </div>
                </div>
            </div>
            </>
        )
}