import React, { useState, useEffect } from 'react'
import './Orders.css'
import { db } from './firebase'
import { useStateValue } from "./StateProvider"
import { DialogContent } from '@material-ui/core';
import Order from "./Order"

function Orders() {

    const [orders, setOrders] = useState([]);
    const [{ basket, user }, dispatch] = useStateValue();

    useEffect(() => {
        if (user) {
            console.log("db.collection('users') -->",db.collection('users').doc(user?.uid).collection('orders').doc('Items'));
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                // .doc('Items')
                // .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
        } else {
            setOrders([])
        }

    }, [user])

    return (
        <div className="orders">
            <h1>Your Orders</h1>

            <div className="orders__order">
                {orders?.map(order => (
                    < Order order={order}/>
                ))}
            </div>
        </div>
    )
}

export default Orders
