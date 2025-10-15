import { Header } from '../components/Header'
import { Link, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './TrackingPage.css'
import dayjs from 'dayjs';

export function TrackingPage({ cart }){
    const {orderId, productId} = useParams();
    const [order,setOrder] = useState(null);
    useEffect(() => {
        const fetchOrderData = async () => {
            const response = await axios.get(`/api/orders/${orderId}?expand=products`);
            setOrder(response.data);
        };
        fetchOrderData();
            

    },[orderId])
    if(!order){
        return null
    }
    const orderProduct = order.products.find((orderProduct) => {
    return orderProduct.productId === productId;
  });
    return(
        <>
       <Header cart={cart}/>
            <title>Tracking</title>
            <body>
                <div class="header">
                <div class="left-section">
                    <Link to="/" class="header-link">
                    <img class="logo"
                        src="images/logo-white.png" />
                    <img class="mobile-logo"
                        src="images/mobile-logo-white.png" />
                    </Link>
                </div>

                <div class="middle-section">
                    <input class="search-bar" type="text" placeholder="Search" />

                    <button class="search-button">
                    <img class="search-icon" src="images/icons/search-icon.png" />
                    </button>
                </div>

                <div class="right-section">
                    <Link class="orders-link header-link" to="/orders">

                    <span class="orders-text">Orders</span>
                   </Link>

                    <Link class="cart-link header-link" to="/checkout">
                    <img class="cart-icon" src="images/icons/cart-icon.png" />
                    <div class="cart-quantity">3</div>
                    <div class="cart-text">Cart</div>
                    </Link>
                </div>
                </div>

                <div class="tracking-page">
                <div class="order-tracking">
                    <Link class="back-to-orders-link link-primary" to="/orders">
                    View all orders
                    </Link>

                    <div class="delivery-date">
                    {dayjs(orderProduct.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                    </div>

                    <div class="product-info">
                    {orderProduct.product.name}
                    </div>

                    <div class="product-info">
                    Quantity: {orderProduct.quantity}
                    </div>

                    <img class="product-image" src={orderProduct.product.image} />

                    <div class="progress-labels-container">
                    <div class="progress-label">
                        Preparing
                    </div>
                    <div class="progress-label current-status">
                        Shipped
                    </div>
                    <div class="progress-label">
                        Delivered
                    </div>
                    </div>

                    <div class="progress-bar-container">
                    <div class="progress-bar"></div>
                    </div>
                </div>
                </div>
            </body>
        </>
        )
}