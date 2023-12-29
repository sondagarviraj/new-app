import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './My-Componets/Main';
import FeatureCard from './My-Componets/FeaturedCard';
import Footer from './My-Componets/Footer';

function App() {
  const isSmallScreen = window.innerWidth <= 992;
  return (
    <>

      <div className="app-container">
        <BrowserRouter>
          <Routes>
            {/* <Route path='/Main' element={<Main />} />
          <Route path='/' element={<Main />} />
          <Route path='/Footer' element={<Footer/>}/> */}
            <Route path='/Main' element={<Main />} />
            <Route path='*' element={<Main />} />
          </Routes>

        </BrowserRouter>



        <div className="content-container">
          <FeatureCard
            iconSrc="https://re-pos.in/wp-content/uploads/2019/11/ftr_set_icon_01.png"
            altText="Point Of Sale"
            title="Point Of Sale"
            description="Introducing a combination of unparalleled characteristics for managing your restaurant"
          />

          <FeatureCard
            iconSrc="https://re-pos.in/wp-content/uploads/2019/11/ftr_set_icon_02.png"
            altText="Stock Management"
            title="Stock Management"
            description="Helps you efficiently manage stock, unused items, reduce wastage and record new stock"
          />

          <FeatureCard
            iconSrc="https://re-pos.in/wp-content/uploads/2019/11/ftr_set_icon_03.png"
            altText="Sales & Marketing"
            title="Sales & Marketing"
            description="Enables you to drive result oriented sales and marketing campaigns for your restaurant"
          />

          <FeatureCard
            iconSrc="https://re-pos.in/wp-content/uploads/2019/11/ftr_set_icon_04.png"
            altText="Customer Relationship Toolg"
            title="Customer Relationship Tool"
            description="Helps you analyse customer behavior and enables you to stay in touch with your customers"
          />

          <FeatureCard
            iconSrc="https://re-pos.in/wp-content/uploads/2019/11/ftr_set_icon_05.png"
            altText="Franchise Management"
            title="Franchise Managementl"
            description="An exclusive feature for multichain restaurants or businesses operating on the franchisee model"
          />

          <FeatureCard
            iconSrc="https://re-pos.in/wp-content/uploads/2019/11/ftr_set_icon_06.png"
            altText="Head Office Module"
            title="Head Office Module"
            description="Central management of overall functioning of menus, recipes, inventory, user roles & permissions"
          />

          <FeatureCard
            iconSrc="https://re-pos.in/wp-content/uploads/2019/11/ftr_set_icon_07.png"
            altText="Reporting & Analytics"
            title="Reporting & Analytics"
            description="Get powerful insights about your restaurant on-the-go and use it to improvise your businessns"
          />

          <FeatureCard
            iconSrc="https://re-pos.in/wp-content/uploads/2019/11/ftr_set_icon_08.png"
            altText="Settings & Configuration"
            title="Settings & Configuration"
            description="Assists you in operating your business effectively with options that best suit your processes"
          />
        </div>

        {!isSmallScreen && <Footer />}
      </div>




    </>
  );
}

export default App;




