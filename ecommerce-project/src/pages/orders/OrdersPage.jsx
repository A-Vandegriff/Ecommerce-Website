import './OrdersPage.css';
import { OrdersGrid } from './OrdersGrid';
import { Header } from '../../components/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';
export function OrdersPage({ cart }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrderData = async () => {
            const response = await axios.get('/api/orders?expand=products')
            setOrders(response.data);
        }
        fetchOrderData();

    }, []);
    return (
        <>
            <title>Orders</title>

            <Header cart={cart} />
            <link rel="icon" href="images/orders-favicon.png" />
            <div className="orders-page">
                <div className="page-title">Your Orders</div>
                <OrdersGrid orders={orders} />
            </div>
        </>
    );
}