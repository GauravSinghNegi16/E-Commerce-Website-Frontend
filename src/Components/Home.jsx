import React from 'react'
import Nav from './Nav';
import Hero from './Hero';
import Category from './Category';
import Products from './Product';
import Footer from './Footer';
import Banner from './Banner';
import AddProduct from './AddProduct';


function Home() {
    return (
        <div className="min-h-screen w-full">
            <Hero />
            <Category />
            <Banner />
            <Products />
            <Footer />
        </div>
    )
}

export default Home