import React from 'react'
import 'antd/dist/antd.less'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Loginpage from '../pages/login/Loginpage'
import Signuppage from '../pages/signup/Signuppage'
import StorePage from '../pages/storepage/StorePage'
import SingleDetailPage from '../pages/singledetailpage/SingleDetailPage'
import SingleDetailPage2 from '../pages/singledetailpage/SingleDetailPage2'
import Cartpage from '../pages/Cartpage/Cartpage'
import Collectionpage from '../pages/collectionpage/Collectionpage'
import Checkoutpage from '../pages/checkout/Checkoutpage'
import MusicAllPage from '../pages/musciallpage/MusicAllPage'
import ArtistPage from '../pages/artist/ArtistPage'
import ArtisttProfilePage from '../pages/artistprofilepage/ArtisttProfilePage'
import MarketPlacePage from '../pages/marketplacepage/MarketPlacePage'
import ProfilePage from '../pages/profilepage/ProfilePage'
import Navbarnfs from '../components/nfsnavbar/Navbarnfs'
import Footer from '../components/footer/Footer'

function Routing(){    
    return (
        <Router>
            <Navbarnfs />
            <Routes>
                <Route path="/" element={<Loginpage />}/>
                <Route path="/signup" element={<Signuppage />}/>
                <Route path="/store" element={<StorePage />}/>
                <Route path="/single" element={<SingleDetailPage />}/>
                <Route path="/single2" element={<SingleDetailPage2 />}/>
                <Route path="/cart" element={<Cartpage />}/>
                <Route path="/collection" element={<Collectionpage />}/>
                <Route path="/checkout" element={<Checkoutpage />}/>
                <Route path="/musicall" element={<MusicAllPage />}/>
                <Route path="/artist" element={<ArtistPage />}/>
                <Route path="/artistprofile" element={<ArtisttProfilePage />}/>
                <Route path="/marketplace" element={<MarketPlacePage />}/>
                <Route path="/profile" element={<ProfilePage />}/>
            </Routes>
            <Footer />
        </Router>    
    )
}

export default Routing;