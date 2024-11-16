import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from './Products'
import Contact from './Contact'
import SingleProducts from './SingleProducts'
import Cart from './Cart'
import ErrorPage from './ErrorPage'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Submitbtn from './Submitbtn'
import WishList from './WishList'
import ScrollToTop from '../Components/ScrollToTop'
import RecentView from './RecentView'


const Allpages = () => {
    return (
        <div>
            <BrowserRouter>
                <ScrollToTop />
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Products' element={<Products />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/SingleProducts/:id' element={<SingleProducts />} />
                    <Route path='/WishList' element={<WishList />} />
                    <Route path='/Cart' element={<Cart />} />
                    <Route path='/RecentView' element={<RecentView />} />
                    <Route path='*' element={<ErrorPage />} />
                    <Route path='/Submitbtn' element={<Submitbtn />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Allpages
