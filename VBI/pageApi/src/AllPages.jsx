// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryPage from './components/CatagoryPage';
import SingleProducts from './components/SingleProducts';
import Product from './components/Product';
import Slug from './components/Slug';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Submitbtn from './components/Submitbtn';
import RecentView from './components/RecentView';


const AllPages = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<CategoryPage />} />
                <Route path="/category/:id" element={<SingleProducts />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path='/product/:slug' element={<Slug />} />

                <Route path='/Cart' element={<Cart />} />
                <Route path='/Wishlist' element={<Wishlist />} />
                <Route path='/Submitbtn' element={<Submitbtn />} />

                <Route path='/RecentView' element={<RecentView />} />

            </Routes>
        </Router>
    );
};

export default AllPages;
